import {
    HeartPulse,
    BookOpen,
    LineChart,
    Target,
    Share2,
    ShieldCheck,
    Zap,
    Users,
    Lightbulb,
    Search,
    BookMarked
} from 'lucide-react';

const PROGRAMS = [
    {
        title: 'Health & Nutrition',
        icon: <HeartPulse className="h-10 w-10" />,
        description: 'Addressing high child malnutrition and improving access to quality healthcare in rural and marginalized communities.',
        details: [
            'Early childhood nutrition programs',
            'Community-based health awareness',
            'Maternal health support initiatives',
            'Health policy advocacy'
        ]
    },
    {
        title: 'Quality Education',
        icon: <BookOpen className="h-10 w-10" />,
        description: 'Transforming schooling outcomes to ensure students acquire relevant knowledge and critical thinking skills.',
        details: [
            'Teacher training & development',
            'Out-of-school youth integration',
            'Digital literacy programs',
            'Educational infrastructure support'
        ]
    },
    {
        title: 'Skills & Livelihood',
        icon: <LineChart className="h-10 w-10" />,
        description: 'Equipping the workforce with technical and vocational skills to thrive in a rapidly changing global economy.',
        details: [
            'Vocational training partnerships',
            'ICT skills for the digital age',
            'Entrepreneurship development',
            'Market-linked skill mapping'
        ]
    }
];

const DIFFERENTIATORS = [
    {
        title: 'Cross-sectoral Integration',
        description: "We don't treat health, education, and skills in silos. We design interventions that reflect the real-life interdependence of these areas."
    },
    {
        title: 'Local Solutions, Global Standards',
        description: 'We root our work in local realities, while applying best practices from global experience and rigorous evaluation.'
    },
    {
        title: 'Public-Private Partnership',
        description: 'We bridge the gap between policy and practice, working with both public institutions and private innovators.'
    },
    {
        title: 'Sustainability-First',
        description: 'Every program is designed to be scalable, financially sustainable, and aligned with national priorities.'
    }
];

const VALUE_PROPOSITIONS = [
    {
        title: "Exclusive Human Capital Focus",
        description: "Unlike other institutions, we focus exclusively on the human capital development spectrum.",
        icon: <Target className="h-6 w-6" />
    },
    {
        title: "AI & Technology Integration",
        description: "Using disruptive technologies like AI to facilitate human capital development and maintain relevance in the modern age.",
        icon: <Zap className="h-6 w-6" />
    },
    {
        title: "Policy Coordination",
        description: "Playing an important role in policy coordination and quality assurance among various stakeholders.",
        icon: <ShieldCheck className="h-6 w-6" />
    },
    {
        title: "Stakeholder Engagement",
        description: "Engaging with government ministries, development partners, NGOs, and philanthropic organizations.",
        icon: <Users className="h-6 w-6" />
    },
    {
        title: "Action Research",
        description: "Conducting basic research and testing hypotheses through action research to support robust policy actions.",
        icon: <Search className="h-6 w-6" />
    },
    {
        title: "Human Capital Training",
        description: "Undertaking training activities for design, implementation, and evaluation of HC interventions.",
        icon: <BookMarked className="h-6 w-6" />
    }
];

export default function WhatWeDo() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-primary/5 py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-black text-foreground sm:text-5xl lg:text-6xl mb-8">
                        The Single Most Important <br />
                        <span className="text-primary italic">Asset of a Nation</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
                        Human capital—comprising health, education, and skills—is the foundation of prosperity. Yet, gaps remain. HCI exists to bridge these gaps through integrated action.
                    </p>
                </div>
            </section>

            {/* Why Human Capital? Section with differentiation */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-extra-bold text-foreground sm:text-4xl mb-6">How We Stand Apart</h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Unlike traditional development initiatives, HCI is integrative, data-driven, and country-led. We shift the focus from inputs to long-term capability.
                        </p>
                        <div className="space-y-8">
                            {DIFFERENTIATORS.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-muted rounded-3xl p-1 lg:p-12 overflow-hidden shadow-sm border">
                        <div className="aspect-square bg-white rounded-2xl flex flex-col justify-center p-8 lg:p-12 space-y-6">
                            <span className="text-primary font-black uppercase tracking-widest text-sm">Evidence to Action</span>
                            <p className="text-2xl font-bold leading-tight">
                                "We don't just generate knowledge—we ensure it is used to inform policies, budgets, and investments that improve lives."
                            </p>
                            <div className="h-1 w-20 bg-primary"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Program Areas */}
            <section className="bg-muted/30 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-foreground sm:text-4xl">Core Program Pillars</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            Strategic interventions across the three foundational areas of human development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {PROGRAMS.map((program) => (
                            <div key={program.title} className="flex flex-col rounded-3xl border bg-background p-10 transition-all hover:shadow-xl hover:border-primary/20 group">
                                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-primary transition-transform group-hover:scale-110">
                                    {program.icon}
                                </div>
                                <h3 className="text-2xl font-black text-foreground mb-4">{program.title}</h3>
                                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                    {program.description}
                                </p>
                                <ul className="mt-auto space-y-4">
                                    {program.details.map((detail) => (
                                        <li key={detail} className="flex items-center text-sm font-semibold text-foreground">
                                            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-primary"></div>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Propositions Grid */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-foreground sm:text-4xl">HCI Value Propositions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Unique strengths that drive our mission forward.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VALUE_PROPOSITIONS.map((prop, index) => (
                        <div key={index} className="p-8 rounded-2xl border bg-background hover:bg-muted/50 transition-colors">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                                {prop.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{prop.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
