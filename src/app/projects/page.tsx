import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, Check, SectionHeading } from "@/components/ui";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "EV charging infrastructure designed and deployed by Blue Point at Landmark Centre, Supersaver Osapa and the NNPC Retail Station Ikota, Lagos.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected projects"
        title="Charging infrastructure delivered at strategic commercial locations."
        lede="Our projects demonstrate the ability to manage every phase of EV infrastructure development — from engineering design and electrical planning to installation, commissioning and operational deployment."
        image="/images/landmark-fleet.jpg"
        imageAlt="Electric vehicles parked under a charging canopy at Landmark Centre, Victoria Island"
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-28 grid gap-12 lg:grid-cols-12 lg:gap-16"
            >
              <div
                className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Reveal>
                  <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-ink-900">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal delay={80}>
                  <div className="flex items-center gap-3">
                    <span className="current-line h-px w-8 rounded-full" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-volt-700">
                      Project 0{i + 1}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold leading-tight text-ink-900">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-[15px] font-medium text-ink-900/50">
                    {project.location}
                  </p>
                  <p className="mt-7 text-[17px] leading-relaxed text-ink-900/70">
                    {project.summary}
                  </p>

                  <h3 className="mt-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-900/40">
                    Scope of work
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {project.scope.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3.5 text-[15px] leading-snug text-ink-900/75"
                      >
                        <Check className="mt-0.5 text-charge-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Capability statement */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute left-1/3 top-0 h-80 w-96 rounded-full bg-volt-600/20 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              align="center"
              tone="dark"
              eyebrow="What these projects prove"
              title="Complex EV infrastructure, executed to standard."
              lede="These projects reflect Blue Point's capability to execute complex charging infrastructure while maintaining the highest standards of engineering excellence, safety, quality and operational reliability."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                {
                  title: "Civil works",
                  body: "Foundations, canopies, bays and site works engineered for the equipment they carry.",
                },
                {
                  title: "Electrical engineering",
                  body: "Supply integration, distribution, protection and supporting power infrastructure.",
                },
                {
                  title: "Charging technology",
                  body: "DC fast charging equipment specified, installed, tested and commissioned.",
                },
                {
                  title: "Intelligent software",
                  body: "Charger management, monitoring, payments and analytics from day one.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-ink-950 p-8 md:p-9">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-14 flex justify-center">
              <Button href="/contact">Discuss your site</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
