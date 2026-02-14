import ButtonIcon from "@/assets/icons/ButtonIcon.svg?react";
import HeroImg from "@/assets/Hero.jpg"
import ScrollDown from "@/assets/icons/ScrollDown.svg"


const Hero = () => {
    return (
        <section id="hero" className="section-x pt-32 md:pt-40 bg-[var(--color-light-blue)]">
            <div className="w-full border-y mb-6 md:border-0">
                <p className="text-center text-p3 py-2 md:w-max md:px-8 md:py-2 md:border-y md:mx-auto">
                    Where Faith Meets Strategy
                </p>
            </div>

            <h1 className="text-title text-[var(--color-black)] mb-6 w-full md:text-center md:mx-auto lg:w-3/4">Lead with Vision. Scale with Integrity.</h1>
            <p className="text-h5 mb-10 md:text-center md:mx-auto lg:w-4/5">Experience for entrepreneurs and leaders who want to build with excellence, lead with integrity, and align their business with something greater.</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                <a
                    href="#payment"
                    className="flex  justify-center items-center gap-2 py-3 px-5 border
                                   bg-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-white)] "
                >
                    Register Now <span><ButtonIcon className="text-[var(--color-white)]"/></span>
                </a>

                <a
                    href="#payment"
                    className="flex  justify-center items-center gap-2 py-3 px-5 border
                                   border-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-blue)] "
                >
                    Explore the Vision <span><ButtonIcon className="text-[var(--color-blue)]"/></span>
                </a>
            </div>

            <div className="mt-12 -mx-3 md:-mx-10 lg:-mx-20 relative">
                <img
                    src={HeroImg} alt="Event audience and speaker"
                    className="w-full aspect-square md:aspect-auto object-cover block"
                />

                <div className="gradient" />

                <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row md:justify-between ">
                    <p className="text-[var(--color-white)] text-p1 mb-4"> Where Faith Meets Strategy</p>

                    <div className="flex items-center gap-4">
                        <p className="text-[var(--color-white)] text-p1">Scroll down</p>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <img src={ScrollDown} alt="scroll down" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Hero
