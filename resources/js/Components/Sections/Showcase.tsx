import {motion, MotionConfig} from "framer-motion";
import {randomInt} from "node:crypto";
import AnimateOnScroll from "@/Components/Animations/AnimateOnScroll";


export default function Showcase(){
    function getRandomNumber() {
        return Math.random()+Math.random()+Math.random()+Math.random()
    }

    return <>
        <h2 className={'text-center mt-12 mb-4 text-3xl'}>Art Showcase</h2>
        <p className={'w-3/5 text-center mx-auto'}>Discover my diverse range of artwork</p>

        {/*Gallery*/}

            <div className={'mt-12 mb-20 mx-7 flex gap-4'}>
                <div className={'flex-col flex-nowrap mb-7 w-1/3 space-y-4 mt-12'}>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-72 rounded-xl'} ></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-96 rounded-xl'} ></div>
                    </AnimateOnScroll>
                </div>
                <div className={'flex-col flex-nowrap mb-7 w-1/3 space-y-4'}>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-96 rounded-xl'}></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-72 rounded-xl'} ></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'} ></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'} ></div>
                    </AnimateOnScroll>
                </div>
                <div className={'flex-col flex-nowrap mb-7 w-1/3 space-y-4 mt-20'} >
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-72 rounded-xl'}></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-72 rounded-xl'} ></div>
                    </AnimateOnScroll>
                    <AnimateOnScroll>
                        <div className={'bg-slate-400 min-w-72 min-h-96 rounded-xl'} ></div>
                    </AnimateOnScroll>
                </div>

            </div>
    </>
}
