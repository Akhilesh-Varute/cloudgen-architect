import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Akhilesh Varute. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Cloud & AI Solutions Engineer | Pune, India
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-6 text-sm">
            <a 
              href="/" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="/projects" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="/contact" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Akhilesh-Varute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/akhileshvarute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:akhileshvarute23@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom: Built with note */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            Architected with React, TypeScript, and Tailwind CSS. Hosted on AWS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;