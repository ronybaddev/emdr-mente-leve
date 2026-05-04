import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import fotoAvatar from "@/assets/imgsite.jpeg";
export const Psychologists = () => {
  return (
    <section id="psicologos" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Nossos <span className="text-secondary">Psicólogos</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative rounded-2xl p-8 md:p-12 shadow-lg border border-border overflow-hidden bg-card/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-20">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                <Avatar className="w-32 h-32 flex-shrink-0 border-4 border-primary/20">
                  <AvatarImage src={fotoAvatar} alt="Patrícia - Psicóloga Clínica" />
                  <AvatarFallback className="text-3xl bg-primary/10 text-primary">PRM</AvatarFallback>
                </Avatar>
              </motion.div>
              
              <div className="flex-1 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h4 className="text-2xl font-bold text-foreground mb-1">Patrícia Rios de Miranda</h4>
                  <p className="text-lg text-primary font-semibold">Psicóloga Clínica - Crp:108802</p>
                  <p className="text-lg text-secondary font-semibold">Especialista em Terapia Familiar e EMDR</p>
                </motion.div>
                
                <motion.div 
                  className="space-y-3 text-foreground/90 leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                    }
                  }}
                >
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-justify">
                    Sou psicóloga formada pela Faculdade de Ciências de Guarulhos (2011), com mais de 13 anos de experiência na área da saúde mental. Atuo no SUS há mais de uma década, onde construí uma base sólida e humana para minha prática clínica, além de atender em consultório particular. Em 2016, concluí minha pós-graduação em Terapia Familiar e de Casal pela PUC-SP, ampliando minha visão sistêmica do ser humano.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-justify">
                    Acredito na importância de enxergar o indivíduo em sua totalidade — corpo, alma e espírito — e meu propósito é promover alívio emocional e qualidade de vida. Em 2023, me especializei em Terapia EMDR, abordagem que me encantou por sua eficácia em promover mudanças profundas por meio de estímulos bilaterais, indo além da fala tradicional.
                  </motion.p>
                  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-justify">
                    Meu trabalho é guiado pela escuta sensível, pelo acolhimento e pela busca constante de aprimoramento para oferecer o melhor cuidado possível a quem me procura.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};