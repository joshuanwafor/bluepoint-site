import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, Check, Eyebrow, SectionHeading } from "@/components/ui";
import { capabilities, deliveryPhases, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Turnkey EV charging infrastructure: engineering design, civil and electrical works, charging technology, software platforms, and long-term operations and maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Turnkey electric mobility infrastructure, end to end."
        lede="Blue Point specialises in the design, development, construction, deployment, operation and maintenance of electric vehicle infrastructure — delivered as one integrated programme."
        image="/images/station-canopy-genset.jpg"
        imageAlt="EV charging canopy with DC fast chargers and supporting power infrastructure"
      />

      {/* Core business */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="max-w-4xl text-[clamp(1.25rem,2.4vw,1.6rem)] font-medium leading-[1.45] text-ink-900">
              From charging infrastructure and supporting electrical systems to
              intelligent software platforms and long-term maintenance services,
              Blue Point provides complete turnkey solutions tailored to the
              needs of public and private sector clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pb-8">
        <div className="container-x space-y-6">
          {capabilities.map((c, i) => (
            <Reveal key={c.slug} delay={40}>
              <article
                id={c.slug}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-ink-900/8 bg-white transition-colors duration-300 hover:border-volt-500/25"
              >
                <div className="grid gap-10 p-8 md:grid-cols-12 md:gap-14 md:p-12">
                  <div className="md:col-span-5">
                    <span className="font-display text-[13px] font-semibold text-volt-600">
                      0{i + 1}
                    </span>
                    <h2 className="mt-4 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight text-ink-900">
                      {c.title}
                    </h2>
                    <p className="mt-5 text-[16px] leading-relaxed text-ink-900/65">
                      {c.summary}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {c.points.map((p) => (
                        <li
                          key={p}
                          className="flex gap-3 text-[15px] leading-snug text-ink-900/75"
                        >
                          <Check className="mt-0.5 text-charge-500" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Delivery approach */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-volt-600/18 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Project delivery"
              title="Collaborative, structured and governed at every stage."
              lede="Every engagement begins with understanding your objectives, operational requirements and project environment — then moves through design, build, commissioning and long-term operational support."
            />
          </Reveal>

          <ol className="mt-16 space-y-px overflow-hidden rounded-3xl border border-white/10 bg-white/10">
            {deliveryPhases.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 60} as="li">
                <div className="group grid gap-5 bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900 md:grid-cols-12 md:items-baseline md:gap-10 md:p-10">
                  <div className="flex items-baseline gap-5 md:col-span-4">
                    <span className="font-display text-[13px] font-semibold text-volt-400">
                      {phase.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/60 md:col-span-8">
                    {phase.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Industry focus */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Industry focus"
                title="Sectors where electric mobility has become a strategic priority."
                lede="By understanding the operational requirements of each sector, Blue Point designs solutions that are commercially viable, technically robust and capable of supporting long-term growth."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className="group flex items-center gap-3 rounded-xl border border-ink-900/8 px-5 py-4 text-[15px] font-medium text-ink-900/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-volt-500/40 hover:bg-volt-50/50"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-volt-500 transition-colors group-hover:bg-charge-500" />
                    {industry}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-900/8 py-20">
        <div className="container-x flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <div>
              <Eyebrow>Next step</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight text-ink-900">
                Every site is different. Let&apos;s assess yours.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/contact" className="shrink-0">
              Request a feasibility assessment
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
