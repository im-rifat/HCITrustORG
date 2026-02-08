import { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with HCI Trust for inquiries, partnerships, and collaborations.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            <section className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Have a question or want to collaborate? We would love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div className="rounded-2xl border bg-card p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                        <form className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="mt-2 block w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-primary px-6 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-12 lg:pl-12">
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-6">Our Office</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-5 w-5 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground italic">Registered Address</p>
                                        <p className="mt-1 text-muted-foreground">House 42, Road 7, Block D, Banani,<br />Dhaka 1213, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-5 w-5 text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground italic">Email Us</p>
                                        <p className="mt-1 text-muted-foreground">info@hcitrust.org</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-5 w-5 text-primary">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground italic">Call Us</p>
                                        <p className="mt-1 text-muted-foreground">+880 2 12345678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 h-5 w-5 text-primary">
                                        <Clock className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground italic">Office Hours</p>
                                        <p className="mt-1 text-muted-foreground">Sunday – Thursday: 9:00 AM – 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
