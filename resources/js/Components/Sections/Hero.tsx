import { motion } from "framer-motion"
export default function () {
    return <>
            <h1 className={'text-center mt-12 mb-4 text-4xl'}>Artwork That Comes to Life</h1>
            <p className={'w-3/5 text-center mx-auto'}>
                Experience the mesmerizing world of anime through
                the unique artistry of our talented artist. Each
                piece tells a story, evoking emotions and transporting
                you to another realm.
            </p>
        <div className={'mt-12 mb-20'}>
            <motion.div className={'flex gap-4 flex-nowrap flex-row-reverse mb-7'}
                        initial={{opacity: 0, x: 400}}
                        whileInView={{opacity: 1, x:50}}
                        animate={{x: 50, opacity:1}}
                        transition={{duration: 3}}
                        viewport={{once: true}}
            >
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
            </motion.div>
            <motion.div className={'flex gap-4 flex-nowrap'}
                        initial={{opacity: 0, x: -400}}
                        whileInView={{opacity: 1, x: -50}}
                        animate={{x: -50, opacity:1}}
                        transition={{duration: 3}}
                        viewport={{once: true}}
            >
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
                <div className={'bg-slate-400 min-w-72 min-h-52 rounded-xl'}></div>
            </motion.div>
        </div>
    </>
}
// classes for button - bg-blue-500 text-white text-xl rounded-xl border none p-2 cursor-pointer
