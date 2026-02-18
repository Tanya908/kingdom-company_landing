import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {FormValues} from "../../types/form.ts";
import ErrorIcon from "@/assets/icons/ErrorIcon.svg";

export type CommonFieldsProps = {
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>;
};

const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0,3)} ${digits.slice(3)}`;
    return `${digits.slice(0,3)} ${digits.slice(3,6)} ${digits.slice(6)}`;
};

const CommonFields = ({ register, errors }: CommonFieldsProps) => {


    return (
        <>
            <div className="form-field">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your first and last name."
                    className="form-input"
                    {...register("fullName",{
                        required: "Full name is required",
                        pattern: {
                            value: /^[A-Za-z' -]+$/,
                            message: "Name cannot contain numbers"
                        }
                    })}
                />

                {errors.fullName && (
                    <p className="error-message">
                        <img src={ErrorIcon} alt="" aria-hidden/>
                        <span>{errors.fullName.message}</span>
                    </p>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Used for confirmation and updates."
                    className="form-input"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                            message: "Enter a valid email"
                        }
                    })}
                />

                {errors.email && (
                    <p className="error-message">
                        <img src={ErrorIcon} alt="" aria-hidden/>
                        <span>{errors.email.message}</span>
                    </p>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your 10-digit Canadian phone number."
                    className="form-input"
                    maxLength={12}
                    inputMode="numeric"
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^\d{3}\s\d{3}\s\d{4}$/,
                            message: "Enter a valid phone number (e.g., 000 000 0000)."
                        },
                        onChange: (e) => {
                            e.target.value = formatPhone(e.target.value);
                        }
                    })}
                />

                {errors.phone && (
                    <p className="error-message">
                        <img src={ErrorIcon} alt="" aria-hidden/>
                        <span>{errors.phone.message}</span>
                    </p>
                )}
            </div>
        </>
    );
};

export default CommonFields;
