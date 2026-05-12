import { ArrowUpRight, FileText, Code2 } from "lucide-react";
import { Publication } from "@/data/publication";

export function PublicationEntry({ publication }: { publication: Publication }) {
  return (
    <article className="data-row">
      {/* Left — venue + year */}
      <div className="text-[12px] leading-snug">
        <div className="text-foreground">{publication.year}</div>
        <div className="text-muted">{publication.type ?? "paper"}</div>
      </div>

      <div>
        <h3 className="text-[17px] md:text-[18px] text-foreground font-medium tracking-[-0.005em] text-balance leading-snug">
          {publication.title}
        </h3>
        <p className="mt-1.5 text-[12.5px] text-muted">
          {publication.authors} · {publication.conference}
          {publication.award && (
            <>
              <span className="text-subtle"> · </span>
              <span className="text-accent">{publication.award}</span>
            </>
          )}
        </p>

        {publication.tldr && (
          <p className="mt-3 text-[13.5px] leading-[1.65] text-muted max-w-[760px]">
            <span className="text-accent">tl;dr</span> {publication.tldr}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {publication.paperUrl && (
            <a href={publication.paperUrl} className="btn" target="_blank" rel="noopener noreferrer">
              <FileText size={11} /> paper <ArrowUpRight size={10} />
            </a>
          )}
          {publication.codeUrl && (
            <a href={publication.codeUrl} className="btn" target="_blank" rel="noopener noreferrer">
              <Code2 size={11} /> code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
