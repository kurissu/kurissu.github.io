import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { 
  personalInfo, 
  workExperience, 
  education, 
  technicalSkills 
} from '@/lib/data';

const ATSResume: React.FC = () => {
  const atsResumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Format skills for ATS readability
  const formatSkillsForATS = () => {
    const frontendSkills = technicalSkills.frontend.map(skill => skill.name)
      .concat(technicalSkills.frontendFrameworks);
    const backendSkills = technicalSkills.backend.map(skill => skill.name)
      .concat(technicalSkills.backendTechnologies);
    const databaseSkills = technicalSkills.database.map(skill => skill.name);
    const otherSkills = technicalSkills.devOps
      .concat(technicalSkills.testing)
      .concat(technicalSkills.versionControl ?? [])
      .concat(technicalSkills.other);
    
    return {
      frontend: frontendSkills,
      backend: backendSkills,
      database: databaseSkills,
      other: otherSkills
    };
  };
  
  const atsSkills = formatSkillsForATS();
  
  // Function to generate and download PDF resume
  const handleDownloadPDF = async () => {
    if (!atsResumeRef.current) return;
    
    setIsGenerating(true);
    
    try {
      // Add a class to hide download button during capture
      atsResumeRef.current.classList.add('pdf-export');
      
      const canvas = await html2canvas(atsResumeRef.current, {
        scale: 1.5, // Moderate scale for good quality with smaller file size
        logging: false,
        useCORS: true
      });
      
      // Remove the class after capture
      atsResumeRef.current.classList.remove('pdf-export');
      
      // Use JPEG with compression for smaller file size
      const imgData = canvas.toDataURL('image/jpeg', 0.8);
      
      // Standard letter size in mm (slightly reduced width for margins)
      const pdfWidth = 215.9;
      const pdfHeight = 279.4;
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight],
        compress: true
      });
      
      // Calculate the ratio to fit the canvas to the PDF
      const scaleFactor = pdfWidth / canvas.width;
      const scaledHeight = canvas.height * scaleFactor;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, scaledHeight, undefined, 'FAST');
      pdf.save('ats-optimized-resume-john-doe.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-1">ATS-Optimized Resume</h1>
            <p className="text-muted-foreground">
              Clean, scannable format designed to pass Applicant Tracking Systems
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleDownloadPDF} 
              disabled={isGenerating}
              variant="default" 
              className="print:hidden"
            >
              {isGenerating ? (
                <span className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </span>
              ) : (
                <span className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </span>
              )}
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="ats" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="ats" className="flex-1">ATS-Optimized</TabsTrigger>
            <TabsTrigger value="tips" className="flex-1">ATS Tips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ats">
            {/* ATS Resume Content - This div will be captured for PDF */}
            <div 
              ref={atsResumeRef} 
              className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-8 print:shadow-none print:p-0"
            >
              {/* Header/Personal Info - ATS optimized with semantic HTML */}
              <header className="border-b pb-4 mb-6">
                <h1 className="text-3xl font-bold mb-1">{personalInfo.name}</h1>
                <h2 className="text-xl mb-4">Full Stack Developer</h2>
                
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm">
                  <div className="flex items-center">
                    <Mail size={14} className="mr-2 text-muted-foreground" />
                    <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                  </div>
                  
                  {personalInfo.phone && (
                    <div className="flex items-center">
                      <Phone size={14} className="mr-2 text-muted-foreground" />
                      <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2 text-muted-foreground" />
                    <span>{personalInfo.location}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Github size={14} className="mr-2 text-muted-foreground" />
                    <span>github.com/johndoe</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Linkedin size={14} className="mr-2 text-muted-foreground" />
                    <span>linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </header>
              
              {/* Professional Summary - Important for ATS keyword matching */}
              <section className="mb-6">
                <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
                <p className="text-muted-foreground">{personalInfo.bio}</p>
              </section>
              
              {/* Work Experience - Standard section name for ATS */}
              <section className="mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" /> 
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex flex-col md:flex-row justify-between mb-1">
                        <h3 className="text-lg font-semibold">{job.position}</h3>
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="text-base font-medium mb-2">{job.company}</div>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-muted-foreground">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Education - Standard section name for ATS */}
              <section className="mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" /> 
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="mb-2">
                      <div className="flex flex-col md:flex-row justify-between mb-1">
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="text-base font-medium mb-1">{edu.institution}</div>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Skills - ATS optimized format with clear categories */}
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5" /> 
                  Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Programming Languages & Frontend</h3>
                    <p className="text-muted-foreground">
                      {atsSkills.frontend.join(", ")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Backend Technologies</h3>
                    <p className="text-muted-foreground">
                      {atsSkills.backend.join(", ")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Databases</h3>
                    <p className="text-muted-foreground">
                      {atsSkills.database.join(", ")}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">DevOps & Tools</h3>
                    <p className="text-muted-foreground">
                      {atsSkills.other.join(", ")}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="tips">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">ATS Resume Tips</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Use standard section headings</strong> - "Professional Experience," "Education," "Skills," etc.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Avoid complex formatting</strong> - Tables, columns, headers/footers, and text boxes may not be read properly</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Use keywords from job descriptions</strong> - Include relevant skills and terminology directly from the job posting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Choose a standard font</strong> - Arial, Calibri, or Times New Roman at 10-12 point size</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Use standard file formats</strong> - Save as .docx or .pdf (check job listing for preference)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Keep design minimal</strong> - ATS systems prioritize content over design elements</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Use bullet points</strong> - They're easily scannable by both ATS and recruiters</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Avoid images and icons</strong> - They often get ignored or cause parsing issues</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                    <span><strong>Spell out acronyms</strong> - Include both full terms and acronyms (e.g., "Application Programming Interface (API)")</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* PDF export styles - hidden from normal view */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: visible;
            color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
          }
        }
        
        .pdf-export .print\\:hidden {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ATSResume;