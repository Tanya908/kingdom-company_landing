import Speaker from "../ui/Speaker.tsx";


const OurSpeakers = () => {

    return (
        <section id="speakers" className="section-x pb-12 md:pb-14 lg:pb-20">
           <div className="flex flex-col gap-6 md:gap-10 md:flex-row md:justify-between md:items-end mb-14">
               <h2 className="text-h2 text-[var(--color-black)] w-full md:max-w-sm lg:max-w-xl">Meet the Voices Behind the Vision</h2>
               <p className="text-p1 w-full md:w-[40%] text-left lg:text-justify">We’ve invited seasoned leaders, faith-driven founders, and powerful communicators to speak into your business and calling.</p>
           </div>

            <div className="flex flex-col gap-12">
                <Speaker name="PastorDanielMcKillop"/>
                <Speaker name="GalenWalters"/>
            </div>
        </section>
    )
}
export default OurSpeakers
