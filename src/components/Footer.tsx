import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      href: personalInfo.github,
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      href: personalInfo.linkedin,
      label: "LinkedIn"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      href: `mailto:${personalInfo.email}`,
      label: "Email"
    },
  ];

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Description */}
          <div className="md:w-1/3">
            <Link to="/" className="font-bold text-xl">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Kris Tantinirundr
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Full Stack Developer specializing in modern web technologies.
              Building responsive, user-friendly applications with a focus on performance and accessibility.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a 
                    href={link.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}