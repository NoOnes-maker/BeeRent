import { Head, Link, usePage } from '@inertiajs/react';
import { landingpage, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

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

            <div className="min-h-screen bg-[#F6F3EC] text-[#16211F] [font-family:'Work_Sans',system-ui,sans-serif] dark:bg-[#d6a531] dark:text-[#F2EFE6]">

                {/* NAV */}
                <header className="sticky top-0 z-20 border-b border-black/10 bg-[#F6F3EC]/95 backdrop-blur dark:border-white/10 dark:bg-[#000000]/95">
                    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                        <div className="flex items-center gap-2.5 [font-family:'Fraunces',serif] text-lg font-semibold">
                            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1F3A3B]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#F6F3EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M3 7l9-4 9 4-9 4-9-4z" />
                                    <path d="M3 7v10l9 4 9-4V7" />
                                    <path d="M12 11v10" />
                                </svg>
                            </span>
                            BeeRent
                        </div>

                        <nav className="hidden gap-8 text-sm text-[#4B5450] md:flex dark:text-[#B9C2BD]">
                            <a href="#how" className="hover:text-inherit">How it works</a>
                            <a href="#browse" className="hover:text-inherit">Browse</a>
                            <a href="#safety" className="hover:text-inherit">Trust &amp; safety</a>
                        </nav>

                        <div className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={landingpage()}
                                    className="rounded-full border border-black/15 px-5 py-2 text-sm font-semibold hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
                                >
                                    Home
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-full px-4 py-2 text-sm font-semibold text-[#16211F] hover:bg-black/5 dark:text-[#F2EFE6] dark:hover:bg-white/10"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="rounded-full bg-[#1F3A3B] px-5 py-2 text-sm font-semibold text-[#F6F3EC] hover:bg-[#122526]"
                                    >
                                        List an item
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* HERO */}
                <section className="px-6 pt-16">
                    <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                        <div>
                            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#EFE9DA] px-3.5 py-1.5 text-sm text-[#4B5450] dark:border-white/10 dark:bg-[#0E1918] dark:text-[#B9C2BD]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D9782E]" />
                                Now live in your neighborhood
                            </span>

                            <h1 className="[font-family:'Fraunces',serif] text-[clamp(34px,5vw,54px)] font-semibold leading-[1.08] tracking-tight">
                                Rent almost <em className="italic text-[#B85F1C]">anything</em>,<br />
                                from someone nearby.
                            </h1>

                            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">
                                Yardshare connects people who own tools, gear, and equipment with people who need them
                                for a day, a weekend, or a season — no buying, no clutter, no warehouse deliveries.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <a
                                    href="#browse"
                                    className="rounded-full bg-[#D9782E] px-6 py-3 text-sm font-semibold text-[#1B1006] hover:bg-[#B85F1C] hover:text-white"
                                >
                                    Browse what's nearby
                                </a>
                                <Link
                                    href={register()}
                                    className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold hover:border-black/30 dark:border-white/20 dark:hover:border-white/40"
                                >
                                    List your gear, earn money
                                </Link>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#4B5450] dark:text-[#B9C2BD]">
                                <span className="flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                                        <path d="M12 2l3 6.5 7 1-5 5 1.5 7-6.5-3.5L5 21.5l1.5-7-5-5 7-1L12 2z" />
                                    </svg>
                                    4.9 average rental rating
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                                        <path d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
                                    </svg>
                                    Every rental is insured
                                </span>
                                <span className="flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0">
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7v5l3.5 2" />
                                    </svg>
                                    Pickup in under 2 hours
                                </span>
                            </div>
                        </div>

                        {/* PEGBOARD VISUAL */}
                        <div
                            className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[22px] bg-[#F4B315]"
                            style={{
                                backgroundImage: 'radial-gradient(circle, rgb(0, 0, 0) 1.6px, transparent 1.6px)',
                                backgroundSize: '26px 26px',
                                backgroundPosition: '13px 13px',
                            }}
                        >
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <div className="mt-20 bg-[#1A141A] px-6 py-11 text-[#EFEAE0]">
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
                        <div>
                            <div className="[font-family:'Fraunces',serif] text-[clamp(28px,4vw,40px)] font-semibold text-[#F0C79B]">6,200+</div>
                            <div className="mt-1.5 text-sm text-[#C6D2CC]">items available to rent right now</div>
                        </div>
                        <div>
                            <div className="[font-family:'Fraunces',serif] text-[clamp(28px,4vw,40px)] font-semibold text-[#F0C79B]">18,400</div>
                            <div className="mt-1.5 text-sm text-[#C6D2CC]">rentals completed this year</div>
                        </div>
                        <div>
                            <div className="[font-family:'Fraunces',serif] text-[clamp(28px,4vw,40px)] font-semibold text-[#F0C79B]">₱2.1M</div>
                            <div className="mt-1.5 text-sm text-[#C6D2CC]">earned by item owners so far</div>
                        </div>
                    </div>
                </div>

                {/* FEATURES */}
                <section id="browse" className="px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12 max-w-xl">
                            <h2 className="[font-family:'Fraunces',serif] text-[clamp(26px,3.4vw,36px)] font-semibold">
                                Built for how renting actually works
                            </h2>
                            <p className="mt-3.5 leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">
                                Every part of BeeRent is designed around the two moments that matter most: finding
                                the right item fast, and handing it off without friction.
                            </p>
                        </div>

                        <   div className="grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
                            {[
                                {
                                    title: 'Search by what you need',
                                    body: "Look for \"power washer for a driveway\" or \"tent for 6 people\" — Yardshare matches you to nearby listings, not a rigid category tree.",
                                },
                                {
                                    title: 'Verified owners and renters',
                                    body: 'Every account is ID-checked before a first rental. You always know who you\'re meeting and handing your equipment to.',
                                },
                                {
                                    title: 'Book exact pickup windows',
                                    body: 'Pick a start and end time down to the hour. No back-and-forth messaging to figure out when someone\'s free.',
                                },
                                {
                                    title: 'Damage protection included',
                                    body: "Every booking includes coverage up to the item's listed value, so a scratch doesn't end in an argument.",
                                },
                                {
                                    title: 'Owners set their own price',
                                    body: 'You decide the daily, weekly, and deposit amount for anything you list — Yardshare only suggests a starting range.',
                                },
                                {
                                    title: 'One thread per rental',
                                    body: 'Messages, pickup details, and receipts live in a single conversation — nothing gets lost across texts and calls.',
                                },
                            ].map((f) => (
                                <div key={f.title} className="bg-[#F6F3EC] p-8 dark:bg-[#12201F]">
                                    <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                                    <p className="text-sm leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">{f.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section id="how" className="bg-[#EFE9DA] px-6 py-20 dark:bg-[#000000]">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12 max-w-xl">
                            <h2 className="[font-family:'Fraunces',serif] text-[clamp(26px,3.4vw,36px)] font-semibold">
                                Three steps, either side of the rental
                            </h2>
                            <p className="mt-3.5 leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">
                                Whether you're renting something for the weekend or listing your own gear to earn
                                from, the flow looks the same.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {[
                                { num: '01', title: 'Find or list an item', body: 'Search what\'s available near you, or take a few photos and set a price to list something you own.' },
                                { num: '02', title: 'Confirm the booking', body: 'Pick your dates, message the owner if you have questions, and pay securely — never in cash upfront.' },
                                { num: '03', title: 'Meet, use, return', body: 'Hand off in person at an agreed spot, use a quick photo checklist on both ends, and return on time.' },
                            ].map((s) => (
                                <div key={s.num} className="border-t-2 border-[#16211F] pt-2 dark:border-[#F2EFE6]">
                                    <div className="mb-3.5 [font-family:'Fraunces',serif] text-sm font-semibold text-[#B85F1C]">{s.num}</div>
                                    <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                                    <p className="text-sm leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section className="px-6 py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-12 max-w-xl">
                            <h2 className="[font-family:'Fraunces',serif] text-[clamp(26px,3.4vw,36px)] font-semibold">
                                Whatever the job calls for
                            </h2>
                            <p className="mt-3.5 leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">
                                Popular categories renters are searching for this week.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
                            {[
                                ['🔧', 'Power tools', '1,240 listings'],
                                ['🏕️', 'Camping & outdoor', '860 listings'],
                                ['🎥', 'Cameras & AV', '540 listings'],
                                ['🎉', 'Party & events', '710 listings'],
                                ['🚲', 'Bikes & mobility', '395 listings'],
                                ['🏗️', 'Heavy equipment', '180 listings'],
                            ].map(([emoji, name, count]) => (
                                <div key={name} className="rounded-2xl border border-black/10 bg-white p-5 text-center dark:border-white/10 dark:bg-[#16302E]">
                                    <span className="mb-2.5 block text-[28px]">{emoji}</span>
                                    <div className="text-sm font-semibold">{name}</div>
                                    <div className="mt-0.5 text-xs text-[#4B5450] dark:text-[#B9C2BD]">{count}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRUST */}
                <section id="safety" className="px-6 py-20">
                    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="rounded-[22px] bg-[#1F3A3B] p-11 text-[#EFEAE0]">
                            <p className="mb-5 [font-family:'Fraunces',serif] text-2xl italic leading-snug">
                                "I listed my pressure washer on a Tuesday and had it booked out three weekends in a
                                row by Friday. It practically pays for itself now."
                            </p>
                            <div className="text-sm text-[#C6D2CC]">— Marisol T., item owner since 2024</div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {[
                                { title: 'ID verification on every account', body: 'Owners and renters both confirm identity before their first transaction goes through.' },
                                { title: 'Payments held until pickup', body: 'Funds are only released to the owner once the renter confirms the item was as described.' },
                                { title: 'Real support if something goes wrong', body: 'A human resolution team steps in for late returns, damage disputes, or no-shows.' },
                            ].map((s) => (
                                <div key={s.title} className="flex gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFE9DA] dark:bg-[#0E1918]">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#B85F1C" strokeWidth="2" strokeLinecap="round" className="h-4 w-4">
                                            <path d="M9 12l2 2 4-4" />
                                            <circle cx="12" cy="12" r="9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-[15px] font-semibold">{s.title}</h3>
                                        <p className="text-sm leading-relaxed text-[#4B5450] dark:text-[#B9C2BD]">{s.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <div className="mx-6 mb-20 rounded-[22px] bg-[#16211F] px-8 py-16 text-center text-[#F6F3EC]">
                    <h2 className="mx-auto mb-4 max-w-[20ch] [font-family:'Fraunces',serif] text-[clamp(26px,3.6vw,38px)] font-semibold">
                        Your garage has something someone nearby needs today.
                    </h2>
                    <p className="mb-7 text-[#B9C2BD]">Listing takes about four minutes. Your first booking could happen by tonight.</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link
                            href={register()}
                            className="rounded-full bg-[#D9782E] px-6 py-3 text-sm font-semibold text-[#1B1006] hover:bg-[#B85F1C] hover:text-white"
                        >
                            List your first item
                        </Link>
                        <a
                            href="#browse"
                            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:border-white/50"
                        >
                            Browse rentals instead
                        </a>
                    </div>
                </div>

                {/* FOOTER */}
                <footer className="border-t border-black/10 px-6 py-10 dark:border-white/10">
                    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5 [font-family:'Fraunces',serif] text-base font-semibold">
                            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#1F3A3B]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#F6F3EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                    <path d="M3 7l9-4 9 4-9 4-9-4z" />
                                    <path d="M3 7v10l9 4 9-4V7" />
                                    <path d="M12 11v10" />
                                </svg>
                            </span>
                            BeeRent
                        </div>
                        <div className="flex gap-6 text-sm text-[#4B5450] dark:text-[#B9C2BD]">
                            <a href="#how" className="hover:text-inherit">How it works</a>
                            <a href="#safety" className="hover:text-inherit">Trust &amp; safety</a>
                            <a href="#" className="hover:text-inherit">Terms</a>
                            <a href="#" className="hover:text-inherit">Contact</a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
    