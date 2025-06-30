import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Skills from '@/components/Skills';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { personalInfo, education, workExperience } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          {/* Personal Info */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center p-4">
                    <div className="w-64 h-64 bg-muted rounded-full overflow-hidden flex items-center justify-center text-muted-foreground">
                      <img src="/public/meAndOndo.png" alt="me and ondo"/>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:w-2/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Get to know me better</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="mb-4 text-lg">{personalInfo.bio}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div>
                          <h4 className="font-semibold mb-2">Name</h4>
                          <p className="text-muted-foreground">{personalInfo.name}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Location</h4>
                          <p className="text-muted-foreground">{personalInfo.location}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Email</h4>
                          <p className="text-muted-foreground">{personalInfo.email}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Availability</h4>
                          <p className="text-muted-foreground">{personalInfo.availability}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Experience and Education */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
            <Tabs defaultValue="experience">
              <TabsList className="mb-4">
                <TabsTrigger value="experience">Work Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience">
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                          <CardTitle>{job.position}</CardTitle>
                          <CardDescription className="mt-2 md:mt-0">{job.period}</CardDescription>
                        </div>
                        <CardDescription className="text-base">{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-muted-foreground">{resp}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="education">
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between md:items-center">
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription className="mt-2 md:mt-0">{edu.period}</CardDescription>
                        </div>
                        <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
          
          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <Skills />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}