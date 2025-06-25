import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { technicalSkills } from '@/lib/data';

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Frontend Skills */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
          <div className="space-y-4">
            {technicalSkills.frontend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Libraries & Frameworks:</h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.frontendFrameworks.map((framework, index) => (
                <Badge key={index} variant="outline">
                  {framework}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Backend Skills */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Backend Development</h3>
          <div className="space-y-4">
            {technicalSkills.backend.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Technologies & Tools:</h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.backendTechnologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Database Skills */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Database & DevOps</h3>
          <div className="space-y-4">
            {technicalSkills.database.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">DevOps Tools:</h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.devOps.map((tool, index) => (
                <Badge key={index} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Additional Skills */}
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">Additional Skills</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium mb-2">Testing:</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.testing.map((tool, index) => (
                  <Badge key={index} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Version Control:</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.versionControl.map((tool, index) => (
                  <Badge key={index} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-2">Other Skills:</h4>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.other.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}