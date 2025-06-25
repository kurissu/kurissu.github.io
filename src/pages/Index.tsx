import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Preview Section */}
        <section id="skills" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">My Technical Skills</h2>
          <Skills />
          
          <div className="mt-12 text-center">
            <Link to="/about">
              <Button className="mt-6">
                Learn more about me
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Projects Preview */}
        <section className="py-16 bg-muted/50">
          <div className="px-4 md:px-8 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out some of my recent work and projects that showcase my full-stack development skills
            </p>
            
            <Link to="/projects">
              <Button variant="secondary" className="mt-6">
                View All Projects
              </Button>
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for full-stack development positions. Get in touch and let's discuss how I can contribute to your team.
            </p>
            
            <Link to="/contact">
              <Button className="mt-6">
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Scroll Down Button */}
        <div className="fixed bottom-8 right-8 animate-bounce">
          <a href="#skills">
            <Button size="icon" variant="outline" className="rounded-full h-12 w-12">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}