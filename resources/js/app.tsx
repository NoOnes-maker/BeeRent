import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'BeeRent';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx'),
        ),

    setup({ el, App, props }) {
        // `el` is typed as HTMLElement | null in v1.
        // It's guaranteed to be non-null because Inertia only calls
        // setup() after finding #app in the DOM, but TypeScript doesn't
        // know that. Narrow the type or cast — this is the standard
        // fix for Inertia v1 + strict TS.
        if (!el) {
            throw new Error('Inertia root element #app not found');
        }

        createRoot(el).render(
            <TooltipProvider delayDuration={0}>
                <App {...props} />
                <Toaster />
            </TooltipProvider>,
        );
    },

    progress: { color: '#4B5563' },
});

initializeTheme();