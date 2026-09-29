import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { about } from '@/routes';

export default function About() {
    return (
        <>
            <Head title="About" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                {/* first div */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                    {/* first box */}
                    <div className="relative overflow-hidden rounded-xl border-sidebar-border/60 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full" />


                        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">

                        <img src="https://accabuyog.com/home/wp-content/uploads/2023/02/ACC-logo-1-5-1536x1536.png" alt="Acc Logo"
                        className="mb-4 h-10 w-40 rounded-full object-cover md:h-44 md:w-44"
                        />
                        <h3 className="text-center text-lg font-bold tracking-tight">
                            ACC OFFICIAL SEAL
                        </h3>
                        <p className="mt-1 text-center text-sm text-muted-foreground">
                            Abuyog Community College
                        </p>

                        </div>

                    </div>

                    {/* second box */}
                    <div className="relative overflow-hidden rounded-xl border-sidebar-border/60 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full" />


                        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">

                        <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/transparency-seal-160x160.png" alt="transparancy seal"
                        className="mb-4 h-10 w-40 rounded-full object-cover md:h-44 md:w-44"
                        />
                        <h3 className="text-center text-lg font-bold tracking-tight">
                            TRANSPARENCY SEAL
                        </h3>
                        <p className="mt-1 text-center text-sm text-muted-foreground">
                            Goverment Transparency
                        </p>

                        </div>

                    </div>
                        
                    

                    {/* third box */}
                    <div className="relative overflow-hidden rounded-xl border-sidebar-border/60 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full" />


                        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">

                        <img src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/foi-logo-160x160.png" alt="Freedom of INformation"
                        className="mb-4 h-10 w-40 rounded-full object-cover md:h-48 md:w-48"
                        />
                        <h3 className="text-center text-lg font-bold tracking-tight">
                            FREEDOM OF INFORMATION
                        </h3>
                        <p className="mt-1 text-center text-sm text-muted-foreground">
                            FOI Philippines
                        </p>

                        </div>

                    </div>
                        
                    
                </div> 
                
                {/* end of first div */}

                <div className="grid auto-rows-min gap-4 md:grid-cols-2 relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border p-6">
                    <PlaceholderPattern className="absolute inset-0 size-full" />

                        <div className="flex justify-center items-center relative aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <div className="space-y-6 px-5 py-5">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">
                                        Acc Offical Seal
                                    </h2>

                                    <div className="space-y-4 text-sm leading-7 text-justify text-muted-foreground">
                                        <p>
                                            Since its founding on 1979, <strong>Abuyog Community College</strong> has striven to provide students the knowledge, values, skills, and community involvement to enable them to excel as the forefront manpower of community and of the global arena. ACC aims for the creation of a scholastic environment composed of individuals that are grounded in faith, integrity, respect and trust.
                                        </p>

                                        <p>
                                            With today’s fast-paced global progress, ACC promotes and fosters the acquisition of attributes that will empower students to triumph against ignorance and mediocrity and contribute positively to nation building.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl front-semibold">
                                            The School LOGO:
                                        </h3>
                                    </div>
                                    <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
                                        <li>
                                            <strong className="text-forground">Laurel Wreath</strong> (Green) – a symbol of victory and honor. It symbolizes ACC’s triumph against ignorance and success in the search for truth and knowledge.
                                        </li>
                                        <li>
                                            <strong className="text-forground">Torch</strong> – an emblem of enlightenment and hope. It symbolizes the vision of ACC to provide light as a source of enlightenment to all students.
                                        </li>
                                        <li>
                                            <strong className="text-forground">Scrolls</strong> – an emblem of wisdom. It symbolizes translating academic work into meaningful presentations of expertise and scholarly work.
                                        </li>
                                        <li>
                                            <strong className="text-forground">Quill Pen and Ink</strong> – an instrument for writing which symbolizes freedom and independence to soar and be able to look at things from a wider perspective.
                                        </li>
                                        <li>
                                            <strong className="text-forground">Bee</strong> – symbol for the Municipality of Abuyog, and;
                                        </li>
                                        <li>
                                            <strong className="text-forground">1979</strong> the year the college was established.
                                        </li>

                                    </ul>
                                        
                                </div> 

                            </div>

                        </div>

                    {/* videos start */}

                    <div className="space-y-6">

                    <div className="border-b border-sidebar-border/70 dark:border-sidebar-border">
                        
                        <div className="border-b border-sidebar-border/70 px-5 py-4 dark:border-sidebar-border">

                        <h3 className="text-lg font-semibold">
                            About abuyog Community College
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Lear more about ACC and it's mission
                        </p>
                         </div>
                    
                    <div className="relative aspect-video">

                        <iframe className="absolute inset-0 w-full h-full z-10"
                        src="https://www.youtube.com/embed/_dHiZW9oDdw"
                        title="Acc Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        >
                        </iframe>
                    </div>

                    </div>
                        {/* end of 1st video */}

                        
                    <div className="border-b border-sidebar-border/70 px-5 py-4 dark:border-sidebar-border">
                        <h3 className="text-lg font-semibold">
                            About abuyog Community College
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Discover more about it's institution.
                        </p>
                         </div>
                    
                    <div className="relative aspect-video">
                        <iframe className="absolute inset-0 w-full h-full z-10"
                        src="https://www.youtube.com/embed/mCBtWIoT8ts?list=RDmCBtWIoT8ts"
                        title="Acc Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        >
                        </iframe>
                    </div>

                    </div>

                </div>
            </div>
        </>
    );
}

About.layout = {
    breadcrumbs: [
        {
            title: 'About',
            href: about(),
        },
    ],
};