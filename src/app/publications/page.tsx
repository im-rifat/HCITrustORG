import { Metadata } from 'next';
import { Search, Download, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Publications',
    description: 'Browse our latest research papers, policy briefs, and innovation reports.',
};

// Placeholder data for publications
const PUBLICATIONS = [
    {
        id: '1',
        title: 'National Health Literacy Assessment 2024',
        date: 'Jan 15, 2024',
        category: 'Health',
        summary: 'A comprehensive study on health literacy levels among rural populations in Bangladesh.',
        author: 'HCI Trust Research Team',
    },
    {
        id: '2',
        title: 'Inclusive Education for Hard-to-Reach Areas',
        date: 'Nov 10, 2023',
        category: 'Education',
        summary: 'Evaluating the impact of digital literacy tools in underserved primary schools.',
        author: 'Policy Department',
    },
    {
        id: '3',
        title: 'Youth Skills Gap Analysis in the RMG Sector',
        date: 'Sep 05, 2023',
        category: 'Skills',
        summary: 'Identifying the mismatch between vocational training and industry requirements.',
        author: 'Skills Innovation Lab',
    },
];

export default function PublicationsPage() {
    return (
        <div className="flex flex-col gap-12 pb-20">
            <section className="bg-muted/30 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Publications</h1>
                        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                            Our research and policy papers are open-access resources intended to inform and drive dialogue on human capital development.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search publications..."
                            className="w-full rounded-md border border-border bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {['All', 'Health', 'Education', 'Skills', 'Policy'].map((cat) => (
                            <button
                                key={cat}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${cat === 'All' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {PUBLICATIONS.map((pub) => (
                        <div key={pub.id} className="group relative flex flex-col sm:flex-row gap-8 rounded-2xl border p-6 transition-all hover:bg-accent/50">
                            <div className="flex h-40 w-full sm:w-28 flex-shrink-0 items-center justify-center rounded-lg bg-muted border group-hover:bg-background transition-colors">
                                <BookOpen className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <div className="flex flex-grow flex-col">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{pub.category}</span>
                                    <span className="text-xs text-muted-foreground">{pub.date}</span>
                                </div>
                                <h2 className="mt-4 text-xl font-bold group-hover:text-primary transition-colors">{pub.title}</h2>
                                <p className="mt-3 text-muted-foreground leading-relaxed">{pub.summary}</p>
                                <div className="mt-6 flex items-center justify-between border-t pt-4">
                                    <span className="text-sm text-muted-foreground">By {pub.author}</span>
                                    <button className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
                                        <Download className="h-4 w-4" /> PDF (2.4 MB)
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
