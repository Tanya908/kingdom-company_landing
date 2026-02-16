import MainLogo from "@/assets/MainLogo.svg?react"
import { useState } from "react"
import BurgerButton from "../ui/BurgerButton.tsx"
import {navLinks} from "../../data/navigation.ts";
import Button from "../ui/Button.tsx";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="flex flex-col bg-[var(--color-light-blue)]">
            {isOpen && (
                <div className="fixed inset-0 bg-[var(--color-light-blue)] h-[40%] z-40 lg:hidden" />
            )}
            <div className="fixed top-0 left-0 right-0 z-50 mt-8 mx-2 md:mx-20 flex justify-between items-center
                            py-3 px-2 md:px-8 border border-[var(--color-gray)] rounded-lg bg-[var(--color-white)]"
            >
                <a href="#hero" className="w-28 md:w-40 cursor-pointer">
                    <MainLogo className="text-[var(--color-black)]"/>
                </a>

                <ul className="hidden lg:flex gap-6 items-center justify-center">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a className="text-p1-semiBold link-hover" href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-center gap-4">
                    <Button href="#payment" variant="secondary" className="hidden md:flex justify-center items-center">Register Now</Button>

                    <div className="lg:hidden">
                        <BurgerButton isOpen={isOpen}
                                      onClick={() => setIsOpen((prev) => !prev)}
                        />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="fixed inset-0 h-screen z-40 lg:hidden bg-[var(--color-light-blue)] pt-24 md:pt-0 px-2
                                    md:fixed md:inset-auto md:top-[120px] md:left-0 md:right-0 md:h-auto"
                    >
                        <ul className="my-14 flex flex-col gap-6 items-center justify-center">
                            {navLinks.map((item) => (
                                <li key={item.id}>
                                    <a className="text-p1-semiBold link-hover" href={item.url} onClick={() => setIsOpen(false)}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="h-px w-full bg-[var(--color-gray)] mb-8"></div>

                        <Button href="#payment" variant="secondary" className="flex md:hidden justify-center items-center">
                            Register Now
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
