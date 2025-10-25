import { ArrowRight, Cloud, Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            {/* Avatar Placeholder */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-500 mx-auto mb-8 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary-foreground">AV</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Cloud & AI Solutions
              <br />
              <span className="gradient-text">Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Designing Scalable Gen AI Systems on AWS
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              I architect cloud-native platforms that combine AI intelligence with enterprise-grade reliability. 
              From concept to production, I build systems that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <a href="#featured-work">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Cloud className="h-5 w-5 text-primary" />
              <span>AWS Certified Developer → Solutions Architect</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">1.5 Years Building Production Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-20 px-4 sm:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Architecture</h3>
              <p className="text-muted-foreground">
                Designing scalable, high-availability systems on AWS with multi-AZ deployments and auto-scaling.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-delay">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gen AI Integration</h3>
              <p className="text-muted-foreground">
                Building intelligent cloud systems with AWS Bedrock, OpenAI, and LangChain for automated operations.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-delay">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Infrastructure as Code</h3>
              <p className="text-muted-foreground">
                Kubernetes, Docker, Terraform - automating cloud infrastructure for reliability and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="featured-work" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Production systems architected from concept to deployment, serving enterprise clients at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                challenge={project.challenge}
                impact={project.impact}
                techStack={project.techStack}
                liveUrl={project.liveUrl}
                featured={project.featured}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something <span className="gradient-text">Scalable</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm looking for Cloud Solutions Engineer or Solutions Architect roles where I can design 
              systems at the intersection of AI and cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Let's Connect</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
