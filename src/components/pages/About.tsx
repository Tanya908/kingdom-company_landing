import Circles from "@/assets/icons/About.svg"

const About = () => {
    return (
        <section id="about" className="mt-16 mx-3 md:mx-6 mb-28">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-10">

                <div className="flex justify-start items-start gap-2 mb-8 md:mb-0 md:w-[30%] shrink-0">
                    <img src={Circles} alt="Circles icon" />
                    <p className="text-p2-semiBold text-[var(--color-black)]">
                        Purposeful Leadership
                    </p>
                </div>

                <div className="flex-1">
                    <h2 className="text-h2 text-[var(--color-gray)] w-full">
                        Kingdom & Company is a high-impact, two-day conference for entrepreneurs,
                        leaders, and creatives seeking to build business with Kingdom purpose.
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
