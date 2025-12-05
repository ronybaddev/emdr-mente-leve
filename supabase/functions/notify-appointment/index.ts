import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  preferred_date?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointment: AppointmentRequest = await req.json();
    
    console.log("Received appointment notification request:", appointment);

    const formattedDate = appointment.preferred_date 
      ? new Date(appointment.preferred_date).toLocaleDateString('pt-BR')
      : 'Não especificada';

    // Send notification email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Psicologia EMDR <onboarding@resend.dev>",
        to: ["ronyynor2@hotmail.com"],
        subject: `Novo Agendamento - ${appointment.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #4A90A4; border-bottom: 2px solid #E8B4B8; padding-bottom: 10px;">
              Nova Solicitação de Agendamento
            </h1>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #333; margin-top: 0;">Dados do Paciente:</h2>
              
              <p style="margin: 10px 0;"><strong>Nome:</strong> ${appointment.name}</p>
              <p style="margin: 10px 0;"><strong>E-mail:</strong> ${appointment.email}</p>
              <p style="margin: 10px 0;"><strong>Telefone:</strong> ${appointment.phone}</p>
              <p style="margin: 10px 0;"><strong>Data Preferencial:</strong> ${formattedDate}</p>
              ${appointment.message ? `<p style="margin: 10px 0;"><strong>Mensagem:</strong> ${appointment.message}</p>` : ''}
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Este e-mail foi enviado automaticamente pelo sistema de agendamento do site psicologiaemdr.com.br
            </p>
          </div>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true, emailData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in notify-appointment function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
