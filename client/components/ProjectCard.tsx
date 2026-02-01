import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: "backend" | "ai";
  tags: string[];
  image?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  category,
  tags,
  image,
}: ProjectCardProps) {
  const categoryColors = {
    backend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    ai: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  };

  return (
    <Link to={`/projects/${id}`}>
      <div
        className={`group relative h-full rounded-xl border border-border bg-gradient-to-br ${categoryColors[category]} p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden`}
      >
        {/* Background glow effect */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-0 group-hover:opacity-10 bg-primary transition-opacity duration-300" />

        <div className="relative z-10">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                category === "backend"
                  ? "bg-blue-500/20 text-blue-300"
                  : "bg-purple-500/20 text-purple-300"
              }`}
            >
              {category === "backend" ? "Backend" : "AI/ML"}
            </span>
          </div>

          {/* Title and description */}
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/5 text-foreground/60 px-2 py-1 rounded border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View more link */}
          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">View Project</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
