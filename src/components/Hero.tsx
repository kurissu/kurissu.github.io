import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Hi, I'm {personalInfo.name}</span>
              <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Hero Image/Illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full max-w-md aspect-square rounded-lg  flex items-center justify-center text-lg text-muted-foreground">
            {/* Image placeholder - would be replaced with actual profile image */}
            <img src="/public/me.png" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
