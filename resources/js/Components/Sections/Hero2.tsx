import {Button} from "@/shadcn/ui/button";

export default function Hero2() {
    return <>
        <div className={'mt-36 mb-20 max-w-5xl bg-slate-300 h-72 mx-auto rounded-3xl'}>
            <h2 className={'text-center pt-20 text-2xl'}>Discover my art and passion</h2>
            <p className={'text-center text-sm pt-2'}>Explore a collection of all my projects</p>
            <div className={'flex gap-2 justify-center mt-4'}>
                <Button className={'bg-slate-600 hover:bg-slate-400 transition duration-500'}>Browse</Button>
                <Button variant={'outline'} className={'bg-transparent border-2 transition duration-500'}>Contact</Button>
            </div>
        </div>
    </>
}
