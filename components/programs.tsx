"use client";

import { useState } from "react";
import { Banknote, GraduationCap, Users, Briefcase, ArrowRight } from "lucide-react";

const programs = [
  {
    id: 1,
    icon: Banknote,
    title: "Economic Empowerment",
    shortDescription: "Microcredit loans and financial literacy",
    fullDescription:
      "We provide microcredit loans and comprehensive financial literacy programmes to help women and youth start and grow their businesses. Our cooperative groups have received over N6 million in funding, enabling sustainable income generation across Delta State communities.",
    stats: { value: "N6M+", label: "Disbursed" },
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Skills Acquisition",
    shortDescription: "Vocational training for sustainable income",
    fullDescription:
      "Our vocational training programmes cover tailoring, hairdressing, catering, ICT, and other marketable trades. We equip beneficiaries with practical skills that create pathways to sustainable employment and entrepreneurship.",
    stats: { value: "500+", label: "Trained" },
  },
  {
    id: 3,
    icon: Users,
    title: "Women Empowerment",
    shortDescription: "Supporting women to lead and thrive",
    fullDescription:
      "Through cooperative groups, mentorship networks, and dedicated resources, we support women in achieving financial independence and taking on leadership roles in their communities. Our programmes address unique challenges women face in rural areas.",
    stats: { value: "20+", label: "Cooperatives" },
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Youth Development",
    shortDescription: "Nurturing tomorrow's leaders",
    fullDescription:
      "We invest in the next generation through leadership training, entrepreneurship workshops, and mentorship programmes. Our youth initiatives focus on building confidence, practical skills, and a mindset for positive community impact.",
    stats: { value: "1000+", label: "Youth Reached" },
  },
];

export function Programs() {
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <section id="programs" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            What We Do
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Programmes That Create Real Change
          </h2>
        </div>

        {/* Interactive Program Display */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          {/* Program Tabs */}
          <div className="space-y-4">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                  activeProgram.id === program.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border hover:border-primary/50 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                      activeProgram.id === program.id
                        ? "bg-primary-foreground/20"
                        : "bg-primary/10"
                    }`}
                  >
                    <program.icon
                      className={`w-6 h-6 ${
                        activeProgram.id === program.id
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold ${
                        activeProgram.id === program.id
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {program.title}
                    </h3>
                    <p
                      className={`text-sm mt-1 ${
                        activeProgram.id === program.id
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {program.shortDescription}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      activeProgram.id === program.id
                        ? "text-primary-foreground translate-x-1"
                        : "text-muted-foreground group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border shadow-sm lg:sticky lg:top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <activeProgram.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeProgram.title}
                </h3>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              {activeProgram.fullDescription}
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">
                    {activeProgram.stats.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {activeProgram.stats.label}
                  </p>
                </div>
                <div className="h-12 w-px bg-border" />
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Get Involved
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
