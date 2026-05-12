"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const SECTIONS = [
  { id: "log",       label: "experience", ref: "#field-log" },
  { id: "skills",    label: "skills",     ref: "#skills" },
  { id: "projects",  label: "projects",   ref: "#projects" },
  { id: "papers",    label: "papers",     ref: "#papers" },
  { id: "education", label: "education",  ref: "#education" },
  { id: "contact",   label: "contact",    ref: "#contact" },
];

export function SiteNav() {
  const [light, setLight] = useState(false);
  const [time, setTime]   = useState("");

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    const update = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", hour12: false,
        timeZone: "America/Toronto",
      });
      setTime(t);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--background) 92%, transparent)",
        borderBottom: "1px solid var(--line)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="flex h-11 items-center gap-6">
          {/* Filename-style identifier */}
          <a href="#top" className="flex items-center gap-2 text-[11.5px]" aria-label="Home">
            <span className="text-accent">▌</span>
            <span className="text-foreground">~/nathan-el-khoury</span>
            <span className="text-subtle">/portfolio.md</span>
          </a>

          {/* Center: section list — like editor tabs */}
          <ul className="hidden md:flex items-center text-[11.5px]">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="flex items-center">
                <a
                  href={s.ref}
                  className="px-3 py-1 text-muted hover:text-foreground transition-colors"
                >
                  <span className="text-subtle">§{(i + 1).toString().padStart(2, "0")}</span>
                  <span className="ml-2">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="ml-auto flex items-center gap-4 text-[11px] text-muted">
            <span className="hidden lg:inline">ott {time}</span>
            <button
              onClick={toggle}
              aria-label={light ? "Switch to dark" : "Switch to light"}
              className="grid h-7 w-7 place-items-center border transition-colors hover:border-foreground"
              style={{ borderColor: "var(--line)" }}
            >
              {light ? <Moon size={12} /> : <Sun size={12} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
