import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToAgendamento = () => {
    const element = document.querySelector("#agendamento");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 1,
      }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <motion.div 
        className="container mx-auto px-4 py-20 relative z-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Transforme sua vida com
          <span className="block mt-2 text-primary">Psicologia EMDR</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground/90">
          Uma abordagem terapêutica eficaz para superar traumas e alcançar o bem-estar emocional
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button 
            onClick={scrollToAgendamento}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
          >
            Agende sua Consulta
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
