import { Cloud, Cpu, Code, Lightbulb } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const drives = [
    {
      icon: Lightbulb,
      title: "System Design",
      description: "I love the 'before coding' phase - sketching architectures, evaluating trade-offs, thinking about scale."
    },
    {
      icon: Cloud,
      title: "Gen AI + Cloud",
      description: "The most exciting tech intersection right now. Building intelligent cloud systems that learn and adapt."
    },
    {
      icon: Cpu,
      title: "Elegant Architecture",
      description: "Solving complex problems through clean, scalable design. Every system tells a story."
    },
    {
      icon: Code,
      title: "Understanding Systems",
      description: "Not just how to build, but why it works. Deep understanding of distributed systems and cloud patterns."
    }
  ];

  const skills = {
    "Cloud Architecture": [
      "AWS Solutions Architecture",
      "Multi-AZ Deployments",
      "Auto-scaling & High Availability",
      "Serverless Architecture",
      "Microservices Design"
    ],
    "Gen AI Integration": [
      "AWS Bedrock",
      "OpenAI APIs",
      "Ollama",
      "LangChain",
      "AI-powered CloudOps"
    ],
    "AWS Services": [
      "EC2 & Lambda",
      "S3 & CloudFront",
      "CloudWatch & CloudTrail",
      "IAM & Security Hub",
      "VPC & Networking"
    ],
    "Infrastructure & DevOps": [
      "Kubernetes & Docker",
      "Terraform",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Automation"
    ],
    "Development": [
      "Python",
      "JavaScript/Node.js",
      "React",
      "FastAPI",
      "REST APIs"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Intersection of <span className="gradient-text">Design and Code</span>
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I don't just write code - I design systems. Before touching a keyboard, I'm sketching architectures, 
                evaluating trade-offs, and thinking about scale. This approach has led me to architect platforms like 
                AI Cloud Insights (used by enterprise clients) and GPU marketplace infrastructure at just 1.5 years into my career.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working as a <strong className="text-foreground">Cloud Solutions Engineer at GPUonCloud</strong>, 
                where I design and build scalable cloud infrastructure. I'm <strong className="text-foreground">AWS Certified Developer</strong> and 
                actively pursuing my <strong className="text-foreground">Solutions Architect certification</strong>.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <section className="mb-16 animate-fade-in-delay">
            <h2 className="text-3xl font-bold mb-8">What Drives Me</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {drives.map((item, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills & Expertise */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-primary/30">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AWS Certified</h3>
                      <p className="text-sm text-muted-foreground">Developer Associate</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/20 text-primary">DVA-C03</Badge>
                </CardContent>
              </Card>
              
              <Card className="border-muted">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                      <Cloud className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Currently Pursuing</h3>
                      <p className="text-sm text-muted-foreground">Solutions Architect Associate</p>
                    </div>
                  </div>
                  <Badge variant="outline">SAA-C03</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Looking For */}
          <section>
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">What I'm Looking For</h2>
                <p className="text-muted-foreground mb-4">
                  I'm seeking <strong className="text-foreground">Cloud Solutions Engineer</strong> or{" "}
                  <strong className="text-foreground">Solutions Architect</strong> roles where I can design 
                  scalable systems at the intersection of AI and cloud computing.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Location:</strong> Pune, India (Open to Remote)
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;