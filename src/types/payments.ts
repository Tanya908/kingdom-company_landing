import type {Registrations} from "../data/payments.ts";

export type Registration = {
    name: string
    price: string
    description: string
    itemsList: string[]
    details: string
}

export type RegistrationName = keyof typeof Registrations;
