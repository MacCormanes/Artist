import {Link} from "@inertiajs/react";
import {Button} from "@/shadcn/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shadcn/ui/sheet"


export default function () {
    return <>

        <div className={'flex justify-between md:mx-16 mx-8 p-4 items-baseline'}>

            {/*Logo / Name*/}
            <h1 className={'text-xl'}>Pao Cormz</h1>

            {/*Navigation Links*/}
            <div className={'hidden md:block'}>
                <Link href={'/'}>
                    <Button variant={'outline'} className='border-black rounded-none border-2 border-r-0 rounded-l-full w-[120px] '>
                        Home
                    </Button>
                </Link>
                <Link href={'/'}>
                    <Button variant={'outline'} className='border-black rounded-none border-2 border-r-0 w-[120px] '>
                        Gallery
                    </Button>
                </Link>
                <Link href={'/'}>
                    <Button variant={'outline'} className='border-black rounded-none border-2 border-r-0 w-[120px] '>
                        Commissions
                    </Button>
                </Link>
                <Link href={'/'}>
                    <Button variant={'outline'} className='border-black rounded-none border-r-0 rounded-r-full mr-1 border-2 w-[120px]  '>
                        Contact
                    </Button>
                </Link>
            </div>

            {/*Sheet panel for mobile views*/}
            <div className={'md:hidden'}>
                <Sheet>
                    <SheetTrigger>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                  d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle>Navigation Menu</SheetTitle>
                        <Link href={'/'}>
                            <Button variant={'outline'} className='w-full border-0 '>
                                Home
                            </Button>
                        </Link>
                        <Link href={'/'}>
                            <Button variant={'outline'} className='w-full border-0 '>
                                Gallery
                            </Button>
                        </Link>
                        <Link href={'/'}>
                            <Button variant={'outline'} className='w-full border-0 '>
                                Commissions
                            </Button>
                        </Link>
                        <Link href={'/'}>
                            <Button variant={'outline'} className='w-full border-0 '>
                                Contact
                            </Button>
                        </Link>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

    </>
}
