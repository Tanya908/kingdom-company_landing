
import DatesIcon from "@/assets/icons/DatesIcon.svg";
import DoorsOpenIcon from "@/assets/icons/DoorsOpenIcon.svg";
import LocationIcon from "@/assets/icons/LocationIcon.svg";
import type {EventLocation} from "../types/location.ts";

export const locations:EventLocation[] = [
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