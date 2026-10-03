import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/layouts/dashboard-layout';

export default function AdminDashboard({ stats, incomingRentals, myItems }: any) {
    return (
        <>
            <Head title="Admin Dashboard · BeeRent" />
            <DashboardLayout title="Admin dashboard">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card label="My items" value={stats.my_items} />
                    <Card label="Available now" value={stats.my_active_listings} />
                    <Card label="Pending rentals" value={stats.incoming_rentals} accent />
                    <Card label="Earnings this month" value={`₱${stats.earnings_this_month.toFixed(2)}`} accent />
                </div>

                <section className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-4 font-display text-xl font-semibold">Pending rentals</h2>
                        {incomingRentals.length === 0
                            ? <p className="text-gray-500">No pending requests.</p>
                            : <ul className="space-y-3">
                                {incomingRentals.map((r: any) => (
                                    <li key={r.id} className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#12201F]">
                                        <div className="font-medium">{r.item.title}</div>
                                        <div className="text-sm text-gray-500">From: {r.renter.name} ({r.renter.email})</div>
                                    </li>
                                ))}
                            </ul>}
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-xl font-semibold">My items</h2>
                        <Link href="/items/create"
                              className="mb-4 inline-block rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-white hover:bg-[#B85F1C]">
                            + List new item
                        </Link>
                        <ul className="space-y-3">
                            {myItems.map((i: any) => (
                                <li key={i.id} className="rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-[#12201F]">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{i.title}</span>
                                        <span className="text-sm text-gray-500">₱{i.daily_rate}/day</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </DashboardLayout>
        </>
    );
}

function Card({ label, value, accent }: any) {
    return (
        <div className={`rounded-2xl border p-6 ${accent ? 'border-brand-accent/30 bg-brand-accent/5' : 'border-black/10 bg-white dark:border-white/10 dark:bg-[#12201F]'}`}>
            <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            <div className={`mt-2 font-display text-2xl font-semibold ${accent ? 'text-brand-accent' : ''}`}>{value}</div>
        </div>
    );
}