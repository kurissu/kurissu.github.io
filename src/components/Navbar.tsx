import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Kris Tantinirundr
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {navItems.map(item => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => 
                  `transition-colors hover:text-primary ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
                }
                end
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Right Side - Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Contact Button - Desktop */}
          <Button asChild className="hidden md:flex">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          
          {/* Mobile Navigation */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <NavLink 
                    key={item.path} 
                    to={item.path} 
                    onClick={() => setMobileNavOpen(false)}
                    className={({ isActive }) => 
                      `px-2 py-1 rounded-md transition-colors ${
                        isActive 
                          ? 'bg-secondary font-medium' 
                          : 'hover:bg-secondary/50'
                      }`
                    }
                    end
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button className="mt-4" asChild>
                  <Link to="/contact" onClick={() => setMobileNavOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}