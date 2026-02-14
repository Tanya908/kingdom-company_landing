import MapboxMap from "./MapboxMap"
import {locations} from "../../data/location.ts";
import Button from "./Button.tsx";

const LocationCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {locations .map((event) => {
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
                            <h3 className="text-h3 text-[var(--color-black)] text-left md:text-center mb-4 mx-auto w-full lg:w-96">{event.title}</h3>

                            <p className="text-p1 mb-8 text-left md:text-center">{event.description}</p>

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

                            <div className="hidden md:flex h-px w-full bg-[var(--color-gray)] my-6" />

                            {locationInfo && (
                                <div className="mb-8 mt-6 md:mt-0">
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

                            <Button href="#payment" className="mt-auto">Register Now</Button>
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
