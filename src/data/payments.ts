import type {Registration} from "../types/payments.ts";

export const Registrations: Record<string, Registration> = {
    StudentRegistration: {
        name:"Student Payments",
        price: "$99",
        description:"Student Payments is $99, aged 20 and down or in school" ,
        itemsList: [
            "Full access to all sessions (2 days)",
            "Printed event materials",
            "Includes Thursday & Friday lunch",
            "On-demand access to session recordings",
        ],
        details:"Young leaders ready to grow with clarity and purpose.",
    },
    CoupleRegistration: {
        name:"Couple Payments",
        price: "$299",
        description:"For attendees currently enrolled in school or under 25",
            itemsList: [
            "Full access for both registrants",
            "Shared printed materials and digital access",
            "Includes both lunches",
            "Ideal for spouses, co-founders, or leadership pairs",
        ],
        details:"Partners pursuing shared vision and alignment.",
    },
    SingleRegistration : {
        name:"Single Registration",
        price: "$199",
        description:"One ticket, full experience",
            itemsList: [
            "Access to every session and panel",
            "Printed schedule & resources",
            "Includes both lunches",
            "Lifetime access to recordings",
        ],
        details:"Solo attendees ready to build bold and connect deeply.",
    },
}satisfies Record<string, Registration>;



