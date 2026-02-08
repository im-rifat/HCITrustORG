const PARTNER_CATEGORIES = [
    {
        type: "Public Sector",
        description: "Aligning with government ministries and agencies to scale human capital interventions nationwide.",
        examples: ["Ministry of Health & Family Welfare", "Ministry of Education", "Local Government Engineering Department"]
    },
    {
        type: "Private Sector",
        description: "Collaborating with corporate leaders to integrate skills development with market demand.",
        examples: ["Industry Leaders", "Financial Institutions", "Tech Innovators"]
    },
    {
        type: "Academic & Research",
        description: "Partnering with universities and think tanks to ensure our work is grounded in rigorous evidence.",
        examples: ["National Universities", "International Research Centers", "Think Tanks"]
    },
    {
        type: "Development Partners",
        description: "Working with international agencies to bring global best practices and funding to local initiatives.",
        examples: ["Multilateral Agencies", "Bilateral Donors", "International Foundations"]
    },
    {
        type: "Non-Governmental Organizations",
        description: "Engaging with NGOs to reach the last mile and implement community-based solutions.",
        examples: ["Local NGOs", "International NGOs", "Civil Society Organizations"]
    }
];

export default function PartnersPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-primary/5 py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-black text-foreground sm:text-5xl lg:text-6xl mb-8">
                            Collaborating for <br />
                            <span className="text-primary italic">Greater Impact</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            HCI Trust actively engages with a diverse range of stakeholders across the human capital spectrum. Our partnerships facilitate knowledge sharing, resource mobilization, and the scaling of инноваative solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="sticky top-24">
                        <h2 className="text-3xl font-extra-bold text-foreground sm:text-4xl mb-6">Our Engagement Model</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We believe that the challenge of human capital development is too large for any single entity. Our model bridges the gap between policy, research, and practice through collaborative efforts.
                        </p>
                        <div className="p-8 rounded-2xl bg-muted/50 border border-primary/10">
                            <blockquote className="text-lg italic font-medium text-primary">
                                "The main motivation for our partnership is sharing responsibilities, enriching each other through knowledge sharing, and extending financial and technical support to achieve collective goals."
                            </blockquote>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {PARTNER_CATEGORIES.map((category, index) => (
                            <div key={index} className="p-8 rounded-3xl border bg-background hover:shadow-lg transition-all border-l-4 border-l-primary">
                                <h3 className="text-2xl font-black text-foreground mb-4">{category.type}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {category.examples.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Inquiry CTA */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-primary rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Explore Partnership Opportunities</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                        Join us in building a healthier, smarter, and more skilled Bangladesh. Together, we can transform lives.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-primary px-10 py-4 rounded-full font-black hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}
