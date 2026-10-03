import { Head, Link, usePage } from '@inertiajs/react';
import { landingpage, login, register, logout } from '@/routes';

/**
 * BeeRent landing page.
 *
 * Flow:
 *  - Guest sees "Log in" and "List an item"
 *  - Logged-in user sees "Dashboard" and "Log out"
 *
 * Route imports use ACTUAL route names from `php artisan route:list`:
 *  - home     → GET / (landing page)
 *  - login    → GET /login
 *  - register → GET /register
 *  - logout   → POST /logout
 */
export default function Welcome() {
    const { auth } = usePage().props as any;

    return (
        <>
            <Head title="BeeRent — Rent almost anything, from someone nearby">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-brand-cream text-brand-ink font-sans dark:bg-brand-deep dark:text-brand-cream">
                <Header auth={auth} />

                <main>
                    <Hero />
                    <Stats />
                    <Features />
                    <HowItWorks />
                    <Categories />
                    <Trust />
                    <FinalCTA />
                </main>

                <Footer />
            </div>
        </>
    );
}

/* ────────────────────────────────────────────────────
   SUB-COMPONENTS
   ──────────────────────────────────────────────────── */

function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
    // 'dark' = dark icon on cream bg (for cream header)
    // 'light' = cream icon on dark bg (for dark sections/footer)
    const bg   = variant === 'dark' ? 'bg-brand-deep' : 'bg-brand-cream';
    const icon = variant === 'dark' ? '#F6F3EC'       : '#1F3A3B';

    return (
        <span className={`flex h-8 w-8 items-center justify-center rounded-[9px] ${bg}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke={icon} strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                <path d="M3 7v10l9 4 9-4V7" />
                <path d="M12 11v10" />
            </svg>
        </span>
    );
}

function Header({ auth }: { auth: { user?: { name: string } } }) {
    return (
        <header className="sticky top-0 z-20 border-b border-black/10 bg-brand-cream/95 backdrop-blur dark:border-white/10 dark:bg-brand-deep/95">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link
                    href={landingpage.url()}         // ✅ string, not object
                    className="flex items-center gap-2.5 font-display text-lg font-semibold"
                >
                    <Logo />
                    BeeRent
                </Link>

                <nav className="hidden gap-8 text-sm text-gray-600 md:flex dark:text-gray-300">
                    <a href="#how"    className="hover:text-brand-ink dark:hover:text-brand-cream">How it works</a>
                    <a href="#browse" className="hover:text-brand-ink dark:hover:text-brand-cream">Browse</a>
                    <a href="#safety" className="hover:text-brand-ink dark:hover:text-brand-cream">Trust &amp; safety</a>
                </nav>

                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <>
                            <Link
                                href={dashboard.url()}          // ✅ was "/dashboard"
                                className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold hover:border-black/30 dark:border-white/20"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href={logout.url()}             // ✅ was "/logout"
                                method="post"
                                as="button"
                                className="rounded-full bg-brand-deep px-5 py-2 text-sm font-semibold text-brand-cream hover:bg-[#122526]"
                            >
                                Log out
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={login.url()}              // ✅ was login()
                                className="rounded-full px-4 py-2 text-sm font-semibold text-brand-ink hover:bg-black/5 dark:text-brand-cream dark:hover:bg-white/10"
                            >
                                Log in
                            </Link>
                            <Link
                                href={register.url()}           // ✅ was register()
                                className="rounded-full bg-brand-deep px-5 py-2 text-sm font-semibold text-brand-cream hover:bg-[#122526]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="px-6 pt-16">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand-cream px-3.5 py-1.5 text-sm text-gray-600 dark:border-white/10 dark:bg-[#0E1918] dark:text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        Now live in your neighborhood
                    </span>

                    <h1 className="font-display text-[clamp(34px,5vw,54px)] font-semibold leading-[1.08] tracking-tight">
                        Rent almost <em className="italic text-brand-accent">anything</em>,<br />
                        from someone nearby.
                    </h1>

                    <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        BeeRent connects people who own tools, gear, and equipment with people who need them
                        for a day, a weekend, or a season — no buying, no clutter, no warehouse deliveries.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href="#browse"
                           className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-[#1B1006] hover:bg-[#B85F1C] hover:text-white">
                            Browse what's nearby
                        </a>
                        <Link href={register()}
                              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold hover:border-black/30 dark:border-white/20">
                            List your gear, earn money
                        </Link>
                    </div>
                </div>

                {/* Pegboard visual */}
                <div
                    className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[22px] bg-brand-gold"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #000 1.6px, transparent 1.6px)',
                        backgroundSize: '26px 26px',
                        backgroundPosition: '13px 13px',
                    }}
                    aria-hidden="true"
                />
            </div>
        </section>
    );
}

function Stats() {
    const stats = [
        { value: '6,200+', label: 'items available to rent right now' },
        { value: '18,400', label: 'rentals completed this year' },
        { value: '₱2.1M',  label: 'earned by item owners so far' },
    ];

    return (
        <div className="mt-20 bg-[#1A141A] px-6 py-11 text-brand-cream">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
                {stats.map((s) => (
                    <div key={s.label}>
                        <div className="font-display text-[clamp(28px,4vw,40px)] font-semibold text-brand-gold">{s.value}</div>
                        <div className="mt-1.5 text-sm text-gray-300">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Features() {
    const features = [
        { title: 'Search by what you need',      body: 'Look for "power washer for a driveway" — BeeRent matches you to nearby listings, not a rigid category tree.' },
        { title: 'Verified owners and renters',  body: 'Every account is ID-checked before a first rental.' },
        { title: 'Book exact pickup windows',    body: 'Pick a start and end time down to the hour.' },
        { title: 'Damage protection included',   body: 'Every booking includes coverage up to the item\'s listed value.' },
        { title: 'Owners set their own price',   body: 'You decide the daily, weekly, and deposit amount.' },
        { title: 'One thread per rental',        body: 'Messages, pickup details, and receipts in a single conversation.' },
    ];

    return (
        <section id="browse" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-xl">
                    <h2 className="font-display text-[clamp(26px,3.4vw,36px)] font-semibold">
                        Built for how renting actually works
                    </h2>
                    <p className="mt-3.5 leading-relaxed text-gray-600 dark:text-gray-300">
                        Every part of BeeRent is designed around the two moments that matter most: finding
                        the right item fast, and handing it off without friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
                    {features.map((f) => (
                        <div key={f.title} className="bg-brand-cream p-8 dark:bg-[#12201F]">
                            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{f.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorks() {
    const steps = [
        { num: '01', title: 'Find or list an item',   body: 'Search what\'s available near you, or take a few photos and set a price.' },
        { num: '02', title: 'Confirm the booking',    body: 'Pick your dates, message the owner, and pay securely.' },
        { num: '03', title: 'Meet, use, return',      body: 'Hand off in person, use a photo checklist, and return on time.' },
    ];

    return (
        <section id="how" className="bg-brand-cream px-6 py-20 dark:bg-[#0A0F0E]">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-xl">
                    <h2 className="font-display text-[clamp(26px,3.4vw,36px)] font-semibold">
                        Three steps, either side of the rental
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.num} className="border-t-2 border-brand-ink pt-2 dark:border-brand-cream">
                            <div className="mb-3.5 font-display text-sm font-semibold text-brand-accent">{s.num}</div>
                            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Categories() {
    const cats = [
        ['🔧', 'Power tools',       '1,240 listings'],
        ['🏕️', 'Camping & outdoor', '860 listings'],
        ['🎥', 'Cameras & AV',      '540 listings'],
        ['🎉', 'Party & events',    '710 listings'],
        ['🚲', 'Bikes & mobility',  '395 listings'],
        ['🏗️', 'Heavy equipment',   '180 listings'],
    ];

    return (
        <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-xl">
                    <h2 className="font-display text-[clamp(26px,3.4vw,36px)] font-semibold">
                        Whatever the job calls for
                    </h2>
                    <p className="mt-3.5 leading-relaxed text-gray-600 dark:text-gray-300">
                        Popular categories renters are searching for this week.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
                    {cats.map(([emoji, name, count]) => (
                        <div key={name}
                             className="rounded-2xl border border-black/10 bg-white p-5 text-center dark:border-white/10 dark:bg-[#16302E]">
                            <span className="mb-2.5 block text-[28px]">{emoji}</span>
                            <div className="text-sm font-semibold">{name}</div>
                            <div className="mt-0.5 text-xs text-gray-600 dark:text-gray-300">{count}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Trust() {
    const points = [
        { title: 'ID verification on every account',   body: 'Owners and renters both confirm identity before their first transaction.' },
        { title: 'Payments held until pickup',         body: 'Funds are released only once the renter confirms the item was as described.' },
        { title: 'Real support if something goes wrong', body: 'A human resolution team steps in for late returns, damage disputes, or no-shows.' },
    ];

    return (
        <section id="safety" className="px-6 py-20">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
                <div className="rounded-[22px] bg-brand-deep p-11 text-brand-cream">
                    <p className="mb-5 font-display text-2xl italic leading-snug">
                        "I listed my pressure washer on a Tuesday and had it booked out three weekends in a row by Friday."
                    </p>
                    <div className="text-sm text-gray-300">— Marisol T., item owner since 2024</div>
                </div>

                <div className="flex flex-col gap-6">
                    {points.map((p) => (
                        <div key={p.title} className="flex gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream dark:bg-[#0E1918]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#B85F1C" strokeWidth="2"
                                     strokeLinecap="round" className="h-4 w-4">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-1 text-[15px] font-semibold">{p.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{p.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <div className="mx-6 mb-20 rounded-[22px] bg-brand-ink px-8 py-16 text-center text-brand-cream">
            <h2 className="mx-auto mb-4 max-w-[20ch] font-display text-[clamp(26px,3.6vw,38px)] font-semibold">
                Your garage has something someone nearby needs today.
            </h2>
            <p className="mb-7 text-gray-300">Listing takes about four minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
                <Link href={register()}
                      className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-[#1B1006] hover:bg-[#B85F1C] hover:text-white">
                    List your first item
                </Link>
                <a href="#browse"
                   className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:border-white/50">
                    Browse rentals instead
                </a>
            </div>
        </div>
    );
}

function Footer() {
    return (
        <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 font-display text-base font-semibold">
                    <Logo />
                    BeeRent
                </div>
                <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
                    <a href="#how"    className="hover:text-brand-ink dark:hover:text-brand-cream">How it works</a>
                    <a href="#safety" className="hover:text-brand-ink dark:hover:text-brand-cream">Trust &amp; safety</a>
                    <a href="#"       className="hover:text-brand-ink dark:hover:text-brand-cream">Terms</a>
                    <a href="#"       className="hover:text-brand-ink dark:hover:text-brand-cream">Contact</a>
                </div>
            </div>
        </footer>
    );
}