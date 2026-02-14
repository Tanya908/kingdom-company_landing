import LocationCard from "../ui/LocationCard.tsx";

const Location = () => {
    return (
        <section className="section-x section-y">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14 md:mb-16">
                <h2 className="text-h1 text-[var(--color-black)] md:max-w-[60%] lg:max-w-[45%]">Location and schedule of events</h2>
                <p className="text-p1 md:max-w-[30%] text-justify">Step into a space designed for purpose, connection, and Kingdom impact.</p>
            </div>

            <LocationCard />
        </section>
    )
}
export default Location
