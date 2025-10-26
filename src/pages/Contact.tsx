import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Get this from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Contact from ${formData.name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "Please try emailing me directly at akhileshvarute23@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "akhileshvarute23@gmail.com",
      action: "mailto:akhileshvarute23@gmail.com",
      actionLabel: "Send Email"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "https://www.linkedin.com/in/akhileshvarute",
      actionLabel: "View Profile"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my code",
      action: "https://github.com/Akhilesh-Varute",
      actionLabel: "View Repositories"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute chat",
      action: "https://cal.com/akhilesh-varute/30min",
      actionLabel: "Book Time"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {/* Header */}
          <div className="max-w-3xl mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Looking for a Cloud Solutions Engineer or Solutions Architect?
              Let's discuss how I can help architect scalable, reliable cloud systems for your team.
            </p>
            <div className="flex items-center gap-2 mt-6 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Pune, India • Open to Remote Opportunities</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6 animate-fade-in-delay">
              <div>
                <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
                <div className="space-y-4">
                  {contactMethods.map((method, idx) => (
                    <Card key={idx} className="hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <method.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-1">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href={method.action}
                                target={method.action.startsWith('http') ? '_blank' : undefined}
                                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {method.actionLabel}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-foreground">Current Role:</strong>
                      <p className="text-muted-foreground">Cloud Solutions Engineer at GPUonCloud</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Experience:</strong>
                      <p className="text-muted-foreground">1.5 years architecting production systems</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Certifications:</strong>
                      <p className="text-muted-foreground">AWS Certified Developer (DVA-C03)</p>
                      <p className="text-muted-foreground">Pursuing Solutions Architect (SAA-C03)</p>
                    </div>
                    <div>
                      <strong className="text-foreground">Specialization:</strong>
                      <p className="text-muted-foreground">Gen AI + Cloud Architecture</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;