import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { siteConfig, navLinks } from '../data/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: siteConfig.contact.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.contact.linkedin, label: 'LinkedIn' },
    { icon: MessageCircle, href: siteConfig.contact.whatsapp, label: 'WhatsApp' },
    { icon: Mail, href: `mailto:${siteConfig.contact.email}`, label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-dark-950">
      <div className="container-custom section-padding !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-cyan-accent flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building fast, modern websites for businesses, startups, and creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href.startsWith('#') ? `/${link.href}` : link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass glass-hover flex items-center justify-center text-gray-400 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
