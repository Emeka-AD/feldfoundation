import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="donate" className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center pb-16 border-b border-primary-foreground/20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Support Our Mission
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Your contribution helps us empower more youth and women in Delta
            State. Together, we can create lasting change.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Donate Now
            </a>
            <a
              href="#contact"
              className="rounded-md border-2 border-primary-foreground/30 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-12 grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/473247288_122098471394729136_1681226722598966194_n-yvTsd5qGYWMIXh2R31BkKewOOafKlI.jpg"
                alt="FELD Foundation Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-lg font-bold text-primary-foreground">
                  FELD Foundation
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Foundation for Effective Leadership & Development
                </p>
              </div>
            </Link>
            <p className="mt-4 text-primary-foreground/70 max-w-md leading-relaxed">
              Transforming lives through youth and women empowerment in Delta
              State, Nigeria. Building stronger communities, one initiative at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Programs", "Impact", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                "Economic Empowerment",
                "Skills Acquisition",
                "Women Empowerment",
                "Youth Development",
              ].map((program) => (
                <li key={program}>
                  <Link
                    href="#programs"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} FELD Foundation. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
