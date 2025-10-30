import { useState } from "react";
import { Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export const Scheduling = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para confirmar seu agendamento.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agende sua <span className="text-primary">Consulta</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dê o primeiro passo para sua transformação. Preencha o formulário e entraremos em contato
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Horários Flexíveis</h3>
                  <p className="text-muted-foreground">
                    Oferecemos horários variados para atender sua rotina, incluindo manhãs, 
                    tardes e alguns horários noturnos.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <Clock className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Sessões Personalizadas</h3>
                  <p className="text-muted-foreground">
                    Cada sessão é planejada de acordo com suas necessidades específicas, 
                    garantindo o melhor resultado terapêutico.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="p-6 flex items-start gap-4">
                <User className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-card-foreground">Atendimento Humanizado</h3>
                  <p className="text-muted-foreground">
                    Priorizamos um ambiente acolhedor e respeitoso, onde você se sente 
                    seguro para compartilhar e crescer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl bg-card animate-fade-in">
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
                    className="mt-2 bg-background"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg py-6"
                >
                  Solicitar Agendamento
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
