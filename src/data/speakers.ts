import SpeakerDaniel from "@/assets/SpeakerDaniel.jpg"
import SpeakerGalen from "@/assets/SpeakerGalen.jpg"
import type {Speaker} from "../types/speaker.ts";

export const Speakers = {
    PastorDanielMcKillop: {
        name: "Pastor Daniel McKillop",
        role: "Senior Pastor of Family Worship Center in Plaster Rock, New Brunswick since 2010.",
        description: {
            intro:
                "A bold visionary and passionate communicator, he is known for challenging people to think bigger and live with Kingdom purpose.\n" +
                "Beyond the pulpit, Pastor McKillop is a real estate investor, skilled musician, and missions-minded leader—deeply involved in supporting the ongoing work in Belize, Central America. He also hosts the Kingdom Speak podcast, a growing global platform where faith, leadership, and Kingdom principles converge in meaningful conversation.",
            details:
                "Married to Ruth since 1998, the McKillops are the proud parents of their son, Geron. Together, they lead with integrity, conviction, and a deep commitment to revival—locally and around the world.",
        },
        img: SpeakerDaniel,
    },

    GalenWalters: {
        name: "Galen Walters",
        role: "Creative entrepreneur, author, publisher, teacher, consultant, and coach.",
        description: {
            intro:
                "Galen is the Chairman and founder of Relationshop, Inc., the parent company of The Future is iCommerce | stor.ai  in Tel Aviv, Israel; Mercatus Technology in Toronto, Canada; and MCM Technology in Ho Chi Minh City, Vietnam. As CEO until October 2024, he led the vision and integration of these companies, which provide digital shopping, loyalty, data science, and marketing technology solutions for the retail supermarket industry. He has also served on the Board of Directors for Previon Health since 2006, working with the executive team on transformational projects.",
            details:
                "Today, Galen leads GoThink Consulting, helping businesses and non-profits achieve operational excellence. He developed the 4P Management System, Organizational Wellness Assessment, and Why | What | How| Wow! – a toolkit for organizational excellence. In 2008, he co-authored Equipped to Lead, a leadership handbook based on the 4P Management System, published by McGraw Hill.",
        },
        img: SpeakerGalen,
    },
} satisfies Record<string, Speaker>;
