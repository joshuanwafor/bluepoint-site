import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink-950 pt-[72px] text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-96 -translate-x-1/2 rounded-full bg-volt-600/20 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <p className="font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-volt-300">
          404
        </p>
        <h1 className="mx-auto mt-6 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)] font-semibold leading-tight">
          This connector is unplugged.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-white/60">
          The page you were looking for does not exist or has moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
