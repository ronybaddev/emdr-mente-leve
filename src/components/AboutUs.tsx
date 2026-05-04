import { Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
const stats = [{
  icon: Award,
  value: "Certificação",
  label: "Internacional EMDR"
}, {
  icon: Users,
  value: "500+",
  label: "Pacientes atendidos"
}, {
  icon: Clock,
  value: "10+ anos",
  label: "De experiência"
}];
export const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Quem <span className="text-secondary">Somos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma equipe de profissionais dedicados ao seu bem-estar emocional
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-6 bg-card/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-lg text-foreground leading-relaxed text-justify">
              Nossa equipe é formada por psicólogos especializados e certificados em EMDR, 
              comprometidos em oferecer um atendimento humanizado e de excelência.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-lg text-foreground leading-relaxed text-justify">
              Acreditamos no poder transformador da terapia EMDR e trabalhamos com dedicação 
              para ajudar cada pessoa a superar seus desafios emocionais e alcançar uma vida 
              mais plena e equilibrada.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="text-lg text-foreground leading-relaxed text-justify">
              Nosso consultório oferece um ambiente acolhedor, seguro e confidencial, onde 
              você pode se sentir à vontade para compartilhar suas experiências e iniciar 
              sua jornada de cura.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                whileHover={{ scale: 1.05 }}
                className="bg-card/90 backdrop-blur-sm rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow border border-border/50"
              >
                <stat.icon className="w-12 h-12 text-primary flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};