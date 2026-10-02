import { Head, Link, usePage } from '@inertiajs/react';

export default function AdminDashboard() {
    const { auth } = usePage().props as any;

    return (
        <>
            <Head title="Admin Dashboard" />

            <div className="p-6">
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

                {auth?.user ? (
                    <p className="mt-2 text-gray-600">
                        Signed in as <strong>{auth.user.name}</strong> ({auth.user.email})
                    </p>
                ) : (
                    <p className="mt-2 text-gray-600">Not signed in.</p>
                )}

                <div className="mt-6">
                    <Link href="/" className="text-blue-600 underline hover:text-blue-800">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </>
    );
}