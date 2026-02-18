import AcceptIcon from "@/assets/icons/AcceptIcon.svg";
import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import CommonFields from "../ui/CommonFields.tsx";
import type {FormValues} from "../../types/form.ts";
import Button from "../ui/Button.tsx";
import ErrorIcon from "@/assets/icons/ErrorIcon.svg";

type BusinessSize = {
    id: number
    text: string
}

export const businessSizes: BusinessSize[] = [
    {
        id: 1,
        text: "Startup / Pre-Launch – Just getting started, exploring ideas, or in the early development phase."
    },
    {
        id: 2,
        text: "Small Business – Actively operating with a small team (1–10 people), generating revenue."
    },
    {
        id: 3,
        text: "Growing Business / Established – More than 10 team members or scaling with multiple clients, products, or locations."
    },
]

const LetsConnect = () => {

    const {register,watch,setValue,handleSubmit,reset,formState: { errors, isValid }} = useForm<FormValues>({mode: "onChange",reValidateMode: "onChange"});
    const hasBusiness = watch("business");
    const [memberType, setMemberType] = useState<"new" | "existing">("new");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (hasBusiness === "no") {
            setValue("businessSize", undefined);
        }
    }, [hasBusiness, setValue]);

    useEffect(() => {
        reset(undefined, {
            keepValues: true,
            keepErrors: false,
        });

        setValue("business", undefined);
        setValue("businessSize", undefined);
    }, [memberType, reset, setValue]);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        const payload = { ...data, memberType };

        try {
            const res = await fetch("http://localhost:5000/api/partners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const message = await res.text();
                setError(message || "Server error");
                setLoading(false);
                return;
            }

            setSuccess(true);
            reset();
            setTimeout(() => setSuccess(false), 4000);
        } catch (err) {
            console.error(err);
            setError("We couldn’t send your request. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id="connect" className="bg-[var(--color-light-blue)] section-y section-x">
            <h2 className="text-h1 text-[var(--color-black)] mb-14 text-center">Let’s Connect</h2>

            <div>
                <div className="flex flex-col md:flex-row">
                    <button
                        type="button"
                        onClick={() => setMemberType("new")}
                        className={`form-choice rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl 
                                    transition-all duration-300 ease-in-out
                                    ${memberType === "new" ? "bg-[var(--color-white)]" 
                                                          : "bg-[var(--color-light-blue)]"}
                                  `}
                    >
                        <div
                            className={`blue-circle ${memberType === "new" ? "bg-[var(--color-blue)] border-[var(--color-blue)]" 
                                                                          : "border-[var(--color-dark-gray)] bg-transparent"}`}
                        />
                        <h4 className="text-h4 text-[var(--color-black)] transition-colors duration-300">I am a new member</h4>
                    </button>

                    <button
                        type="button"
                        onClick={() => setMemberType("existing")}
                        className={`form-choice rounded-none md:rounded-tr-2xl
                                    transition-all duration-300 ease-in-out      
                                    ${memberType === "existing" ? "bg-[var(--color-white)]" 
                                                               : "bg-[var(--color-light-blue)]"}`}
                    >
                        <div
                            className={`blue-circle shrink-0
                                        ${memberType === "existing" ? "bg-[var(--color-blue)] border-[var(--color-blue)]"
                                                                   : "border-[var(--color-dark-gray)] bg-transparent"}`}
                        />
                        <h4 className="text-h4 text-[var(--color-black)] transition-colors duration-300">Already part of the K&C community?</h4>
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col justify-center items-center py-12 px-3 bg-[var(--color-white)]">
                        <fieldset className="w-full md:w-[80%] lg:w-[55%]">
                            <CommonFields register={register} errors={errors}/>

                            {/*PASTOR'S NAME*/}
                            <div className="form-field">
                                <label htmlFor="pastorName" className="form-label">
                                    Pastor's Name (not mandatory)
                                </label>
                                <input
                                    id="pastorName"
                                    type="text"
                                    {...register("pastorName",{
                                        pattern: {
                                            value: /^[A-Za-z' -]+$/,
                                            message: "Name cannot contain numbers"
                                        }
                                    })}
                                    placeholder="Enter your pastor’s name (if applicable)."
                                    className="form-input"
                                />
                                {errors.pastorName && (
                                    <p className="error-message">
                                        <img src={ErrorIcon} alt="" aria-hidden/>
                                        <span>{errors.pastorName.message}</span>
                                    </p>
                                )}
                            </div>

                            {/*BUSINESS*/}
                            {memberType === "new" && (
                                <div className="mt-6 mb-8">
                                    <p className="form-label mb-6">
                                        Do you currently own a business or are you planning a startup?
                                    </p>

                                    <div className="flex flex-col gap-4 justify-center">
                                        <label className="radio-position">
                                            <input
                                                type="radio"
                                                {...register("business", { required: memberType === "new" })}
                                                value="yes"
                                                className="form-radio"
                                            />
                                            <span className="form-label">Yes</span>
                                        </label>

                                        <label className="radio-position">
                                            <input
                                                type="radio"
                                                {...register("business", { required: true })}
                                                value="no"
                                                className="form-radio"
                                            />
                                            <span className="form-label">No</span>
                                        </label>

                                        {hasBusiness === "yes" && (
                                            <div className="transition-all duration-500 ease-in-out">
                                                <label htmlFor="businessSize" className="form-label block py-6">How would you describe your business size?</label>
                                                <div>
                                                    {businessSizes.map((size) => (
                                                        <label key={size.id} className="flex gap-6 items-start mb-4">
                                                            <input
                                                                type="radio"
                                                                {...register("businessSize", {
                                                                    valueAsNumber: true,
                                                                    required: hasBusiness === "yes"
                                                                        ? "Please select your business size"
                                                                        : false
                                                                })}
                                                                value={size.id}
                                                                className="mt-1 min-w-6 min-h-6 form-radio"
                                                            />
                                                            <span className="form-label">{size.text}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.business && (
                                        <p className="error-message">
                                            <img src={ErrorIcon} alt="" aria-hidden/>
                                            <span> Please select an option</span>
                                        </p>
                                    )}

                                </div>
                            )}

                            {/*PRIVACY*/}
                            <div>
                                <label className="flex items-start gap-3 cursor-pointer mb-8">
                                    <input
                                        type="checkbox"
                                        {...register("privacyAccepted", { required: true })}
                                        className="peer sr-only"
                                    />
                                    <div
                                        className="w-6 h-6 form-checkbox"
                                    >
                                        <img src={AcceptIcon} alt="" aria-hidden/>
                                    </div>
                                    <span className="text-p2">
                                        By submitting this form, I consent to the collection and use of my personal information in accordance with applicable Canadian privacy laws.
                                    </span>
                                </label>
                                {errors.privacyAccepted && (
                                    <p className="error-message mb-4">
                                        <img src={ErrorIcon} alt="" aria-hidden/>
                                        <span> You must accept the privacy policy</span>
                                    </p>
                                )}
                            </div>

                            {/*SUBMIT BUTTON*/}
                            <Button type="submit"
                                    disabled={!isValid || loading}
                                    className={`w-full transition-all duration-300
                                            `}
                            >
                                 Confirm & Pay
                            </Button>

                            {error && (
                                <p className="error-message">
                                    <img src={ErrorIcon} alt="" aria-hidden/>
                                    <span> {error}</span>
                                </p>
                            )}

                            {success && (
                                <p className="text-p2 text-[var(--color-white)] bg-[var(--color-dark-gray)] flex items-center justify-start gap-3 py-2 px-4 rounded-3xl mt-4">
                                    Thank you! Your request has been received.
                                </p>
                            )}

                        </fieldset>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default LetsConnect
