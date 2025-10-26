import { ArrowRight, Cloud, Zap, Code, Award, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden border-4 border-primary/20">
              <img
                src="/profile.png"
                alt="Akhilesh Varute"
                className="w-full h-full object-cover"
              />
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
                architectureDiagram={project.architectureDiagram}
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

      {/* Impact Metrics Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact by the <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable results from architecting production systems at scale
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-delay">
            <div className="text-center p-6 rounded-lg border border-primary/30 bg-background/50 backdrop-blur">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">60%</div>
              <p className="text-sm text-muted-foreground">Reduction in Manual Effort</p>
              <p className="text-xs text-muted-foreground mt-1">(AI Cloud Insights)</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-primary/30 bg-background/50 backdrop-blur">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">99.5%</div>
              <p className="text-sm text-muted-foreground">Uptime Achieved</p>
              <p className="text-xs text-muted-foreground mt-1">(GPU Marketplace)</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-primary/30 bg-background/50 backdrop-blur">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Faster Build Times</p>
              <p className="text-xs text-muted-foreground mt-1">(Dockerfile Optimizer)</p>
            </div>

            <div className="text-center p-6 rounded-lg border border-primary/30 bg-background/50 backdrop-blur">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <p className="text-sm text-muted-foreground">Production Systems</p>
              <p className="text-xs text-muted-foreground mt-1">(Enterprise Clients)</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Different Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border border-primary/30 rounded-lg p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Me <span className="gradient-text">Different</span>
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Architecture-First at 1.5 Years
                    </h3>
                    <p>
                      Most developers at my experience level focus on feature coding. I've architected
                      full production platforms used by enterprise clients - from system design to deployment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Gen AI + Cloud Expertise
                    </h3>
                    <p>
                      The intersection of AI and cloud is the future. I have hands-on production experience
                      with AWS Bedrock, LangChain, and building GenAI-powered cloud operations platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Solutions Architect Mindset
                    </h3>
                    <p>
                      I don't just write code - I design systems. Every project starts with understanding
                      requirements, evaluating trade-offs, and choosing the right architecture patterns before
                      touching a keyboard.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Real Production Impact
                    </h3>
                    <p>
                      My projects aren't just portfolio pieces - they're live systems processing real workloads
                      for actual enterprise clients. I understand what it takes to build for scale, reliability,
                      and business value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "At 1.5 years, I bring the system thinking of a Solutions Architect with the hands-on
                  execution skills of a Cloud Engineer - architecting platforms that combine AI intelligence
                  with enterprise-grade reliability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Scalable</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Looking for Cloud Solutions Engineer or Solutions Architect opportunities
              where I can design systems that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
