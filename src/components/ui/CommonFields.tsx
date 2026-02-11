import type { UseFormRegister } from "react-hook-form";
import type {FormValues} from "../../types/form.ts";

export type CommonFieldsProps = {
    register: UseFormRegister<FormValues>;
};

const CommonFields = ({ register }: CommonFieldsProps) => {
    return (
        <>
            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="fullName" className="text-p1 text-[var(--color-black)]">Full Name</label>
                <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your first and last name."
                    className="bg-[var(--color-light-blue)] py-4 px-6 rounded-3xl outline-none focus:outline-none focus:ring-0"
                    {...register("fullName", { required: "Full name is required" })}
                />
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="email" className="text-p1 text-[var(--color-black)]">Email</label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Used for confirmation and updates."
                    className="bg-[var(--color-light-blue)] py-4 px-6 rounded-3xl outline-none focus:outline-none focus:ring-0"
                    {...register("email", { required: "Email is required" })}
                />
            </div>

            <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="phone" className="text-p1 text-[var(--color-black)]">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your 10-digit Canadian phone number."
                    className=" w-full bg-[var(--color-light-blue)] py-4 px-6 rounded-3xl outline-none focus:outline-none focus:ring-0"
                    {...register("phone", { required: "Phone number is required" })}
                />
            </div>
        </>
    );
};

export default CommonFields;
