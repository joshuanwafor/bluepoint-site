import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, Check, SectionHeading } from "@/components/ui";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blue Point is an engineering and technology company accelerating the adoption of electric mobility across Nigeria and Africa through world-class charging infrastructure.",
};

const hsqe = [
  "Safe working environments for personnel and contractors",
  "Protection of surrounding communities during construction and operation",
  "Environmental preservation across the asset lifecycle",
  "Compliance with recognised industry standards and regulatory requirements",
  "Quality assurance integrated into every phase of project delivery",
  "Infrastructure built to the highest professional standards",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Blue Point"
        title="Built to power Africa's transition to electric mobility."
        lede="An engineering and technology company delivering the infrastructure, software and operational discipline that make electric transport work at scale."
        image="/images/solar-carport.jpg"
        imageAlt="Solar carport canopy above a row of electric vehicles at a Blue Point site"
      />

      {/* History */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Company history"
                title="Two disciplines, deliberately combined."
              />
            </Reveal>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-ink-900/70 lg:col-span-7">
            <Reveal delay={80}>
              <p className="text-[19px] leading-relaxed text-ink-900">
                Blue Point is an engineering and technology company established
                through the collaboration of two companies with complementary
                expertise in engineering, product development and strategic
                consulting.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                The Company was founded with the vision of becoming a leading
                force in accelerating the adoption of electric vehicles and
                electric mobility solutions across Nigeria and Africa by
                delivering world-class infrastructure and technology that support
                the transition to clean transportation.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                Blue Point provides end-to-end electric mobility solutions,
                combining engineering excellence, innovative technology and
                project execution capabilities to design, develop, deploy,
                operate and maintain electric vehicle charging infrastructure and
                other supporting mobility solutions. We deliver integrated
                turnkey solutions tailored to the needs of governments,
                businesses, commercial developments, fleet operators and other
                organisations moving towards sustainable transportation.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Since inception, Blue Point has successfully designed, deployed
                and commissioned electric vehicle charging stations for multiple
                clients across Lagos and Abuja. Leveraging multidisciplinary
                expertise in engineering, infrastructure development and
                technology, we continue to deliver reliable, scalable and
                future-ready charging infrastructure that meets international
                standards while supporting the rapid growth of Nigeria&apos;s
                electric mobility ecosystem.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-ink-900/10 pt-10 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl font-semibold text-ink-900">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-[13px] leading-snug text-ink-900/60">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-charge-500/12 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          <Reveal>
            <div className="h-full bg-ink-950 p-9 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-volt-300">
                Mission
              </p>
              <p className="mt-7 text-[19px] leading-relaxed text-white/85">
                To contribute meaningfully to Africa&apos;s transition to clean
                energy by accelerating the adoption of electric vehicles through
                the deployment of reliable, accessible and sustainable
                infrastructure.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/55">
                Blue Point is committed to developing the complete ecosystem that
                supports electric mobility — charging stations, EV servicing
                hubs, supporting electrical infrastructure and technology-driven
                solutions that enable governments, businesses and individuals to
                confidently embrace sustainable transportation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full bg-ink-950 p-9 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-charge-400">
                Vision
              </p>
              <p className="mt-7 text-[19px] leading-relaxed text-white/85">
                To become the leading electric mobility infrastructure company in
                Africa.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/55">
                We work collaboratively with governments, private sector
                organisations, investors and industry stakeholders to achieve
                sustainable development objectives while creating a cleaner,
                smarter and more efficient transportation ecosystem for future
                generations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HSQE */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="HSQE commitment"
                title="Health, safety, quality and environment — integrated, not appended."
                lede="These are fundamental to every project Blue Point undertakes, built into each phase of delivery rather than checked at the end."
              />
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-10 space-y-4">
                {hsqe.map((item) => (
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
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-ink-900">
                <Image
                  src="/images/commissioning.jpg"
                  alt="Blue Point engineers in high-visibility vests commissioning charging equipment on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="relative overflow-hidden bg-linear-to-b from-volt-50/70 to-white py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our commitment"
              title="Long-term partnerships founded on trust, integrity and technical excellence."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[17px] leading-relaxed text-ink-900/70">
              Blue Point is committed to supporting Africa&apos;s transition
              towards sustainable transportation by delivering infrastructure
              that enables cleaner, more efficient mobility. By combining
              engineering capability, advanced technology and operational
              expertise, we aim to become one of Africa&apos;s most trusted
              infrastructure partners in the electric mobility sector — and to
              contribute meaningfully to economic development, environmental
              sustainability and the future of transportation across the
              continent.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <Button href="/projects">See what we have built</Button>
              <Button href="/leadership" variant="outline">
                Meet the leadership
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
