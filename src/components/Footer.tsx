const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} <span className="text-primary font-semibold">Your Name</span>. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/80 mt-2">
            Built with passion using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
