import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Arrow, Button, Check, Eyebrow, SectionHeading } from "@/components/ui";
import {
  capabilities,
  deliveryPhases,
  differentiators,
  industries,
  projects,
  stats,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Capabilities />
      <Projects />
      <Platform />
      <Approach />
      <WhyUs />
      <Industries />
      <CTA />
    </>
  );
}

/* -------------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink-950 pt-[72px]">
      <Image
        src="/images/landscape.jpeg"
        alt="Blue Point EV charging canopy with DC fast chargers and supporting power infrastructure"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/30 to-transparent" />
      {/* Scrim so the transparent header stays legible over bright sky */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/80 to-transparent" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />

      <div className="container-x relative w-full pb-16 pt-28 md:pb-24">
        <Reveal>
          <Eyebrow tone="dark">Electric mobility infrastructure</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,6.2vw,4.75rem)] font-semibold leading-[1.02] text-white">
            We build the charging
            <br className="hidden sm:block" /> infrastructure Africa{" "}
            <span className="bg-gradient-to-r from-volt-400 to-charge-400 bg-clip-text text-transparent">
              runs on next.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
            Blue Point designs, builds, commissions and operates electric
            vehicle charging infrastructure — combining engineering excellence
            with the software that keeps it online.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/contact">Start a project</Button>
            <Button href="/projects" variant="ghost">
              See our work
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/12 pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold leading-none text-white">
                  {s.value}
                </dt>
                <dd className="mt-3 text-[13px] font-medium leading-snug text-white/70">
                  {s.label}
                  <span className="mt-1 block text-[12px] font-normal text-white/40">
                    {s.sub}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Positioning */

function Positioning() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeading
              eyebrow="Who we are"
              title="An engineering company with a software habit."
              lede="Blue Point was founded through the collaboration of two companies with complementary expertise in engineering, product development and strategic consulting — with a single vision: to accelerate the adoption of electric mobility across Nigeria and Africa."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-900/70">
              <p>
                We deliver integrated turnkey solutions — engineering
                excellence, innovative technology and disciplined project
                execution — tailored to governments, businesses, commercial
                developments and fleet operators making the move to clean
                transportation.
              </p>
              <p>
                Since inception we have designed, deployed and commissioned
                electric vehicle charging stations for multiple clients across
                Lagos and Abuja: reliable, scalable and future-ready
                infrastructure that meets international standards.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                More about Blue Point
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={120}>
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-ink-900 sm:aspect-3/2 lg:aspect-4/5">
              <Image
                src="/images/solar-carport.jpg"
                alt="Solar carport canopy shading electric vehicles at a Blue Point charging site in Lagos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="font-display text-xl font-semibold text-white">
                  Solar-integrated charging canopy
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Generation, distribution and charging designed as one system.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <MissionCard
                title="Mission"
                body="To contribute meaningfully to Africa's transition to clean energy by accelerating EV adoption through reliable, accessible and sustainable infrastructure."
              />
              <MissionCard
                title="Vision"
                body="To become the leading electric mobility infrastructure company in Africa, working with governments, investors and industry to build a cleaner, smarter transport ecosystem."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MissionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink-900/8 bg-ink-900/[0.02] p-6 transition-colors duration-300 hover:border-volt-500/30 hover:bg-volt-50/50">
      <h3 className="font-display text-base font-semibold text-ink-900">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-900/65">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------- Capabilities */

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-volt-600/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="What we do"
            title="Four disciplines, one accountable partner."
            lede="Rather than providing isolated services, we deliver complete turnkey solutions — so you engage one partner across the entire lifecycle of an infrastructure project."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                href={`/services#${c.slug}`}
                className="group flex h-full flex-col bg-ink-950 p-8 transition-colors duration-300 hover:bg-ink-900 md:p-10"
              >
                <span className="font-display text-[13px] font-semibold text-volt-400">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  {c.summary}
                </p>
                <ul className="mt-7 space-y-2.5">
                  {c.points.slice(0, 3).map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[14px] leading-snug text-white/70"
                    >
                      <Check className="mt-px text-charge-400" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[13px] font-semibold text-volt-300 transition-colors group-hover:text-charge-400">
                  Explore capability
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Projects */

function Projects() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Selected projects"
              title="Deployed, commissioned and running."
              lede="Blue Point has designed and deployed EV charging infrastructure at strategic commercial locations across Lagos State — managing every phase from engineering design to operational deployment."
            />
            <Button href="/projects" variant="outline" className="shrink-0">
              All projects
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link
                href={`/projects#${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/8 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-volt-500/30 hover:shadow-[0_24px_60px_-30px_rgba(6,21,39,0.4)]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink-900">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-volt-700">
                    {p.city}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[14px] text-ink-900/50">
                    {p.location}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-ink-900/65">
                    {p.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-semibold text-volt-700">
                    Project detail
                    <Arrow />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Platform */

const platformFeatures = [
  "Real-time charger management and session control",
  "Remote monitoring, diagnostics and equipment health",
  "Payment processing and customer usage tracking",
  "Utilisation analytics and performance reporting",
  "Energy management and fleet integration",
  "Preventive maintenance scheduling and alerting",
];

function Platform() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-white md:py-32">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-charge-500/12 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-ink-950 sm:aspect-4/3 lg:aspect-3/4">
              <Image
                src="/images/charging-session.jpg"
                alt="Blue Point technician managing a DC fast charging session for an electric vehicle"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <SectionHeading
              tone="dark"
              eyebrow="Technology platform"
              title="Hardware in the ground. Intelligence on top."
              lede="Our software platforms were developed and deployed alongside our own charging infrastructure — giving operators real-time visibility into network performance, equipment health and customer usage."
            />
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {platformFeatures.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 text-[15px] leading-snug text-white/75"
                >
                  <Check className="mt-0.5 text-charge-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-10 border-l-2 border-volt-500 pl-6 text-[16px] leading-relaxed text-white/65">
              Because we built both the stations and the software, every design
              decision is informed by what actually keeps a charger online —
              and every deployment feeds back into the platform.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Approach */

function Approach() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Delivery approach"
            title="A structured path from first conversation to long-term uptime."
            lede="Throughout the project lifecycle we maintain strong project governance, effective stakeholder communication and rigorous quality assurance."
          />
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {deliveryPhases.map((phase, i) => (
            <Reveal key={phase.step} delay={i * 70} as="li">
              <div className="group relative h-full rounded-2xl border border-ink-900/8 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-volt-500/40 hover:bg-volt-50/40">
                <span className="font-display text-[28px] font-semibold leading-none text-ink-900/12 transition-colors duration-300 group-hover:text-volt-500/40">
                  {phase.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-900/65">
                  {phase.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Why us */

function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-volt-50/60 to-white py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Why Blue Point"
              title="Complete solutions, not isolated services."
              lede="Our commitment to technical excellence, innovation, quality, safety and operational reliability lets us consistently deliver infrastructure that creates lasting commercial and environmental value."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-3xl bg-ink-900">
              <Image
                src="/images/commissioning.jpg"
                alt="Blue Point engineers commissioning DC fast chargers beneath a solar canopy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-900/10 bg-ink-900/10">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="group bg-white p-8 transition-colors duration-300 hover:bg-volt-50/60 md:p-9">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-[13px] font-semibold text-white transition-colors duration-300 group-hover:bg-volt-600">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink-900">
                        {d.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-ink-900/65">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- Industries */

function Industries() {
  const track = [...industries, ...industries];

  return (
    <section className="border-y border-ink-900/8 py-16">
      <div className="container-x">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-900/40">
            Sectors we build for
          </p>
        </Reveal>
      </div>
      <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-3">
          {track.map((industry, i) => (
            <li
              key={`${industry}-${i}`}
              className="whitespace-nowrap rounded-full border border-ink-900/10 px-5 py-2.5 text-[14px] font-medium text-ink-900/70"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- CTA */

function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-volt-600/25 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow tone="dark">Let&apos;s build</Eyebrow>
          </div>
          <h2 className="mx-auto mt-7 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.05] text-white">
            Planning charging infrastructure? Start with a feasibility
            conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/65">
            Tell us about your site, your fleet or your development. We will
            come back with what is technically possible, what it takes to build,
            and what it costs to run.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Talk to our team</Button>
            <Button href="/services" variant="ghost">
              Explore services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
