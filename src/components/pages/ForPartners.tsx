import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import ForPartnersImg from "@/assets/ForPartners.jpg"
import {useState} from "react";
import PopUp from "../ui/PopUp.tsx";

const ForPartners = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="px-3 md:px-10 lg:px-16 mb-20">
                <div className="px-2 py-8 bg-[var(--color-light-blue)] rounded-xl">
                    <div className="flex flex-col justify-center items-center md:w-[80%] max-w-[560px] mx-auto">
                        <h2 className="text-h1 text-[var(--color-black)] text-center">Want to be a Kingdom Partner?</h2>
                        <p className="text-p1 mt-4 text-center">We’re building for the long term. If your company or brand is interested in sponsorship or aligning with this movement, we’d love to connect.</p>

                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex justify-center items-center gap-2 py-3 px-5 rounded-[10px]
                                   bg-[var(--color-blue)] text-p2 text-[var(--color-white)] cursor-pointer border-none mt-6 w-full"
                        >
                            Become a Sponsor<span><img src={ButtonIcon} alt="icon" /></span>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img src={ForPartnersImg} alt="Kingdom & Company partners and leadership gathering"
                         className="rounded-xl aspect-auto w-full max-h-[600px] object-cover"
                    />
                    <div className="rounded-xl absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(28,32,25,0.80)_0%,rgba(28,32,25,0.00)_100%)]" />
                    <div className="absolute bottom-2 inset-x-0 flex justify-center">
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
