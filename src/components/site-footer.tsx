import { aboutMe } from "@/data/aboutme";
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from "lucide-react";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t mt-8"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-12 md:py-16">
        <div className="flex items-baseline gap-3 pb-3 border-b mb-6" style={{ borderColor: "var(--line)" }}>
          <span className="text-accent text-[12px]">§ 06</span>
          <h2 className="text-[15px] text-foreground">contact</h2>
          <span className="flex-1 rule" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="text-[15px] text-muted leading-relaxed max-w-[640px]">
              Most useful where an AI/ML problem hits a real system —
              agent design, orchestration, evaluation, or taking a research
              prototype to production. Reach out anytime.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a href={`mailto:${aboutMe.email}`} className="btn btn-primary">
                <Mail size={12} /> {aboutMe.email}
              </a>
              {aboutMe.cvUrl && (
                <a href={aboutMe.cvUrl} className="btn" target="_blank" rel="noopener noreferrer">
                  <FileText size={12} /> resume.pdf <ArrowUpRight size={10} />
                </a>
              )}
              {aboutMe.githubUsername && (
                <a
                  href={`https://github.com/${aboutMe.githubUsername}`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={12} /> {aboutMe.githubUsername}
                </a>
              )}
              {aboutMe.linkedinUsername && (
                <a
                  href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={12} /> {aboutMe.linkedinUsername}
                </a>
              )}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 text-[12px] text-muted leading-relaxed">
            <div className="grid grid-cols-[80px_1fr] gap-y-1.5">
              <div className="text-subtle">based</div>
              <div className="text-foreground">ottawa, canada</div>
              <div className="text-subtle">tz</div>
              <div>eastern (utc−05)</div>
              <div className="text-subtle">auth</div>
              <div>canada · us (tn eligible)</div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] text-subtle" style={{ borderColor: "var(--line)" }}>
          <span>© {new Date().getFullYear()} {aboutMe.name.toLowerCase()}</span>
          <span>built with next.js · tailwind · ibm plex mono</span>
        </div>
      </div>
    </footer>
  );
}
