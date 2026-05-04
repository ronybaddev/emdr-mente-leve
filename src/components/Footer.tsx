import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border/20 bg-background/50 backdrop-blur-md overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl font-bold text-primary">
            Psicologia EMDR
          </div>
          <p className="text-foreground/80">
            Transformando vidas através da terapia EMDR
          </p>
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Psicologia EMDR. Todos os direitos reservados.
          </div>
          <p className="text-xs text-foreground/60">
            CRP: 108802 - Psicóloga responsável
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
