import { ArrowUpRight, Github } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <article className="py-7 border-t first:border-t-0 first:pt-3" style={{ borderColor: "var(--line)" }}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-[17px] md:text-[18px] text-foreground font-medium tracking-[-0.005em] leading-snug">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-2 hover:text-accent transition-colors"
            >
              {portfolio.title}
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        {portfolio.codeUrl && (
          <a
            href={portfolio.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-muted hover:text-accent inline-flex items-center gap-1.5 mt-1"
          >
            <Github size={11} /> code <ArrowUpRight size={10} />
          </a>
        )}
      </div>

      <p className="mt-2 text-[14px] leading-[1.65] text-muted max-w-[820px]">
        {portfolio.description}
      </p>

      {portfolio.technologies && portfolio.technologies.length > 0 && (
        <p className="mt-2 font-mono text-[11.5px] text-subtle tracking-[0.01em]">
          {portfolio.technologies.join("  ·  ")}
        </p>
      )}
    </article>
  );
}
