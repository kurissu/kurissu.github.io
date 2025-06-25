import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a 
                          href={`mailto:${personalInfo.email}`} 
                          className="text-muted-foreground hover:underline"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">{personalInfo.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Linkedin className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">LinkedIn</h3>
                        <a 
                          href={personalInfo.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:underline"
                        >
                          Connect on LinkedIn
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Github className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium">GitHub</h3>
                        <a 
                          href={personalInfo.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:underline"
                        >
                          View GitHub Profile
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Availability */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Availability</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p>{personalInfo.availability}</p>
                    <p className="mt-4 text-muted-foreground">
                      I'm currently open to full-stack developer positions and freelance opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}