import type {Speakers} from "../data/speakers.ts";

export type Speaker = {
    name: string;
    role: string;
    description: {
        intro: string;
        details: string;
    };
    img: string;
};

export type SpeakerName = keyof typeof Speakers;
