import {Label} from "@/shadcn/ui/label";
import {Textarea} from "@/shadcn/ui/textarea";
import {Input} from "@/shadcn/ui/input";
import {Button} from "@/shadcn/ui/button";


export default function FormSection() {
    return <>

        <h3 className={'text-center text-2xl mb-1'}>Like what you see?</h3>
        <h3 className={'text-center text-2xl mb-5'}>Send me a message and let's talk!</h3>

        <div className={'w-3/5 bg-slate-200 mx-auto p-14 rounded-3xl'}>
            <form>
                <div className={'flex gap-5 mb-4'}>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" placeholder=""
                               className={'border-black'}/>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder=""
                               className={'border-black'}/>
                    </div>
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea placeholder="I want to hire you..." id="message"
                        className={'border-black mb-3'}
                    />
                </div>

                <Button className={'px-10 w-full rounded-3xl'}>Send to Pao</Button>

            </form>
        </div>
    </>
}
