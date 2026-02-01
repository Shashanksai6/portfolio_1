import Navigation from "@/components/Navigation";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Page header */}
        <section className="px-4 pt-32 pb-16">
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-4 gradient-text">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70">
              I'm always interested in new projects and opportunities.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="px-4 pb-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-12 md:p-16">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Mail size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-foreground/70 text-sm">
                        contact@example.com
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="ml-auto group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-secondary hover:bg-secondary/5 transition-all group"
                  >
                    <Linkedin size={24} className="text-secondary" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-foreground/70 text-sm">
                        linkedin.com/in/yourprofile
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="ml-auto group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Github size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-foreground/70 text-sm">
                        github.com/yourprofile
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="ml-auto group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-12">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to build something?
                </h2>
                <p className="text-foreground/70 mb-6">
                  I'm always excited to collaborate on new projects. Feel free
                  to reach out via email or social media.
                </p>
                <a
                  href="mailto:contact@example.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors group"
                >
                  Send Me an Email
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
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
