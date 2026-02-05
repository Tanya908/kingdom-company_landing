import Speaker from "../ui/Speaker.tsx";


const OurSpeakers = () => {

    return (
        <section id="speakers" className="mt-20 mx-3 md:mx-10 lg:mx-16">
           <div className="flex flex-col gap-10 md:flex-row md:justify-between mb-14">
               <h2 className="text-h2 text-[var(--color-black)] w-full md:w-[60%]">Meet the Voices Behind the Vision</h2>
               <p className="text-p1 w-full md:w-[30%]">We’ve invited seasoned leaders, faith-driven founders, and powerful communicators to speak into your business and calling.</p>
           </div>

            <div className="flex flex-col gap-10">
                <Speaker name="PastorDanielMcKillop"/>
                <Speaker name="GalenWalters"/>
            </div>
        </section>
    )
}
export default OurSpeakers
