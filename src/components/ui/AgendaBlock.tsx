import { useState } from "react";
import { agendaBlocks } from "../../data/agendaBlocks";
import Close from "@/assets/icons/Close.svg";
import Open from "@/assets/icons/Open.svg";
import AgendaIcon from "@/assets/icons/AgendaIcon.svg";

type Props = {
    variant: keyof typeof agendaBlocks;
};

const AgendaBlock = ({ variant }: Props) => {
    const block = agendaBlocks[variant];
    const [isOpen, setIsOpen] = useState(variant === "kc2025");

    if (!block) return null;

    return (
        <div
            className={`py-8 px-2 border-y mb-11 transition-colors duration-300 ${
                isOpen ? "bg-[var(--color-light-blue)]" : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between gap-6 mb-5">
                <h4 className="text-h4 text-[var(--color-black)]">{block.title}</h4>

                {block.agenda && (
                    <button
                        onClick={() => setIsOpen(p => !p)}
                        aria-expanded={isOpen}
                        className="flex items-center justify-center aspect-square rounded-full bg-[var(--color-blue)] w-10 h-10"
                    >
                        <img src={isOpen ? Close : Open} alt="Toggle agenda" className="w-4 h-4" />
                    </button>
                )}
            </div>

            <div className="flex items-center justify-center border border-[var(--color-gray)] py-2 px-10 rounded-lg">
                <p className="text-p1-semiBold">{block.dateLabel}</p>
            </div>

            {block.agenda && isOpen && (
                <div className="px-2 mt-10">
                    <h4 className="text-p1-semiBold text-[var(--color-black)]">{block.agenda.title}</h4>
                    <p className="text-p1 mt-4">{block.agenda.description}</p>

                    {block.agenda.days.map(day => (
                        <div key={day.day}>
                            <div className="h-px w-full bg-[var(--color-gray)] mt-6" />

                            <div className="flex items-center gap-3 mt-6">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-orange)]">
                                    <img src={AgendaIcon} alt="Agenda day icon" />
                                </div>
                                <h4 className="text-h4 text-[var(--color-black)]">{day.day}</h4>
                            </div>

                            <p className="text-p2 mt-1.5 mb-6">{day.date}</p>

                            <div className="flex items-center justify-center border py-2 px-4 rounded-lg">
                                <p className="text-p1-semiBold">{day.doorsOpen}</p>
                            </div>

                            {day.sessions.map(session => (
                                <div key={session.time} className="mt-10">
                                    <p className="text-p1-semiBold text-[var(--color-black)]">{session.time}</p>
                                    <p className="text-p1-Bold uppercase">{session.title}</p>
                                    <p className="text-p2 mt-4">{session.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AgendaBlock;
