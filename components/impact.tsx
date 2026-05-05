import Image from "next/image";

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Impact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Real Stories, Real Change
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every programme we run creates ripples of positive change throughout
            our communities. Here&apos;s a glimpse of the impact we&apos;ve made
            together.
          </p>
        </div>

        {/* Featured Impact Image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ggg-w19QqzlqdCUj0ES7zoND2zHNfuDfXC.jpg"
            alt="FELD Foundation presenting N6 Million cheque to microcredit loan beneficiaries"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-accent font-semibold mb-2">Featured Event</p>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              N6 Million Microcredit Disbursement
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl leading-relaxed">
              In our Economic Empowerment Programme, FELD Foundation disbursed
              N6 Million in microcredit loans to cooperative groups across Delta
              State, empowering women entrepreneurs to grow their businesses.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "50+",
              label: "Communities Served",
              description: "Across Delta State",
            },
            {
              number: "3,000+",
              label: "Women Empowered",
              description: "Through our programmes",
            },
            {
              number: "2,000+",
              label: "Youth Trained",
              description: "In various skills",
            },
            {
              number: "500+",
              label: "Businesses Started",
              description: "By our beneficiaries",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-muted rounded-xl"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary">
                {stat.number}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
