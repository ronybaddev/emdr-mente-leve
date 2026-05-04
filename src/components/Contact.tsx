import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
const contactInfo = [{
  icon: Phone,
  title: "Telefone",
  content: "+55 11 97528-4635",
  link: "https://wa.me/5511975284635"
}, {
  icon: Mail,
  title: "E-mail",
  content: "contato@psicologiaemdr.com.br",
  link: "mailto:contato@psicologiaemdr.com.br"
}];
export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em <span className="text-secondary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar. Escolha a melhor forma de nos contatar
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.div 
              key={index}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-none shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm group h-full">
              <CardContent className="p-8 text-center">
                <a href={info.link} className="block" target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{info.title}</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors break-words">
                    {info.content}
                  </p>
                </a>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl p-8 max-w-3xl mx-auto border border-border overflow-hidden bg-card/90 backdrop-blur-sm shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground relative z-20">Horário de Atendimento</h3>
            <div className="space-y-2 text-muted-foreground relative z-20">
              <p>Segunda a Sexta: 8h às 20h</p>
              
              <p className="text-sm mt-4 text-muted-foreground/80 font-extrabold">
                * Atendimentos mediante agendamento prévio
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};