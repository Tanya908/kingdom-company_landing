import {useState} from "react";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import {Speakers} from "../../data/speakers.ts";
import type {SpeakerName} from "../../types/speaker.ts";

type SpeakerProps = {
    name: SpeakerName;
};

const Speaker = ({ name }: SpeakerProps) => {
const [isOpen, setIsOpen] = useState(false);
    const speaker = Speakers[name];
    return (
        <div className="py-8 px-2 border-y grid grid-cols-1 md:grid-cols-[30%_1fr] lg:grid-cols-[40%_1fr] md:gap-8">
            <div className="flex flex-col lg:flex-row lg:gap-10 h-full mb-8">
                <img src={speaker.img} alt="Pastor Daniel McKillop" className="rounded-2xl w-1/2 self-start"/>
                <div>
                    <h3 className="text-p1-semiBold text-[var(--color-black)] mt-6 lg:mt-0 mb-4">{speaker.name}</h3>
                    <p className="text-p2">{speaker.role}</p>
                </div>
            </div>

            <div className="flex flex-col md:border-l border-l-0 pl-0 md:pl-8">
                <div className={`${isOpen ? "border-t md:border-t-0" : ""}`}>
                    <p className={`text-h6 mb-4 mt-8 md:mt-0 ${isOpen ? "" : "hidden md:line-clamp-6 lg:line-clamp-4"}`}>
                        {speaker.description.intro}
                    </p>

                    {isOpen && (
                        <p className="text-h6 mb-8">{speaker.description.details}</p>
                    )}
                </div>

                <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex justify-center items-center gap-2 py-3 px-5 border border-[var(--color-blue)] rounded-[10px]
                               text-p2 text-[var(--color-blue)] md:w-fit md:mt-auto"
                >
                    {isOpen ? "Read less" : "Read more"}
                    <span><img src={ButtonIcon} alt="" aria-hidden /></span>
                </button>
            </div>
        </div>
    )
}
export default Speaker
