import Circles from "@/assets/icons/About.svg"
import Close from "@/assets/icons/Close.svg?react";
import Open from "@/assets/icons/Open.svg";
import {faqs} from "../../data/faqs"
import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    return (
        <section id="faq" className="section-x section-y grid grid-cols-1 gap-14
                                     md:grid-cols-[250px_auto] lg:grid-cols-[350px_auto]"
        >
            <div className="w-full">
                <h2 className="text-h1 text-[var(--color-black)] text-center md:text-left mb-8">FAQ</h2>
                <div className="flex justify-start items-start gap-2">
                    <img src={Circles} alt="Circles icon" className="mt-1"/>
                    <p className="text-p2">
                        Details that help you prepare for a meaningful, high-impact experience.
                    </p>
                </div>
            </div>

            <div>
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`py-6 px-4 border-l-2 mb-8 transition-all duration-300 ${
                                isOpen
                                    ? "border-[var(--color-orange)]"
                                    : "border-[var(--color-dark-gray)]"
                            }`}
                        >
                            <div className="flex justify-between items-center gap-4 cursor-pointer"
                                 onClick={() => setOpenIndex(isOpen ? null : index)}
                            >
                                <h4 className="text-h4 text-[var(--color-black)]">
                                    {faq.title}
                                </h4>

                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenIndex(isOpen ? null : index);
                                    }}
                                    aria-expanded={isOpen}
                                    className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-blue)] cursor-pointer"
                                >
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {isOpen ? (
                                            <Close className="w-4 h-4 text-[var(--color-white)]" />
                                        ) : (
                                            <img src={Open} alt="" aria-hidden className="w-4 h-4" />
                                        )}
                                    </motion.div>
                                </button>
                            </div>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-p1 mt-4 md:max-w-72 lg:max-w-2xl text-justify">
                                            {faq.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
export default Faq
