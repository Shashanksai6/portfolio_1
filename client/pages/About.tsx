import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Page header */}
        <section className="px-4 pt-32 pb-16">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
              About Me
            </h1>
            <p className="text-lg text-foreground/70">
              Learn more about my journey, skills, and passion for building
              great software.
            </p>
          </div>
        </section>

        {/* Placeholder content */}
        <section className="px-4 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-12 md:p-16 text-center">
              <p className="text-foreground/70 text-lg mb-8">
                This page is coming soon! Tell me more about what you'd like to
                see here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
              >
                Get in Touch
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
