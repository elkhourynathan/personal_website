import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { aboutMe } from "@/data/aboutme";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left — identity */}
          <div className="col-span-12 md:col-span-7" data-reveal="1">
            <h1 className="text-[clamp(36px,5vw,68px)] leading-[1.05] tracking-[-0.02em] text-foreground">
              {aboutMe.name}
            </h1>

            <p className="mt-5 text-[15px] md:text-[16px] text-muted leading-relaxed max-w-[640px]">
              AI engineer building production multi-agent systems, durable
              workflow orchestration, and LLM pipelines.{" "}
              <span className="text-foreground">Currently at J-Squared Technologies</span>{" "}
              (FALC AI team). Graduating Carleton University,{" "}
              <span className="text-foreground">Honours BCS · AI & ML</span>,{" "}
              <span className="text-foreground">3.97 GPA</span>, April 2026.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {aboutMe.cvUrl && (
                <a href={aboutMe.cvUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  resume.pdf <ArrowUpRight size={12} />
                </a>
              )}
              <a href={`mailto:${aboutMe.email}`} className="btn">
                <Mail size={12} /> email
              </a>
              {aboutMe.githubUsername && (
                <a
                  href={`https://github.com/${aboutMe.githubUsername}`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={12} /> github
                </a>
              )}
              {aboutMe.linkedinUsername && (
                <a
                  href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={12} /> linkedin
                </a>
              )}
            </div>
          </div>

          {/* Right — terminal */}
          <div className="col-span-12 md:col-span-5" data-reveal="2">
            <div
              className="spotlight-panel"
              style={{ padding: "14px 16px" }}
            >
              <div
                className="flex items-center justify-between pb-3 mb-3 border-b"
                style={{ borderColor: "var(--line)" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-2.5" style={{ background: "#a83c2b" }} />
                  <span className="inline-block w-2.5 h-2.5" style={{ background: "#c08a25" }} />
                  <span className="inline-block w-2.5 h-2.5" style={{ background: "#5b8b3a" }} />
                </div>
                <span className="text-[10.5px] text-subtle">nathan@portfolio: ~</span>
              </div>

              <pre className="text-[12px] leading-[1.75] whitespace-pre-wrap text-muted m-0 font-mono">
<span className="text-subtle">$ </span><span className="text-accent">cat now.txt</span>{`
`}<span className="text-foreground">shipping</span>{` agentic platforms
and production ML for defense

`}<span className="text-subtle">$ </span><span className="text-accent">interests</span>{`
ML · Agentic AI · Predictive Modeling
Computer Vision · Finance · Reading

`}<span className="text-subtle">$ </span><span className="text-accent">contact</span>{`
${aboutMe.email}
ottawa · ca/us (tn) authorized

`}<span className="text-subtle">$ </span><span className="caret" />
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="rule" />
      </div>
    </section>
  );
}
