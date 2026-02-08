const TEAM_SECTIONS = [
    {
        title: "Trustees",
        members: [
            { name: "Dr. Shahidur Rahman Khandker", role: "Trustee" },
            { name: "Farhad Ahmed", role: "Trustee" },
            { name: "Syed Ahsan Habib", role: "Trustee" }
        ]
    },
    {
        title: "Research Team",
        members: [
            { name: "Hussain Samad", role: "Senior Researcher" },
            { name: "Zahed Khan", role: "Researcher" },
            { name: "Manik Mahmud", role: "Researcher" }
        ]
    }
];

export default function TeamPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="bg-primary/5 py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-black text-foreground sm:text-5xl lg:text-6xl mb-8">
                        The Minds Behind <br />
                        <span className="text-primary italic">HCI Trust</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
                        Led by globally recognized experts and dedicated researchers committed to transforming Bangladesh’s social and economic landscape.
                    </p>
                </div>
            </section>

            {/* Team Sections */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-24">
                {TEAM_SECTIONS.map((section, idx) => (
                    <section key={idx}>
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-black text-foreground">{section.title}</h2>
                            <div className="h-px flex-grow bg-primary/10"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {section.members.map((member, mIdx) => (
                                <div key={mIdx} className="group">
                                    <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden mb-6 relative border border-primary/5">
                                        {/* Placeholder for real images when they are uploaded to Sanity */}
                                        <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-black text-4xl uppercase tracking-tighter">
                                            HCI Team
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {/* Career CTA */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="bg-muted rounded-3xl p-12 lg:p-20 text-center border">
                    <h2 className="text-3xl font-black mb-6">Want to make an impact?</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                        We are always looking for passionate researchers and program specialists to join our mission.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                    >
                        Join Our Team
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </div>
            </section>
        </div>
    );
}
