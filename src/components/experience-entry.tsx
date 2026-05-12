import { Experience } from "@/data/experience";

// Highlight numbers / percentages / metric phrases with an underline accent.
function MetricText({ text }: { text: string }) {
  const re =
    /(\$?\d[\d,]*\.?\d*\s?[%kKMBx+]?\+?|\b\d+\s?(?:hours?|minutes?|seconds?|days?|weeks?|servers?|APIs?)\b|days?\s?→\s?[a-z]+|<\s?\d+\s?(?:s|ms|min))/gi;
  const out: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(<span key={`t${i}`}>{text.slice(last, m.index)}</span>);
    out.push(
      <span
        key={`m${i}`}
        className="text-foreground"
        style={{
          borderBottom: "1px solid var(--accent)",
          paddingBottom: "1px",
        }}
      >
        {m[0]}
      </span>
    );
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) out.push(<span key={`tail`}>{text.slice(last)}</span>);
  return <>{out}</>;
}

export function ExperienceEntry({
  experience,
  isCurrent,
}: {
  experience: Experience;
  isCurrent?: boolean;
}) {
  const techs = experience.technologies
    ? experience.technologies.split(",").map((t) => t.trim())
    : [];
  const [start, end] = experience.date.split(/[-–]/).map((s) => s.trim());

  return (
    <article className="data-row">
      {/* Left — dates */}
      <div className="text-[12px] leading-snug">
        <div className="text-foreground">{start}</div>
        {end && (
          <div className={isCurrent ? "text-accent" : "text-muted"}>
            {end}
          </div>
        )}
      </div>

      {/* Right — content */}
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[17px] md:text-[18px] text-foreground font-medium tracking-[-0.005em]">
            {experience.title}
          </h3>
          <span className="text-subtle">·</span>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="link text-[14px] text-muted hover:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            <span className="text-[14px] text-muted">{experience.company}</span>
          )}
        </div>

        {techs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {techs.map((t, i) => (
              <span key={i} className="chip">{t}</span>
            ))}
          </div>
        )}

        {experience.bulletPoints && experience.bulletPoints.length > 0 && (
          <ul className="mt-4 space-y-2.5">
            {experience.bulletPoints.map((p, i) => (
              <li
                key={i}
                className="relative pl-5 text-[13.5px] leading-[1.65] text-muted"
              >
                <span
                  className="absolute left-0 top-[10px] h-[1px] w-3"
                  style={{ background: "var(--accent)" }}
                />
                <MetricText text={p} />
              </li>
            ))}
          </ul>
        )}

        {experience.description && !experience.bulletPoints?.length && (
          <p className="mt-4 text-[13.5px] leading-[1.65] text-muted">
            {experience.description}
          </p>
        )}
      </div>
    </article>
  );
}
