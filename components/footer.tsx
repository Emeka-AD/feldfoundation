import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary">
      {/* Donation CTA Section */}
      <section id="donate" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-foreground/10 to-transparent rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Heart className="w-4 h-4" />
                  Make a Difference
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance leading-tight">
                  Your Support Changes Lives
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-lg">
                  Every contribution helps us reach more youth and women in Delta State. 
                  Join our mission to create sustainable empowerment and lasting community impact.
                </p>
              </div>

              {/* Right - Donation Options */}
              <div className="bg-card rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Ways to Support
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="#contact"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Make a Donation</p>
                      <p className="text-sm text-primary-foreground/80">
                        One-time or recurring support
                      </p>
                    </div>
                  </a>

                  <a
                    href="#contact"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Partner With Us</p>
                      <p className="text-sm text-muted-foreground">
                        Corporate & organizational partnerships
                      </p>
                    </div>
                  </a>

                  <a
                    href="#contact"
                    className="flex items-center gap-4 p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">Volunteer</p>
                      <p className="text-sm text-muted-foreground">
                        Share your skills and time
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FELD_logo_transparent-zf8s7UzhdAcX13kasF4ra2gEmUfi7S.png"
                  alt="FELD Foundation Logo"
                  width={140}
                  height={100}
                  className="h-20 w-auto"
                />
              </Link>
              <p className="mt-6 text-primary-foreground/70 max-w-md leading-relaxed">
                Transforming lives through youth and women empowerment in Delta
                State, Nigeria. Building stronger communities, one initiative at a
                time.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <MapPin className="w-5 h-5" />
                  <span>Delta State, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:info@feldfoundation.org" className="hover:text-primary-foreground transition-colors">
                    info@feldfoundation.org
                  </a>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/70">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+234000000000" className="hover:text-primary-foreground transition-colors">
                    +234 000 000 0000
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "#" },
                  { name: "About Us", href: "#about" },
                  { name: "Our Programs", href: "#programs" },
                  { name: "Our Impact", href: "#impact" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-6">
                Our Programs
              </h4>
              <ul className="space-y-4">
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
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} FELD Foundation. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Empowering communities across Delta State, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
