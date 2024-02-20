import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {Button} from "@/shadcn/ui/button";

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div>
                    Hello
                </div>
                <Link href={'/'}>

                <Button>
                    Click Me
                </Button>
                </Link>

            </div>
        </>
    );
}
