import { Hero } from "@/components/hero";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { SkillsSection } from "@/components/skills-section";

function SectionHeading({ label, count }: { label: string; count?: number }) {
  return (
    <div
      className="flex items-baseline gap-3 pb-3 border-b mb-2"
      style={{ borderColor: "var(--line)" }}
    >
      <span
        className="inline-block h-[1px] w-6"
        style={{ background: "var(--accent)" }}
      />
      <h2 className="text-[15px] text-foreground">{label}</h2>
      <span className="flex-1 rule" />
      {typeof count === "number" && (
        <span className="text-[11px] text-subtle">{count.toString().padStart(2, "0")} entries</span>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* WORK */}
      <section id="field-log" className="relative">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
          <SectionHeading label="experience" count={experienceData.length} />
          <div>
            {experienceData.map((e, i) => (
              <ExperienceEntry
                key={i}
                experience={e}
                isCurrent={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <SkillsSection />

      {/* PROJECTS */}
      <section id="projects" className="relative">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
          <SectionHeading label="projects" count={portfolioData.length} />
          <div>
            {portfolioData.map((p) => (
              <PortfolioEntry key={p.title} portfolio={p} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      {publicationData.length > 0 && (
        <section id="papers" className="relative">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
            <SectionHeading label="papers" count={publicationData.length} />
            <div>
              {publicationData.map((p, i) => (
                <PublicationEntry key={i} publication={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EDUCATION */}
      {educationData.length > 0 && (
        <section id="education" className="relative">
          <div className="mx-auto max-w-[1320px] px-5 md:px-8 py-14 md:py-20">
            <SectionHeading label="education" />
            <div>
              {educationData.map((e, i) => (
                <EducationEntry key={i} education={e} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
