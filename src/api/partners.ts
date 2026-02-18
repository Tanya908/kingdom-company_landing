import { http } from "./http";
import type {FormValues} from "../types/form.ts";


export type PartnerPayload = FormValues & {
    memberType: "new" | "existing";
};

export const sendPartnerForm = (data: PartnerPayload) => {
    return http("/partners", {
        method: "POST",
        body: JSON.stringify(data),
    });
};
