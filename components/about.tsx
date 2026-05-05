import { Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            About Us
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Building a Stronger Community Through Empowerment
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Foundation for Effective Leadership and Development (FELD) is a
            non-governmental organization based in Delta State, Nigeria,
            committed to transforming lives through sustainable empowerment
            initiatives.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower youth and women in Delta State through economic
              empowerment programmes, skills acquisition, microcredit loans, and
              community development initiatives that foster sustainable growth
              and self-reliance.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Delta State where every youth and woman has access to
              opportunities that enable them to achieve economic independence,
              contribute meaningfully to their communities, and live with
              dignity.
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Values
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Integrity, compassion, and commitment guide everything we do. We
              believe in transparency, community partnership, and sustainable
              solutions that create lasting positive change in people&apos;s
              lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
