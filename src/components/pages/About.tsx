import Circles from "@/assets/icons/About.svg"
import {  useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedWord from "../ui/AnimatedWord.tsx";

const text = `Kingdom & Company is a high-impact, two-day conference for entrepreneurs, leaders, 
              and creatives seeking to build business with Kingdom purpose.`;

const About = () => {

    const ref = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 30%", "end 40%"],
    });

    const words = text.split(" ");

    return (
        <section id="about" className="section-x section-y">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-10 pt-10">

                <div className="flex justify-start items-start gap-2 mb-8 md:mb-0 md:w-[30%] shrink-0">
                    <img src={Circles} alt="Circles icon" />
                    <p className="text-p2-semiBold text-[var(--color-black)]">
                        Purposeful Leadership
                    </p>
                </div>

                <div className="flex-1">
                    <h2 ref={ref} className="text-h2 w-full">
                        {words.map((word, i) => (
                            <AnimatedWord
                                key={i}
                                word={word}
                                index={i}
                                total={words.length}
                                progress={scrollYProgress}
                            />
                        ))}
                    </h2>

                    <p className="mt-8 text-h5">
                        You’ll hear from seasoned voices, engage in meaningful conversations, and join
                        a community driven by purpose, integrity, and lasting impact. You’ll leave
                        with more than just inspiration — you’ll gain strategic insight, clarity of
                        vision, and real connections that empower you to take action.
                    </p>
                </div>
            </div>
        </section>

    )
}
export default About
