import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  const courses = education.relevantCourses
    ? education.relevantCourses.split(",").map((c) => c.trim())
    : [];

  return (
    <article className="data-row">
      <div className="text-[12px] leading-snug text-foreground">{education.year}</div>

      <div>
        <h3 className="text-[17px] md:text-[18px] text-foreground font-medium tracking-[-0.005em]">
          {education.institution}
        </h3>
        <p className="mt-1.5 text-[13.5px] text-muted">
          {education.degree}
          {education.stream && <> · {education.stream}</>}
          {education.gpa && (
            <>
              {" · gpa "}
              <span className="text-foreground">{education.gpa}</span>
            </>
          )}
        </p>

        {education.thesis && (
          <p className="mt-2 text-[13px] text-muted">
            thesis:{" "}
            {education.thesisUrl ? (
              <a href={education.thesisUrl} className="link" target="_blank" rel="noopener noreferrer">
                {education.thesis}
              </a>
            ) : (
              education.thesis
            )}
          </p>
        )}
        {education.advisor && (
          <p className="mt-1 text-[13px] text-muted">advisor: {education.advisor}</p>
        )}

        {courses.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {courses.map((c, i) => (
              <span key={i} className="chip">{c}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
