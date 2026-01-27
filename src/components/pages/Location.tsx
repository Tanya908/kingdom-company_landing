import LocationCard from "../ui/LocationCard.tsx";

const Location = () => {
    return (
        <section className="mx-3 md:mx-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between  ">
                <h2 className="text-h1 text-[var(--color-black)] lg:w-3/5 ">Location and schedule of events</h2>
                <p className="text-p1 lg:w-3/12 ">Step into a space designed for purpose, connection, and Kingdom impact.</p>
            </div>

            <LocationCard />
        </section>
    )
}
export default Location
