import { useState } from "react";
import { Calendar, Clock, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";

export const Scheduling = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Usando Formsubmit para envio direto para o seu e-mail de forma simples e sem backend
      // IMPORTANTE: Substitua 'SEU_EMAIL_AQUI@exemplo.com' pelo seu e-mail real.
      // No primeiro envio, você receberá um e-mail do Formsubmit pedindo para confirmar.
      const response = await fetch("https://formsubmit.co/ajax/ronybaddev@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Telefone: formData.phone,
          Data_Preferencial: formData.date || "Não informada",
          Mensagem: formData.message || "Nenhuma mensagem"
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para confirmar seu agendamento."
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agende sua <span className="text-primary">Consulta</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo para sua transformação. Preencha o formulário e entraremos em contato
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="border-none shadow-lg bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">Horários Flexíveis</h3>
                    <p className="text-muted-foreground text-justify">
                      Oferecemos horários variados para atender sua rotina, incluindo manhãs, 
                      tardes e alguns horários noturnos.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="border-none shadow-lg bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">Sessões Personalizadas</h3>
                    <p className="text-muted-foreground text-justify">
                      Cada sessão é planejada de acordo com suas necessidades específicas, 
                      garantindo o melhor resultado terapêutico.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <Card className="border-none shadow-lg bg-card/90 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <User className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-card-foreground">Atendimento Humanizado</h3>
                    <p className="text-muted-foreground text-justify">
                      Priorizamos um ambiente acolhedor e respeitoso, onde você se sente 
                      seguro para compartilhar e crescer.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-xl bg-card/90 backdrop-blur-sm">
              <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Nome Completo</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                    className="mt-2 bg-background" 
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-card-foreground">E-mail</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                    className="mt-2 bg-background" 
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-card-foreground">Telefone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    disabled={isSubmitting}
                    className="mt-2 bg-background" 
                  />
                </div>

                <div>
                  <Label htmlFor="date" className="text-card-foreground">Data Preferencial</Label>
                  <Input 
                    id="date" 
                    name="date" 
                    type="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    disabled={isSubmitting}
                    className="mt-2 bg-background" 
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-card-foreground">Mensagem (opcional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={4} 
                    disabled={isSubmitting}
                    className="mt-2 bg-background" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Solicitar Agendamento"
                  )}
                </Button>
              </form>
            </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
