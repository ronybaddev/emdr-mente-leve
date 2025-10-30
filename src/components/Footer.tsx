export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary">
            Psicologia EMDR
          </div>
          <p className="text-muted-foreground">
            Transformando vidas através da terapia EMDR
          </p>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Psicologia EMDR. Todos os direitos reservados.
          </div>
          <p className="text-xs text-muted-foreground">
            CRP: 108802 - Psicóloga responsável
          </p>
        </div>
      </div>
    </footer>
  );
};
