import ForPartnersImg from "@/assets/ForPartners.jpg"
import {useState} from "react";
import PopUp from "../ui/PopUp.tsx";
import Button from "../ui/Button.tsx";

const ForPartners = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="section-x section-y">
                <div className="px-2 pt-10 md:pt-16 bg-[var(--color-light-blue)] rounded-xl">
                    <div className="flex flex-col justify-center items-center md:w-[80%] max-w-[560px] mx-auto">
                        <h2 className="text-h1 text-[var(--color-black)] text-center">Want to be a Kingdom Partner?</h2>
                        <p className="text-p1 mt-4 text-center">We’re building for the long term. If your company or brand is interested in sponsorship or aligning with this movement, we’d love to connect.</p>

                        <Button onClick={() => setIsOpen(true)}
                                className="mt-6 mb-8 md:mb-16 w-full"
                        >
                            Become a Sponsor
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <img src={ForPartnersImg} alt="Kingdom & Company partners and leadership gathering"
                         className="rounded-xl aspect-auto w-full max-h-[600px] object-cover"
                    />
                    <div className="rounded-xl gradient" />
                    <div className="absolute bottom-4 inset-x-0 flex justify-center">
                        <p className="text-[var(--color-white)] text-p1 text-center">
                            Where faith and leadership meet
                        </p>
                    </div>
                </div>
            </section>

            {isOpen && <PopUp onClose={() => setIsOpen(false)} />}</>
    )
}
export default ForPartners
