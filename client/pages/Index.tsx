import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Index() {
  // Featured projects to display on homepage
  const featuredProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      category: "backend" as const,
      tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    },
    {
      id: "2",
      title: "AI Content Generator",
      description:
        "Machine learning model that generates high-quality content using transformer networks and fine-tuning.",
      category: "ai" as const,
      tags: ["Python", "TensorFlow", "GPT", "LLM"],
    },
    {
      id: "3",
      title: "Real-time Chat API",
      description:
        "High-performance WebSocket server handling millions of concurrent connections with message encryption.",
      category: "backend" as const,
      tags: ["Go", "WebSocket", "gRPC", "Kubernetes"],
    },
    {
      id: "4",
      title: "Vision Recognition System",
      description:
        "Computer vision pipeline for object detection and image classification using deep neural networks.",
      category: "ai" as const,
      tags: ["PyTorch", "OpenCV", "YOLO", "CUDA"],
    },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 md:pt-24">
          <div className="w-full max-w-4xl mx-auto">
            {/* Animated background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-glow" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-glow" />

            <div className="relative z-10 text-center animate-slide-in-up">
              {/* Greeting badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="gradient-text">
                  Full-Stack Developer & AI Enthusiast
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Building cutting-edge applications with backend technologies and
                AI/ML solutions. Passionate about creating scalable systems and
                intelligent software.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                >
                  View All Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-foreground/70 transition-all hover:bg-primary/10"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-border hover:border-secondary hover:text-secondary text-foreground/70 transition-all hover:bg-secondary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="p-3 rounded-lg border border-border hover:border-primary hover:text-primary text-foreground/70 transition-all hover:bg-primary/10"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="px-4 py-20 md:py-24">
          <div className="w-full max-w-6xl mx-auto">
            {/* Section header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                A selection of my best work across backend development and AI/ML
                projects. Each one represents a unique challenge and learning
                opportunity.
              </p>
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            {/* View all projects CTA */}
            <div className="flex justify-center pt-8 border-t border-border">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 py-20 md:py-24 border-t border-border">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 md:py-24">
          <div className="w-full max-w-4xl mx-auto text-center">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-foreground/60 text-sm mb-4 md:mb-0">
                © 2024 Your Name. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-foreground/60">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
