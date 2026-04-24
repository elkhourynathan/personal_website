"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="fixed top-6 right-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-[#fffcf8] text-zinc-600 shadow-sm transition-colors duration-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-[#17140f] dark:text-zinc-300 dark:hover:text-zinc-50"
    >
      <Sun
        size={15}
        className={`absolute transition-all duration-500 ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-75 opacity-0"
        }`}
      />
      <Moon
        size={15}
        className={`absolute transition-all duration-500 ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-75 opacity-0"
        }`}
      />
    </button>
  );
}
