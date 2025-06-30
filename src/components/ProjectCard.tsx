import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={`h-full flex flex-col overflow-hidden transform transition-all hover:shadow-lg hover:-translate-y-1 ${
      project.featured ? 'border-primary/40 shadow-md' : ''
    }`}>
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
          {/* Replace with actual project image */}
          {/* Project Image Placeholder */}
        </div>
        
      </div>
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-2 right-2">
            <Badge variant="default" className="bg-primary text-primary-foreground flex items-center gap-1">
              <Star className="h-3 w-3 fill-primary-foreground" />
              Featured
            </Badge>
          </div>
        )}
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          {project.categories.slice(0, 2).map((category, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
          {project.categories.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{project.categories.length - 2}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mt-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <div className="flex justify-between w-full">
          {project.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" /> {project.title}
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button variant={project.demoUrl ? "outline" : "default"} size="sm" asChild className={project.demoUrl ? "" : "w-full"}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}