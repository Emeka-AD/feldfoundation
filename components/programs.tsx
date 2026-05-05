import { Banknote, GraduationCap, Users, Briefcase } from "lucide-react";

const programs = [
  {
    icon: Banknote,
    title: "Economic Empowerment",
    description:
      "Microcredit loans and financial literacy programmes to help women and youth start and grow their businesses. We have disbursed over N6 million to cooperative groups.",
    color: "bg-primary",
  },
  {
    icon: GraduationCap,
    title: "Skills Acquisition",
    description:
      "Vocational training in tailoring, hairdressing, catering, ICT, and other trades to equip beneficiaries with marketable skills for sustainable income.",
    color: "bg-secondary",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Dedicated programmes supporting women through cooperative groups, mentorship, and resources to achieve financial independence and community leadership.",
    color: "bg-accent",
  },
  {
    icon: Briefcase,
    title: "Youth Development",
    description:
      "Leadership training, entrepreneurship workshops, and mentorship programmes designed to nurture the next generation of community leaders.",
    color: "bg-primary",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Programs
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Creating Sustainable Impact Through Action
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our programmes are designed to address the unique challenges facing
            youth and women in Delta State, providing them with the tools and
            resources needed for success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-lg ${program.color} flex items-center justify-center mb-6`}
              >
                <program.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
