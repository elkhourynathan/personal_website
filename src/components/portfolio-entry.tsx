import { ArrowUpRight, Github } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <article className="data-row group">
      {/* Left — links */}
      <div className="flex md:flex-col gap-3 md:gap-1 text-[12px]">
        {portfolio.projectUrl && (
          <a
            href={portfolio.projectUrl}
            className="text-muted hover:text-accent inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            live <ArrowUpRight size={10} />
          </a>
        )}
        {portfolio.codeUrl && (
          <a
            href={portfolio.codeUrl}
            className="text-muted hover:text-accent inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={10} /> code
          </a>
        )}
      </div>

      {/* Right — content */}
      <div>
        <h3 className="text-[17px] md:text-[18px] text-foreground font-medium tracking-[-0.005em]">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              className="inline-flex items-baseline gap-2 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {portfolio.title}
              <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        <p className="mt-2 text-[13.5px] leading-[1.65] text-muted max-w-[760px]">
          {portfolio.description}
        </p>

        {portfolio.technologies && portfolio.technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {portfolio.technologies.map((t, i) => (
              <span key={i} className="chip">{t}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
