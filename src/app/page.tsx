import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, HeartPulse, ShieldCheck, Microscope, MessageSquare, Lightbulb, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl leading-tight">
              Building a <span className="text-primary text-secondary">Healthier Nation</span>, Smarter & <span className="text-primary italic">Skilled Workforces</span>, Brighter Futures.
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              The Human Capital Initiative (HCI) is a national effort to transform Bangladesh’s development trajectory by prioritizing investments in **Health, Education, and Skills**—the three foundational pillars of human capital.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/what-we-do"
                className="rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
              >
                Explore What We Do
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-primary/20 bg-background px-8 py-4 text-base font-bold text-primary hover:bg-accent transition-all"
              >
                About HCI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Message */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Empowering Bangladesh</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              As Bangladesh aspires to become an upper-middle-income country, closing its human capital gap is more urgent than ever. HCI is committed to designing evidence-based policies, mobilizing strategic investments, and fostering innovation to strengthen the capabilities of every citizen—especially children, youth, and women in underserved areas.
            </p>
          </div>
          <div className="bg-accent/50 rounded-2xl p-8 border border-primary/10">
            <p className="text-lg italic text-primary font-medium leading-relaxed">
              "Sustainable development and inclusive economic growth begin with strong, healthy, and capable people. We aim to work closely with government agencies, development partners, and civil society to advance a bold vision: a Bangladesh where no talent is wasted."
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Platforms (Workflow) */}
      <section className="bg-primary/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">HCI Workflow: Strategic Platforms</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our objectives focus on four key areas to influence public policy and investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary flex mb-6">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Research</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Generate rigorous, policy-relevant knowledge on human capital investment in health, education, and skills.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary flex mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Policy Dialogue</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Influence public policy and investment decisions through evidence-based advocacy.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary flex mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Program Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Design, pilot, and evaluate scalable models to strengthen human capital systems.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary flex mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Partnership</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Build a coalition of stakeholders to mobilize resources, expertise, and implementation capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Publications & Insights</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Stay informed with our research on the impact of health, education, and skills investments. We bridge the gap between policy and practice.
            </p>
            <div className="mt-10">
              <Link
                href="/publications"
                className="inline-flex items-center gap-2 font-bold text-primary hover:underline hover:gap-3 transition-all"
              >
                Browse all publications <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl border bg-background p-10 shadow-xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all group-hover:scale-110"></div>
            <div className="flex items-start gap-8 relative z-10">
              <div className="hidden sm:flex h-48 w-34 flex-shrink-0 bg-muted items-center justify-center rounded-lg border shadow-inner">
                <BookOpen className="h-14 w-14 text-muted-foreground" />
              </div>
              <div className="flex-grow">
                <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-primary tracking-wide uppercase">New Release</span>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight text-foreground">National Human Capital Assessment 2025</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  A foundational report analyzing the current state of education and health literacy across 64 districts in Bangladesh.
                </p>
                <div className="mt-8 flex gap-4">
                  <button className="text-sm font-black text-primary hover:underline flex items-center gap-2">Read Briefing</button>
                  <button className="text-sm font-black text-muted-foreground hover:text-primary transition-colors hover:underline flex items-center gap-2">Download Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground sm:px-16 sm:py-28 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-900 to-primary opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl max-w-2xl mx-auto leading-tight">Join Our Effort for a Better Future</h2>
            <p className="mx-auto mt-8 max-w-2xl text-xl text-primary-foreground/90 font-medium">
              We mobilize public and private investments in human capital sectors to foster sustainable prosperity in Bangladesh.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-full bg-white px-10 py-5 text-lg font-black text-primary hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
