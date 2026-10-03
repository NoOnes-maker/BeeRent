import { Head, router } from '@inertiajs/react';
import DashboardLayout from '@/layouts/dashboard-layout';

export default function SuperAdminDashboard({ stats, allItems, recentUsers }: any) {
    const deleteItem = (id: number) => {
        if (!confirm('Remove this item permanently? This cannot be undone easily.')) return;
        router.delete(`/superadmin/items/${id}`);
    };

    return (
        <>
            <Head title="Super Admin · BeeRent" />
            <DashboardLayout title="Super Admin dashboard">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    <Card label="Total users"      value={stats.total_users} />
                    <Card label="Admins"           value={stats.total_admins} />
                    <Card label="Total items"      value={stats.total_items} />
                    <Card label="Total rentals"    value={stats.total_rentals} />
                    <Card label="Platform revenue" value={`₱${stats.platform_revenue.toFixed(2)}`} accent />
                </div>

                {/* All items moderation */}
                <section className="mt-10">
                    <h2 className="mb-4 font-display text-xl font-semibold">All items (moderation)</h2>
                    <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-[#12201F]">
                        <table className="w-full text-sm">
                            <thead className="border-b border-black/10 dark:border-white/10">
                                <tr className="text-left">
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Owner</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allItems.map((i: any) => (
                                    <tr key={i.id} className="border-b border-black/5 last:border-0 dark:border-white/5">
                                        <td className="p-3 font-medium">{i.title}</td>
                                        <td className="p-3 text-gray-500">{i.owner?.name ?? '—'}</td>
                                        <td className="p-3">₱{i.daily_rate}/day</td>
                                        <td className="p-3"><span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs">{i.status}</span></td>
                                        <td className="p-3">
                                            <button onClick={() => deleteItem(i.id)}
                                                    className="rounded-lg bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 hover:bg-red-200">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Recent users */}
                <section className="mt-10">
                    <h2 className="mb-4 font-display text-xl font-semibold">Recent signups</h2>
                    <ul className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#12201F]">
                        {recentUsers.map((u: any) => (
                            <li key={u.id} className="flex items-center justify-between p-4">
                                <span>{u.name} <span className="text-gray-500">({u.email})</span></span>
                                <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase text-brand-accent">{u.role}</span>
                            </li>
                        ))}
                    </ul>
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