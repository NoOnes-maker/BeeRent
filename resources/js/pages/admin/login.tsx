import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function AdminLogin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/admin/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Admin Login — BeeRent">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen items-center justify-center bg-[#F6F3EC] px-6 py-16 [font-family:'Work_Sans',system-ui,sans-serif] text-[#16211F] dark:bg-[#0E1918] dark:text-[#F2EFE6]">
                <div className="w-full max-w-md">
                    {/* LOGO */}
                    <div className="mb-8 flex flex-col items-center">
                        <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#1F3A3B]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#F6F3EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                                <path d="M3 7v10l9 4 9-4V7" />
                                <path d="M12 11v10" />
                            </svg>
                        </span>
                        <h1 className="[font-family:'Fraunces',serif] text-2xl font-semibold tracking-tight">
                            BeeRent Admin
                        </h1>
                        <p className="mt-2 text-sm text-[#4B5450] dark:text-[#B9C2BD]">
                            Sign in to manage the platform
                        </p>
                    </div>

                    {/* CARD */}
                    <div className="rounded-[22px] border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#12201F]">
                        <form onSubmit={submit} className="space-y-5">
                            {/* EMAIL */}
                            <div>
                                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="admin@beerent.test"
                                    autoComplete="username"
                                    autoFocus
                                    className="w-full rounded-xl border border-black/15 bg-[#F6F3EC] px-4 py-3 text-sm outline-none transition focus:border-[#1F3A3B] focus:ring-2 focus:ring-[#1F3A3B]/20 dark:border-white/15 dark:bg-[#0E1918] dark:focus:border-[#F0C79B]"
                                />
                                {errors.email && (
                                    <p className="mt-1.5 text-xs text-[#B85F1C]">{errors.email}</p>
                                )}
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <label htmlFor="password" className="mb-1.5 block text-sm font-semibold">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                    className="w-full rounded-xl border border-black/15 bg-[#F6F3EC] px-4 py-3 text-sm outline-none transition focus:border-[#1F3A3B] focus:ring-2 focus:ring-[#1F3A3B]/20 dark:border-white/15 dark:bg-[#0E1918] dark:focus:border-[#F0C79B]"
                                />
                                {errors.password && (
                                    <p className="mt-1.5 text-xs text-[#B85F1C]">{errors.password}</p>
                                )}
                            </div>

                            {/* REMEMBER */}
                            <label className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 rounded border-black/20 text-[#1F3A3B] focus:ring-[#1F3A3B]"
                                />
                                Remember me
                            </label>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-full bg-[#D9782E] px-6 py-3 text-sm font-semibold text-[#1B1006] transition hover:bg-[#B85F1C] hover:text-white disabled:opacity-60"
                            >
                                {processing ? 'Signing in…' : 'Log in'}
                            </button>
                        </form>
                    </div>

                    {/* FOOTER LINK */}
                    <p className="mt-6 text-center text-sm text-[#4B5450] dark:text-[#B9C2BD]">
                        Not an admin?{' '}
                        <Link href="/" className="font-semibold text-[#B85F1C] hover:underline">
                            Back to home
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}