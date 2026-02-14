import DatesIcon from "@/assets/icons/DatesIcon.svg"
import DoorsOpenIcon from "@/assets/icons/DoorsOpenIcon.svg"
import LocationIcon from "@/assets/icons/LocationIcon.svg"
import ButtonIcon from "@/assets/icons/ButtonIcon.svg"
import MapboxMap from "./MapboxMap"

export const events = [
    {
        id: "kc-2025",
        title: "K//C 2025: The Founders’ Summit",
        coordinates: {
            latitude: 46.89204,
            longitude: -67.39830,
        },
        mapLabel: "Family Worship Center Plaster Rock",
        description:
            "This modern, welcoming facility offers a thoughtfully curated environment for conversation, worship, and connection — designed to inspire and equip from the moment you arrive.",
        info: [
            {
                id: "dates",
                icon: DatesIcon,
                title: "Dates",
                lines: [
                    { text: "December 4–5, 2025" },
                    { text: "Thursday & Friday" },
                ],
            },
            {
                id: "doors",
                icon: DoorsOpenIcon,
                title: "Doors Open",
                lines: [
                    { text: "11:00 a.m." },
                    { text: "Thursday, December 4" },
                ],
            },
            {
                id: "location",
                icon: LocationIcon,
                title: "Location",
                lines: [
                    { text: "Family Worship Center – New Building" },
                    { text: "482 Dominion Hill Road", gapAfter: true },
                    { text: "Plaster Rock, New Brunswick" },
                    { text: "E7G 2M1, Canada" },
                ],
            },
        ],
    },
    {
        id: "build-boldly",
        title: "Build Boldly: Vision, Value & the Venture",
        coordinates: {
            latitude: 43.64496365422798,
            longitude: -79.38346681715244,
        },
        mapLabel: "1141 Front St W",
        description:
            "A one-day intensive for visionaries who want to build with purpose. The Spring Forum blends strategy, faith, and connection in an intimate setting designed for real growth.",
        info: [
            {
                id: "dates",
                icon: DatesIcon,
                title: "Dates",
                lines: [
                    { text: "April 25, 2026" },
                    { text: "Wednesday & Thursday" },
                ],
            },
            {
                id: "doors",
                icon: DoorsOpenIcon,
                title: "Doors Open",
                lines: [
                    { text: "12:00 a.m." },
                    { text: "Wednesday, December 15" },
                ],
            },
            {
                id: "location",
                icon: LocationIcon,
                title: "Location",
                lines: [
                    { text: "The Glasshouse Conference Loft" },
                    { text: "1141 Front Street West", gapAfter: true },
                    { text: "Toronto, Ontario M5J 1Z1, Canada" },
                ],
            },
        ],
    },
]

const LocationCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {events.map((event) => {
                const topInfo = event.info.filter(
                    (item) => item.id === "dates" || item.id === "doors"
                )

                const locationInfo = event.info.find(
                    (item) => item.id === "location"
                )

                return (
                    <div
                        key={event.id}
                        className="w-full h-full flex flex-col group"
                    >
                        <div
                            className="flex flex-col flex-1 bg-[var(--color-light-blue)] rounded-xl py-8 px-4
                                       border border-transparent card-hover"
                        >
                            <h3 className="text-h3 text-[var(--color-black)] text-center mb-4 mx-auto w-full lg:w-96">{event.title}</h3>

                            <p className="text-p1 mb-8 text-center">{event.description}</p>

                            <div className="md:hidden h-px w-full bg-[var(--color-gray)] mb-6" />

                            <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 md:items-start min-h-24">
                                {topInfo.map((item) => (
                                    <div key={item.id} className="flex flex-col h-full">
                                        <div className="flex gap-3 items-center mb-2">
                                            <div className="flex items-center justify-center bg-[var(--color-orange)] rounded-full w-8 h-8 shrink-0">
                                                <img src={item.icon} alt={item.title} className="h-4 w-4" />
                                            </div>
                                            <span className="text-p1 text-[var(--color-black)]">{item.title}</span>
                                        </div>

                                        <div className="mt-auto">
                                            {item.lines.map((line, index) => (
                                                <p key={index} className="text-p1">{line.text}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px w-full bg-[var(--color-gray)] my-6" />

                            {locationInfo && (
                                <div className="mb-6">
                                    <div className="flex gap-3 items-center mb-2">
                                        <div className="flex items-center justify-center bg-[var(--color-orange)] rounded-full w-8 h-8">
                                            <img src={locationInfo.icon} alt={locationInfo.title} className="h-4 w-4"/>
                                        </div>
                                        <span className="text-p1 text-[var(--color-black)]">{locationInfo.title}</span>
                                    </div>

                                    {locationInfo.lines.map((line, index) => (
                                        <p
                                            key={index}
                                            className={`text-p1 ${line.gapAfter ? "mb-1" : ""}`}
                                        >{line.text}
                                        </p>
                                    ))}
                                </div>
                            )}
                            <a
                                href="#payment"
                                className="mt-auto flex justify-center items-center gap-2 py-3 px-5 bg-[var(--color-blue)]
                                           rounded-[10px] text-p2 text-white"
                            >
                                Register Now
                                <img src={ButtonIcon} alt="icon" />
                            </a>
                        </div>

                        <div
                            className="w-full h-[300px] rounded-xl overflow-hidden border border-transparent
                                       card-hover transition-colors"
                            onClick={() =>
                                window.open(
                                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        `${event.mapLabel}`
                                    )}`,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            <MapboxMap
                                latitude={event.coordinates.latitude}
                                longitude={event.coordinates.longitude}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LocationCard
