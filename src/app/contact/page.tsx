import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Blue Point about EV charging infrastructure — site feasibility, new builds, fleet charging, operations and maintenance, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your site."
        lede="Whether you are planning a single charging bay or a network across multiple locations, the conversation starts the same way — with what is technically possible on your site."
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Get in touch
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink-900/65">
                Reach the Blue Point team directly, or use the form and we will
                come back to you with next steps.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <dl className="mt-10 space-y-8">
                <ContactItem label="Email">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[17px] font-medium text-volt-700 underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </ContactItem>

                <ContactItem label="Telephone">
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="text-[17px] font-medium text-ink-900 hover:text-volt-700"
                  >
                    {site.phone}
                  </a>
                </ContactItem>

                <ContactItem label="Registered office">
                  <address className="text-[16px] not-italic leading-relaxed text-ink-900/75">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.country}
                  </address>
                </ContactItem>

                <ContactItem label="Project locations">
                  <p className="text-[16px] text-ink-900/75">
                    Lagos · Abuja · Nationwide
                  </p>
                </ContactItem>
              </dl>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 rounded-2xl border border-ink-900/8 bg-volt-50/50 p-7">
                <h3 className="font-display text-base font-semibold text-ink-900">
                  What helps us respond faster
                </h3>
                <ul className="mt-4 space-y-2.5 text-[14px] leading-relaxed text-ink-900/70">
                  <li>· Site location and available parking layout</li>
                  <li>· Existing power supply and transformer capacity</li>
                  <li>· Expected vehicles or fleet size</li>
                  <li>· Target timeline and whether the site is operational</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-900/40">
        {label}
      </dt>
      <dd className="mt-2.5">{children}</dd>
    </div>
  );
}
