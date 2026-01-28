import { useState } from "react";
import { agendaBlocks } from "../../data/agendaBlocks";
import Close from "@/assets/icons/Close.svg";
import Open from "@/assets/icons/Open.svg";
import AgendaIcon from "@/assets/icons/AgendaIcon.svg";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";

type Props = {
    variant: keyof typeof agendaBlocks;
};

const AgendaBlock = ({ variant }: Props) => {
    const block = agendaBlocks[variant];
    const [isOpen, setIsOpen] = useState(variant === "kc2025");

    if (!block) return null;

    return (
        <div
            className={`py-8 px-2 lg:px-10 border-y mb-11 transition-colors duration-300 ${
                isOpen ? "bg-[var(--color-light-blue)]" : "bg-transparent"
            }`}
        >
            <div className="grid grid-cols-[50%_auto_auto] w-full items-center">
                    <h4 className="text-h4 text-[var(--color-black)] lg:order-1 w-full col-span-2
                                   lg:col-span-1 justify-self-start max-w-3/4"
                    >
                        {block.title}
                    </h4>

                    {block.agenda && (
                        <button
                            type="button"
                            onClick={() => setIsOpen(p => !p)}
                            aria-expanded={isOpen}
                            className="flex items-center justify-center aspect-square rounded-full bg-[var(--color-blue)]
                                       w-10 h-10 lg:order-3 lg:col-span-1 justify-self-end"
                        >
                            <img src={isOpen ? Close : Open} alt="Toggle agenda" className="w-4 h-4" />
                        </button>
                    )}

                <div className="flex items-center justify-center lg:justify-self-start
                                col-span-3 lg:col-span-1 lg:order-2 mt-4 "
                >
                    <p className="text-p1-semiBold text-center border border-[var(--color-gray)] py-2 px-8 rounded-lg">
                        {block.dateLabel}
                    </p>
                </div>
            </div>

            {block.agenda && isOpen && (
                <div className="px-2  mt-10">
                    <div className="flex flex-col lg:flex-row lg:justify-between">
                        <h4 className="text-p1-semiBold text-[var(--color-black)] lg:w-1/2">{block.agenda.title}</h4>
                        <p className="text-p1 lg:w-1/2">{block.agenda.description}</p>
                    </div>

                    {block.agenda.days.map(day => (
                        <div key={day.day}>
                            <div className="h-px w-full bg-[var(--color-gray)] mt-6"/>

                            <div className="flex flex-col lg:flex-row lg:items-center mt-6 ">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-4 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-orange)]">
                                            <img src={AgendaIcon} alt="icon" />
                                        </div>
                                        <h4 className="text-h4 text-[var(--color-black)]">{day.day}</h4>
                                    </div>

                                    <p className="text-p2 mt-1.5 mb-6 lg:mt-0 lg:mb-0">{day.date}</p>
                                </div>

                                <div className="flex items-center justify-start flex-1">
                                    <p className="text-p1-semiBold border py-2 px-4 rounded-lg">{day.doorsOpen}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 ">

                            {day.sessions.map(session => (
                                <div key={session.time} className="mt-6" >
                                    <p className="text-p1-semiBold text-[var(--color-black)]">{session.time}</p>
                                    <p className="text-p1-Bold uppercase">{session.title}</p>
                                    <p className="text-p2 mt-4">{session.description}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                        <a
                            href="#payment"
                            className="inline-flex items-center gap-2 py-3 px-5 border bg-[var(--color-blue)] rounded-[10px]
                                       text-p2 text-[var(--color-white)] whitespace-nowrap"
                        >
                            Register Now
                            <span><img src={ButtonIcon} alt="icon" /></span>
                        </a>
                </div>
            )}
            </div>
    );
};

export default AgendaBlock;
