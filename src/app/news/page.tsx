import { Metadata } from 'next';
import { CalendarDays } from 'lucide-react';

export const metadata: Metadata = {
    title: 'News & Events',
    description: 'Stay updated with the latest news, announcements, and upcoming events from HCI Trust.',
};

export default function NewsPage() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <section className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">News & Events</h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Updates on our latest activities, policy dialogues, and community interventions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed rounded-3xl bg-muted/20">
                    <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mb-6">
                        <CalendarDays className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Updates Coming Soon</h2>
                    <p className="mt-4 max-w-sm text-muted-foreground">
                        We are currently preparing our latest news and upcoming event reports. Check back soon for updates.
                    </p>
                </div>
            </section>
        </div>
    );
}
