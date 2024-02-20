import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Sections/Hero";
import Showcase from "@/Components/Sections/Showcase";
import Hero2 from "@/Components/Sections/Hero2";
import FormSection from "@/Components/Sections/FormSection";
import Footer from "@/Components/Sections/Footer";


export default function Home() {
    return <>
        <div className={'max-w-[1200px] mx-auto bg-slate-100 overflow-hidden'}>

            <Navbar />

            <Hero />

            <Showcase />

            <Hero2 />

            <FormSection />

            <Footer />
        </div>
    </>
}
