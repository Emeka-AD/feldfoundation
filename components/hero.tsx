import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-primary pt-20"
    >
      {/* Background overlay with image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-empowerment.jpg"
          alt="Empowered African women and youth in Nigeria"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent">
          Foundation for Effective Leadership & Development
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Empowering Communities
          <span className="block text-secondary mt-2">Transforming Lives</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">
          FELD Foundation is dedicated to youth and women empowerment in Delta
          State, Nigeria. Through economic empowerment programmes and community
          development initiatives, we are building a brighter future.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#programs"
            className="rounded-md bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            Our Programs
          </Link>
          <Link
            href="#about"
            className="rounded-md border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5,000+", label: "Lives Impacted" },
            { value: "50+", label: "Communities Reached" },
            { value: "N20M+", label: "Loans Disbursed" },
            { value: "10+", label: "Years of Service" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
