import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  
  const filteredProjects = filter === "featured" 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real production systems architected and built from concept to deployment. 
              Each project demonstrates system design thinking, architectural decision-making, 
              and measurable business impact.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-8 animate-fade-in">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects ({projects.length})
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
            >
              Featured ({projects.filter(p => p.featured).length})
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-delay">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                challenge={project.challenge}
                impact={project.impact}
                techStack={project.techStack}
                liveUrl={project.liveUrl}
                featured={project.featured}
                architectureDiagram={project.architectureDiagram}
              />
            ))}
          </div>

          {/* Architecture Note */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="border border-primary/30 rounded-lg p-8 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4">Architecture-First Approach</h2>
              <p className="text-muted-foreground mb-4">
                Each project follows a rigorous architecture-first methodology:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Problem Analysis:</strong> Understanding requirements and constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>System Design:</strong> Evaluating trade-offs and architecture patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Technology Selection:</strong> Choosing the right tools for the job</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Implementation:</strong> Building with scalability and reliability in mind</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">→</span>
                  <span><strong>Validation:</strong> Measuring impact and iterating based on data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;