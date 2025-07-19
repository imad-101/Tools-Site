import { Github, Twitter, Linkedin, Mail, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerLinks = {
    tools: [
      { name: "UDF to PDF Converter", href: "/convert-udf-to-pdf" },
      { name: "ZPL to PDF Converter", href: "/convert-zpl-to-pdf" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    support: [
      { name: "Help Center", href: "/contact" },
      { name: "FAQ", href: "/about#faq" },
      { name: "Report Issue", href: "/contact" },
      { name: "Feature Request", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-foreground">
                  Free Tool Now
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The ultimate directory for professional online tools. Discover,
                explore, and boost your productivity.
              </p>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Tools</h3>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Free Tool Now. All rights reserved.
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            Made with
            <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
            for the community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
