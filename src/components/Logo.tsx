import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bp-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#57a5ff" />
          <stop offset="55%" stopColor="#1665e0" />
          <stop offset="100%" stopColor="#0f4fb4" />
        </linearGradient>
      </defs>
      {/* Pin silhouette — the "point" */}
      <path
        d="M20 2c7.732 0 14 6.05 14 13.51 0 8.9-9.02 18.2-12.63 21.62a2.02 2.02 0 0 1-2.74 0C15.02 33.71 6 24.41 6 15.51 6 8.05 12.268 2 20 2Z"
        fill="url(#bp-mark)"
      />
      {/* Charge bolt */}
      <path
        d="M21.9 8.4 13.6 18.2a.7.7 0 0 0 .54 1.15h4.3l-1.7 8.02a.7.7 0 0 0 1.22.6l8.44-9.86a.7.7 0 0 0-.53-1.16h-4.3l1.62-7.9a.7.7 0 0 0-1.29-.65Z"
        fill="#3fdd8a"
      />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const top = tone === "dark" ? "text-white" : "text-ink-900";
  const bottom = tone === "dark" ? "text-white/55" : "text-ink-900/55";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Blue Point Technology Solutions — home"
    >
      <LogoMark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-semibold tracking-tight ${top}`}
        >
          Blue Point
        </span>
        <span
          className={`mt-1 text-[9.5px] font-medium uppercase tracking-[0.16em] ${bottom}`}
        >
          Technology Solutions
        </span>
      </span>
    </Link>
  );
}
