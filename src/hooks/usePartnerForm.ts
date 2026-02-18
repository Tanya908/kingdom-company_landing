import { useState } from "react";
import {type PartnerPayload, sendPartnerForm} from "../api/partners.ts";


export function usePartnerForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const submit = async (data: PartnerPayload) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(false);

            await sendPartnerForm(data);

            setSuccess(true);
            return true;
        } catch (err: any) {
            setError(err.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        submit,
        loading,
        error,
        success,
        setSuccess,
    };
}
