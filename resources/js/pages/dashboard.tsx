import { Head, Link } from '@inertiajs/react';
import DashboardLayout from '@/layouts/dashboard-layout';

type Stats = {
    items_listed: number;
    active_rentals: number;
    total_earnings: number | string;
};

type Rental = {
    id: number;
    item: { title: string } | null;
    status: string;
    total_price: number | string;
};

type Item = {
    id: number;
    title: string;
    daily_rate: number | string;
    status: string;
    category: string | null;
};

type Props = {
    stats: Stats;
    recentRentals: Rental[];
    recentItems: Item[];
};

export default function Dashboard({ stats, recentRentals, recentItems }: Props) {
    return (
        <DashboardLayout title="Your dashboard">
            <Head title="Dashboard · BeeRent" />

            {/* ─── KPI cards ─── */}
            <div className="grid gap-4 sm:grid-cols-3">
                <StatCard label="Items listed"   value={stats.items_listed} />
                <StatCard label="Active rentals" value={stats.active_rentals} />
                <StatCard
                    label="Total earnings"
                    value={`₱${formatMoney(stats.total_earnings)}`}
                    accent
                />
            </div>

            {/* ─── Quick actions ─── */}
            <div className="mt-8 flex flex-wrap gap-3">
                <Link
                    href="/items/create"
                    className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#B85F1C]"
                >
                    + List a new item
                </Link>
                <Link
                    href="/items"
                    className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold hover:border-black/30 dark:border-white/20"
                >
                    Browse my items
                </Link>
            </div>

            {/* ─── Two-column: rentals + items ─── */}
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <section>
                    <h2 className="mb-4 font-display text-xl font-semibold">Recent rentals</h2>
                    {recentRentals.length === 0 ? (
                        <EmptyState text="You haven't rented anything yet." />
                    ) : (
                        <ul className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#12201F]">
                            {recentRentals.map((r) => (
                                <li key={r.id} className="flex items-center justify-between gap-4 p-4">
                                    <span className="flex-1 truncate font-medium text-brand-ink dark:text-brand-cream">
                                        {r.item?.title ?? 'Item removed'}
                                    </span>
                                    <StatusBadge status={r.status} />
                                    <span className="shrink-0 text-sm text-gray-600 dark:text-gray-400">
                                        ₱{formatMoney(r.total_price)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>

                <section>
                    <h2 className="mb-4 font-display text-xl font-semibold">Your items</h2>
                    {recentItems.length === 0 ? (
                        <EmptyState text="You haven't listed any items yet." />
                    ) : (
                        <ul className="divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#12201F]">
                            {recentItems.map((i) => (
                                <li key={i.id} className="flex items-center justify-between gap-4 p-4">
                                    <span className="flex-1 truncate font-medium text-brand-ink dark:text-brand-cream">
                                        {i.title}
                                    </span>
                                    <span className="shrink-0 text-sm text-gray-600 dark:text-gray-400">
                                        ₱{formatMoney(i.daily_rate)}/day
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </DashboardLayout>
    );
}

/* ───── Helpers ───── */

/**
 * Safely format a money value that may arrive as number, string, or null/undefined.
 * Prevents "₱NaN" rendering when the backend returns null for empty aggregates.
 */
function formatMoney(value: number | string | null | undefined): string {
    const n = Number(value ?? 0);
    return Number.isFinite(n) ? n.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }) : '0.00';
}

/* ───── Small components ───── */

function StatCard({
    label,
    value,
    accent = false,
}: {
    label: string;
    value: string | number;
    accent?: boolean;
}) {
    return (
        <div
            className={`rounded-2xl border p-6 ${
                accent
                    ? 'border-brand-accent/30 bg-brand-accent/5'
                    : 'border-black/10 bg-white dark:border-white/10 dark:bg-[#12201F]'
            }`}
        >
            <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
            <div
                className={`mt-2 font-display text-3xl font-semibold ${
                    accent ? 'text-brand-accent' : 'text-brand-ink dark:text-brand-cream'
                }`}
            >
                {value}
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const colors: Record<string, string> = {
        pending:   'bg-yellow-100 text-yellow-800',
        approved:  'bg-blue-100 text-blue-800',
        accepted:  'bg-blue-100 text-blue-800',
        active:    'bg-green-100 text-green-800',
        picked_up: 'bg-green-100 text-green-800',
        returned:  'bg-gray-100 text-gray-800',
        completed: 'bg-gray-100 text-gray-800',
        cancelled: 'bg-red-100 text-red-800',
        rejected:  'bg-red-100 text-red-800',
        disputed:  'bg-purple-100 text-purple-800',
    };
    return (
        <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                colors[status] ?? 'bg-gray-100 text-gray-800'
            }`}
        >
            {status.replace('_', ' ')}
        </span>
    );
}

function EmptyState({ text }: { text: string }) {
    return (
        <div className="rounded-2xl border border-dashed border-black/15 p-10 text-center text-sm text-gray-500 dark:border-white/15 dark:text-gray-400">
            {text}
        </div>
    );
}