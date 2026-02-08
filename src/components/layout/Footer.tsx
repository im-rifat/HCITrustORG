import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t bg-muted">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-serif text-lg font-bold text-primary">HCI TRUST</h2>
                        <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
                            Advancing Human Capital through research, policy dialogue, and program innovation in Health, Education, and Skills development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Organization</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/what-we-do" className="hover:text-primary transition-colors">What We Do</Link></li>
                            <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/publications" className="hover:text-primary transition-colors">Publications</Link></li>
                            <li><Link href="/news" className="hover:text-primary transition-colors">News & Events</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Human Capital Initiative (HCI) Trust. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
