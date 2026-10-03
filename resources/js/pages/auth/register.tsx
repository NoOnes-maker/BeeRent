import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { store } from '@/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
            <Head title="Create your BeeRent account" />

            <div className="w-full max-w-md">
                {/* Logo + heading */}
                <div className="mb-8 flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-deep">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#F6F3EC" strokeWidth="2"
                             strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                            <path d="M3 7l9-4 9 4-9 4-9-4z" />
                            <path d="M3 7v10l9 4 9-4V7" />
                            <path d="M12 11v10" />
                        </svg>
                    </div>
                    <h1 className="font-display text-2xl font-semibold text-brand-ink dark:text-brand-cream">
                        Join BeeRent
                    </h1>
                </div>

                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-5">
                                {/* ─── First name ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="first_name">First name</Label>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="given-name"
                                        name="first_name"
                                        placeholder="Juan"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.first_name} />
                                </div>

                                {/* ─── Middle name (optional) ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="middle_name" className="text-brand-ink dark:text-brand-cream">
                                        Middle name <span className="text-gray-400">(optional)</span>
                                    </Label>
                                    <Input
                                        id="middle_name"
                                        type="text"
                                        tabIndex={2}
                                        autoComplete="additional-name"
                                        name="middle_name"
                                        placeholder="Santos"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.middle_name} />
                                </div>

                                {/* ─── Last name ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="last_name">Last name</Label>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        required
                                        tabIndex={3}
                                        autoComplete="family-name"
                                        name="last_name"
                                        placeholder="Dela Cruz"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.last_name} />
                                </div>

                                {/* ─── Birthdate ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="birthdate">
                                        Birthdate
                                    </Label>
                                    <Input
                                        id="birthdate"
                                        type="date"
                                        required
                                        tabIndex={4}
                                        autoComplete="bday"
                                        name="birthdate"
                                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                                            .toISOString()
                                            .split('T')[0]}
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.birthdate} />
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        You must be 18 or older to rent or list items on BeeRent.
                                    </p>
                                </div>

                                {/* ─── Email ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={4}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                {/* ─── Password ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <PasswordInput
                                        id="password"
                                        required
                                        tabIndex={5}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="At least 8 characters"
                                        passwordrules={passwordRules}
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                {/* ─── Confirm password ─── */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">Confirm password</Label>
                                    <PasswordInput
                                        id="password_confirmation"
                                        required
                                        tabIndex={6}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Repeat your password"
                                        passwordrules={passwordRules}
                                        className="rounded-xl border-black/15 bg-white focus:border-brand-accent focus:ring-brand-accent dark:border-white/20 dark:bg-[#0E1918]"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="mt-2 w-full rounded-xl bg-brand-accent py-6 text-sm font-semibold text-white hover:bg-[#B85F1C]"
                                    tabIndex={7}
                                    disabled={processing}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner className="mr-2" />}
                                    {processing ? 'Creating account…' : 'Create account'}
                                </Button>
                            </div>

                            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                By creating an account you agree to BeeRent's{' '}
                                <a href="#" className="underline hover:text-brand-accent">Terms</a> and{' '}
                                <a href="#" className="underline hover:text-brand-accent">Privacy Policy</a>.
                            </p>

                            <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                                Already have an account?{' '}
                                <TextLink href={login.url()} className="font-semibold text-brand-accent hover:underline" tabIndex={8}>
                                    Log in
                                </TextLink>
                            </p>
                        </>
                    )}
                </Form>
            </div>
        </div>
    );
}