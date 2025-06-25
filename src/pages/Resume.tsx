import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Download, ArrowLeft, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  // Path to the resume PDF (this assumes you will upload a PDF file named "resume.pdf" to the public/assets/documents folder)
  const resumePath = '/assets/documents/resume.pdf';
  const resumeName = 'resume.pdf'; // The filename for downloading
  const [isLoading, setIsLoading] = React.useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Handle PDF loading
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Function to handle direct PDF download
  const handleDownloadPDF = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      {/* Page Header */}
      <motion.div 
        className="max-w-5xl mx-auto mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume</h1>
            <p className="text-muted-foreground mb-2">
              My professional experience and qualifications
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <Button 
              onClick={handleDownloadPDF} 
              variant="default" 
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <motion.div 
          variants={itemVariants}
          className="mt-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 h-[800px] flex flex-col items-center"
        >
          {isLoading && (
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center gap-4">
                <FileText className="h-12 w-12 animate-pulse text-primary" />
                <p className="text-muted-foreground">Loading resume...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={resumePath}
            className="w-full h-full border-0"
            title="Resume PDF"
            onLoad={handleIframeLoad}
          />
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            Having trouble viewing the PDF? You can&nbsp;
            <a 
              href={resumePath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              open it directly
            </a>
            &nbsp;or download it using the button above.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}