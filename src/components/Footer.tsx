import Link from "next/link";
import { LogoMark } from "./Logo";
import { capabilities, nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-volt-600/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-white">
                  Blue Point
                </span>
                <span className="mt-1 text-[9.5px] font-medium uppercase tracking-[0.16em] text-white/50">
                  Technology Solutions
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/55">
              Building the infrastructure that will power the next generation of
              transportation across Nigeria and Africa.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Capabilities
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {capabilities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/services#${c.slug}`}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {c.title.replace(" & Technical Capabilities", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Registered office
            </h3>
            <address className="mt-5 space-y-1 text-[15px] not-italic leading-relaxed text-white/65">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>
                {site.address.city}, {site.address.country}
              </p>
            </address>
            <div className="mt-5 space-y-1.5 text-[15px]">
              <a
                href={`mailto:${site.email}`}
                className="block text-white transition-colors hover:text-charge-400"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phoneIntl}`}
                className="block text-white/65 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-charge-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-charge-400" />
            </span>
            Lagos · Abuja · Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
