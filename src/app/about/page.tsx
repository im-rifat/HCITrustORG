import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about HCI Trust, our mission, vision, and history of advancing human capital in Bangladesh.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <section className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About HCI Trust</h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            We are a dedicated non-profit organization focused on building a resilient future for the underserved populations of Bangladesh.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Mission</h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            To advance human capital through evidence-based research, impactful policy dialogue, and innovative program implementation in Health, Education, and Skills development.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Vision</h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            A Bangladesh where every individual, regardless of their background, has the opportunity to thrive through access to quality health and education.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-primary/5 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">Our History</h2>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            Founded with the goal of bridging the gap in human capital development, HCI Trust has grown into a hub for policy innovation and community empowerment. We believe that by focusing on children, youth, and women, we can create a ripple effect of positive change throughout society.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
