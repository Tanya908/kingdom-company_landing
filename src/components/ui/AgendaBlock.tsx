import { useState } from "react";
import { agendaBlocks } from "../../data/agendaBlocks";
import Close from "@/assets/icons/Close.svg?react";
import Open from "@/assets/icons/Open.svg";
import AgendaIcon from "@/assets/icons/AgendaIcon.svg";
import Button from "./Button.tsx";

type Props = {
    variant: keyof typeof agendaBlocks;
};

const AgendaBlock = ({ variant }: Props) => {
    const block = agendaBlocks[variant];
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if (block.agenda) setIsOpen(prev => !prev);
    };

    if (!block) return null;

    return (
        <div
            className={`py-8 px-2 lg:px-10 border-y mb-11 transition-colors duration-300 
                        ${isOpen ? "bg-[var(--color-light-blue)]" : "bg-transparent"}`
                      }
        >
            <div className="grid grid-cols-[50%_auto_auto] w-full items-center cursor-pointer" onClick={() => block.agenda && setIsOpen(p => !p)}>
                    <h4 className="text-h4 text-[var(--color-black)] lg:order-1 w-full col-span-2 lg:col-span-1 justify-self-start">
                        {block.title}
                    </h4>

                {block.agenda && (
                    <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggle();
                        }}
                        className="flex items-center justify-center aspect-square rounded-full bg-[var(--color-blue)]
                                   cursor-pointer w-10 h-10 lg:order-3 lg:col-span-1 justify-self-end"
                    >
                        {isOpen ? (
                            <Close className="w-4 h-4 text-white" />
                        ) : (
                            <img src={Open} alt="" aria-hidden className="w-4 h-4" />
                        )}
                    </button>
                )}

                <div className="flex items-center text-center lg:justify-self-start
                                col-span-3 lg:col-span-1 lg:order-2 mt-4"
                >
                    <p className="w-full text-p1-semiBold border border-[var(--color-gray)] py-2 px-4 rounded-lg">
                        {block.dateLabel}
                    </p>
                </div>
            </div>

            {block.agenda && isOpen && (
                <div className="px-2 mt-10">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
                        <div className="lg:w-1/2">
                            <h4 className="text-p1-semiBold text-[var(--color-black)]">{block.agenda.title}</h4>
                        </div>

                        <div className="lg:w-1/2 mt-6 lg:mt-0">
                            <p className="text-p1 max-w-2xl lg:max-w-lg">{block.agenda.description}</p>
                        </div>
                    </div>

                    {block.agenda.days.map(day => (
                        <div key={day.day}>
                            <div className="h-px w-full bg-[var(--color-gray)] my-8"/>

                            <div className="flex flex-col lg:flex-row lg:items-center">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6 flex-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-orange)]">
                                            <img src={AgendaIcon} alt="icon" />
                                        </div>
                                        <h4 className="text-h4 text-[var(--color-black)] max-w-lg">{day.day}</h4>
                                    </div>

                                    <p className="text-p2 mt-1.5 mb-6 lg:mt-0 lg:mb-0">{day.date}</p>
                                </div>

                                <div className="flex items-center justify-start flex-1">
                                    <p className="text-p1-semiBold border py-2 px-4 rounded-lg max-w-lg">{day.doorsOpen}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-2">
                                {day.sessions.map(session => (
                                    <div key={session.time} className="">
                                        <p className="text-p1-semiBold text-[var(--color-black)] mb-2 mt-6 max-w-lg">{session.time}</p>
                                        <p className="text-p1-Bold mb-4 uppercase max-w-lg">{session.title}</p>
                                        <p className="text-p2 mt-4 max-w-lg">{session.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <Button href="#payment" className="inline-flex w-full md:w-auto mt-6 whitespace-nowrap">Register Now</Button>
                </div>
            )}
            </div>
    );
};

export default AgendaBlock;
