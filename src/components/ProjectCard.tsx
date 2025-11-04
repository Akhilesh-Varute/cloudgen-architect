import { ExternalLink, ArrowRight, ChevronDown, ChevronUp, Maximize2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import MermaidDiagram from "./MermaidDiagram";

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  impact: string[];
  techStack: string[];
  liveUrl?: string;
  featured?: boolean;
  architectureDiagram?: string;
}

const ProjectCard = ({
  title,
  description,
  challenge,
  impact,
  techStack,
  liveUrl,
  featured = false,
  architectureDiagram
}: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Card className={`group hover:border-primary/50 transition-all duration-300 ${featured ? 'border-primary/30' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {featured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
              Featured
            </Badge>
          )}
        </div>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">The Challenge</h4>
          <p className="text-sm text-muted-foreground">
            {challenge}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary mb-2">The Impact</h4>
          <ul className="space-y-1">
            {impact.map((item, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        {architectureDiagram && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Architecture</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDialogOpen(true)}
                className="text-xs"
              >
                <Maximize2 className="h-3 w-3 mr-1" />
                Full Screen
              </Button>
            </div>
            <MermaidDiagram 
              chart={architectureDiagram} 
              id={`diagram-${title}`}
              onClick={() => setDialogOpen(true)}
            />
            
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-auto bg-background/95 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle>{title} - Architecture</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <MermaidDiagram 
                    chart={architectureDiagram} 
                    id={`dialog-diagram-${title}`}
                    className="min-h-[400px]"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>

      {liveUrl && (
        <CardFooter>
          <Button variant="outline" asChild className="w-full group/btn">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              View Live Project
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
