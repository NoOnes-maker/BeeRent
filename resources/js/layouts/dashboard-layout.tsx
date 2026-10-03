import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

type NavItem = { href: string; label: string };

const NAV_ITEMS: Record<string, NavItem[]> = {
    user: [
        { href: '/dashboard', label: 'Overview' },
        // Hidden until we build them:
        // { href: '/items',        label: 'My items' },
        // { href: '/rentals',      label: 'My rentals' },
        // { href: '/items/create', label: 'List new item' },
    ],
    admin: [
        { href: '/admin/dashboard', label: 'Overview' },
    ],
    superadmin: [
        { href: '/superadmin/dashboard', label: 'Overview' },
    ],
};

export default function DashboardLayout({ children, title }: PropsWithChildren<{ title: string }>) {
    const { auth } = usePage().props as any;
    const role = auth?.user?.role ?? 'user';
    const navItems = NAV_ITEMS[role] ?? NAV_ITEMS.user;
    const user = auth?.user;

    return (
        <div className="min-h-screen bg-brand-cream text-brand-ink dark:bg-[#0A0F0E] dark:text-brand-cream">
            {/* ─── Top bar ─── */}
            <header className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-brand-deep/95">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <Link href="/dashboard" className="flex items-center gap-2.5 font-display text-lg font-semibold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-brand-deep">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#F6F3EC" strokeWidth="2"
                                 strokeLinecap="round" className="h-4 w-4">
                                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                                <path d="M3 7v10l9 4 9-4V7" />
                                <path d="M12 11v10" />
                            </svg>
                        </span>
                        BeeRent
                    </Link>

                    <div className="flex items-center gap-3">
                        {user && (
                            <>
                                <span className="hidden text-sm text-gray-600 sm:inline dark:text-gray-300">
                                    {user.email}
                                </span>
                                <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-accent">
                                    {role}
                                </span>

                                {/* 🔐 LOGOUT — POST to /logout (Fortify destroys session) */}
                                <form method="POST" action="/logout" className="inline">
                                    <input type="hidden" name="_token" value="..." />
                                    <button type="submit" className="...">Log out</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">
                {/* ─── Sidebar ─── */}
                <aside className="hidden w-56 shrink-0 md:block">
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-black/5 hover:text-brand-ink dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-brand-cream"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                {/* ─── Main content ─── */}
                <main className="min-w-0 flex-1">
                    <h1 className="mb-6 font-display text-3xl font-semibold">{title}</h1>
                    {children}
                </main>
            </div>
        </div>
    );
}