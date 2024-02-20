import {Separator} from "@/shadcn/ui/separator";

export default function Footer() {
    return <>
        <Separator className={'border-2 mt-10'}/>

        <div className={'flex max-w-2xl p-4 mx-auto justify-evenly items-center'}>
            <h1 className={'text-lg'}>Pao Cormz</h1>
            <div className={'flex gap-2 items-center'}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                          d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"/>
                </svg>
                <h2>paocormz@gmail.com</h2>
            </div>
        </div>

    </>
}
