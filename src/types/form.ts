export type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    pastorName?: string;
    business?: "yes" | "no";
    businessSize?: number;
    privacyAccepted: boolean;
    website?: string;
};
