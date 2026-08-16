import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { leaders, strategicAdviser, type Leader } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The directors and strategic advisers behind Blue Point Technology Solutions — leaders across engineering, technology, law, corporate strategy and Africa's electric mobility ecosystem.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Engineering, technology, law and strategy in one room."
        lede="Blue Point is led by people who have built companies, advised governments and delivered infrastructure — and who bring that combined judgement to every project."
      />

      <section className="py-24 md:py-32">
        <div className="container-x space-y-24 md:space-y-32">
          {leaders.map((leader, i) => (
            <LeaderProfile key={leader.slug} leader={leader} index={i} />
          ))}
        </div>
      </section>

      {/* Strategic partnership */}
      <section className="relative overflow-hidden bg-ink-950 py-24 text-white md:py-32">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
        <div
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-charge-500/12 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Strategic partnership"
              title="Blue Point × E-Mobility Africa"
              lede="Our partnership with E-Mobility Africa strengthens sourcing, procurement and industry expertise — supporting our ability to execute large-scale electric mobility projects across the continent."
            />
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal delay={80}>
                <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-8">
                  <Avatar
                    initials={strategicAdviser.initials}
                    name={strategicAdviser.name}
                    tone="dark"
                  />
                  <h3 className="mt-7 font-display text-2xl font-semibold text-white">
                    {strategicAdviser.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-volt-300">
                    {strategicAdviser.role}
                  </p>
                  <p className="mt-1 text-[14px] text-white/50">
                    {strategicAdviser.org}
                  </p>
                  <p className="mt-6 text-[15px] leading-relaxed text-white/65">
                    {strategicAdviser.lede}
                  </p>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {["Andela", "Flutterwave", "E-Mobility Africa"].map((v) => (
                      <li
                        key={v}
                        className="rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white/70"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="space-y-5 text-[16px] leading-relaxed text-white/65 lg:col-span-8">
              {strategicAdviser.body.map((para, i) => (
                <Reveal key={i} delay={100 + i * 50}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-900/8 py-20">
        <div className="container-x flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <div>
              <Eyebrow>Work with us</Eyebrow>
              <h2 className="mt-5 max-w-2xl text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight text-ink-900">
                Bring us in early — that is when engineering saves the most.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/contact" className="shrink-0">
              Contact the team
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function LeaderProfile({ leader, index }: { leader: Leader; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article
      id={leader.slug}
      className="scroll-mt-28 grid gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <div className={`lg:col-span-4 ${flipped ? "lg:order-2" : ""}`}>
        <Reveal>
          <div className="lg:sticky lg:top-28">
            {leader.image ? (
              <div className="relative aspect-3/4 overflow-hidden rounded-3xl bg-ink-900">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}, ${leader.role} at Blue Point`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-3/4 items-center justify-center rounded-3xl bg-linear-to-br from-ink-900 to-volt-800">
                <Avatar initials={leader.initials} name={leader.name} tone="dark" />
              </div>
            )}
            <h2 className="mt-7 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-ink-900">
              {leader.name}
            </h2>
            <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.14em] text-volt-700">
              {leader.role}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-8">
        <Reveal delay={80}>
          <p className="text-[clamp(1.15rem,2.1vw,1.4rem)] font-medium leading-[1.5] text-ink-900">
            {leader.lede}
          </p>
        </Reveal>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-900/70">
          {leader.body.map((para, i) => (
            <Reveal key={i} delay={120 + i * 40}>
              <p>{para}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}

function Avatar({
  initials,
  name,
  tone = "light",
}: {
  initials: string;
  name: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-semibold ${
        tone === "dark"
          ? "bg-linear-to-br from-volt-500 to-volt-700 text-white"
          : "bg-volt-100 text-volt-800"
      }`}
      aria-hidden="true"
      title={name}
    >
      {initials}
    </div>
  );
}
