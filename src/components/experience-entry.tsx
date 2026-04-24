import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
        {experience.date}
      </span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif text-zinc-900 dark:text-zinc-100">
          {experience.title}
        </h3>
        {experience.companyUrl ? (
          <div>
            <a
              href={experience.companyUrl}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          </div>
        ) : (
          <div className="text-sm text-zinc-500 dark:text-zinc-500 italic mt-1">
            {experience.company}
          </div>
        )}
        {experience.technologies && (
          <p className="text-xs text-zinc-500 dark:text-zinc-500 italic mt-1">
            {experience.technologies}
          </p>
        )}
        {experience.advisor && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.bulletPoints && experience.bulletPoints.length > 0 ? (
          <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400 mt-2 space-y-1">
            {experience.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        ) : (
          experience.description && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
              {experience.description}
            </p>
          )
        )}
      </div>
    </div>
  );
}
