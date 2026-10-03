import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasskeyVerify from '@/components/passkey-verify';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
            <Head title="Log in · BeeRent" />

            <PasskeyVerify />

            <div className="w-full max-w-md">
                {/* ─── Logo ─── */}
                <div className="mb-8 flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-deep">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#F6F3EC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <path d="M3 7l9-4 9 4-9 4-9-4z" />
                            <path d="M3 7v10l9 4 9-4V7" />
                            <path d="M12 11v10" />
                        </svg>
                    </div>
                    <h1 className="font-display text-2xl font-semibold text-brand-ink dark:text-brand-cream">
                        Welcome back to BeeRent
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Log in to rent or list items in your neighborhood
                    </p>
                </div>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                {/* ─── Email ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email" className="text-brand-ink dark:text-brand-cream">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* ─── Password ─── */}
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password" className="text-brand-ink dark:text-brand-cream">
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href={request()}
                                                className="text-sm text-brand-accent hover:underline"
                                                tabIndex={5}
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="••••••••"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* ─── Remember me ─── */}
                                <div className="flex items-center gap-3">
                                    <Checkbox id="remember" name="remember" tabIndex={3} />
                                    <Label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-300">
                                        Remember me for 30 days
                                    </Label>
                                </div>

                                {/* ─── Submit ─── */}
                                <Button
                                    type="submit"
                                    className="mt-2 w-full rounded-xl bg-brand-accent py-6 text-sm font-semibold text-white hover:bg-[#B85F1C]"
                                    tabIndex={4}
                                    disabled={processing}
                                    data-test="login-button"
                                >
                                    {processing && <Spinner className="mr-2" />}
                                    {processing ? 'Logging in…' : 'Log in'}
                                </Button>
                            </div>

                            {/* ─── Register link ─── */}
                            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                                Don't have an account?{' '}
                                <TextLink
                                    href={register.url()}
                                    className="font-semibold text-brand-accent hover:underline"
                                    tabIndex={5}
                                >
                                    Sign up
                                </TextLink>
                            </p>
                        </>
                    )}
                </Form>

                {/* ─── Status ─── */}
                {status && (
                    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-3 text-center text-sm font-medium text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
}