import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";

type ProjectCategory = "all" | "backend" | "ai";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const allProjects = [
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
    {
      id: "5",
      title: "Microservices Architecture",
      description:
        "Scalable microservices platform with service mesh, load balancing, and distributed tracing.",
      category: "backend" as const,
      tags: ["Kubernetes", "Go", "gRPC", "Prometheus"],
    },
    {
      id: "6",
      title: "Predictive Analytics Engine",
      description:
        "Advanced ML pipeline for time-series forecasting and anomaly detection in financial data.",
      category: "ai" as const,
      tags: ["Python", "scikit-learn", "Prophet", "Pandas"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Page header */}
        <section className="px-4 pt-32 pb-16">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
              Projects
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl">
              Explore my portfolio of backend development and AI/ML projects.
              Each represents a unique challenge and innovative solution.
            </p>
          </div>
        </section>

        {/* Filter buttons */}
        <section className="px-4 pb-16">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {[
                { label: "All Projects", value: "all" },
                { label: "Backend", value: "backend" },
                { label: "AI & ML", value: "ai" },
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value as ProjectCategory)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    activeFilter === filter.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/5 text-foreground/70 hover:text-foreground border border-white/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="px-4 pb-24">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-foreground/60 text-lg">
                  No projects found. Try a different filter.
                </p>
              </div>
            )}
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
