import AcceptIcon from "@/assets/icons/AcceptIcon.svg";
import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import CommonFields from "../ui/CommonFields.tsx";
import type {FormValues} from "../../types/form.ts";
import Button from "../ui/Button.tsx";

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

    const { register, watch, setValue} = useForm<FormValues>();
    const hasBusiness = watch("business");
    const [activeTab, setActiveTab] = useState<"new" | "existing">("new");

    useEffect(() => {
        if (hasBusiness === "no") {
            setValue("businessSize", undefined);
        }
    }, [hasBusiness, setValue]);

    return (
        <section id="connect" className="bg-[var(--color-light-blue)] section-y section-x">
            <h2 className="text-h1 text-[var(--color-black)] mb-14 text-center">Let’s Connect</h2>

            <div>
                <div className="flex flex-col md:flex-row">
                    <button
                        type="button"
                        onClick={() => setActiveTab("new")}
                        className={`form-choice rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl 
                                    transition-all duration-300 ease-in-out
                                    ${activeTab === "new" ? "bg-[var(--color-white)]" 
                                                          : "bg-[var(--color-light-blue)]"}
                                  `}
                    >
                        <div
                            className={`blue-circle ${activeTab === "new" ? "bg-[var(--color-blue)] border-[var(--color-blue)]" 
                                                                          : "border-[var(--color-dark-gray)] bg-transparent"}`}
                        />
                        <h4 className="text-h4 text-[var(--color-black)] transition-colors duration-300">I am a new member</h4>
                    </button>

                    <button
                        type="button"
                        onClick={() => setActiveTab("existing")}
                        className={`form-choice rounded-none md:rounded-tr-2xl
                                    transition-all duration-300 ease-in-out      
                                    ${activeTab === "existing" ? "bg-[var(--color-white)]" 
                                                               : "bg-[var(--color-light-blue)]"}`}
                    >
                        <div
                            className={`blue-circle shrink-0
                                        ${activeTab === "existing" ? "bg-[var(--color-blue)] border-[var(--color-blue)]"
                                                                   : "border-[var(--color-dark-gray)] bg-transparent"}`}
                        />
                        <h4 className="text-h4 text-[var(--color-black)] transition-colors duration-300">Already part of the K&C community?</h4>
                    </button>
                </div>

                <form className="flex flex-col justify-center items-center py-12 px-3 bg-[var(--color-white)]">
                    <fieldset className="w-full md:w-[80%] lg:w-[55%]">
                        <CommonFields register={register}/>

                        {/*PASTOR'S NAME*/}
                        <div className="form-field">
                            <label htmlFor="pastorName" className="form-label">
                                Pastor's Name (not mandatory)
                            </label>
                            <input
                                id="pastorName"
                                type="text"
                                {...register("pastorName")}
                                placeholder="Enter your pastor’s name (if applicable)."
                                className="form-input"
                            />
                        </div>

                        {/*BUSINESS*/}
                        {activeTab === "new" && (
                            <div className="mt-6 mb-8">
                                <p className="form-label mb-6">
                                    Do you currently own a business or are you planning a startup?
                                </p>

                                <div className="flex flex-col gap-4 justify-center">
                                    <label className="radio-position">
                                        <input
                                            type="radio"
                                            {...register("business", { required: true })}
                                            value="yes"
                                            className="form-radio"
                                        />
                                        <span className="form-label">Yes</span>
                                    </label>

                                    <label className="radio-position">
                                        <input
                                            type="radio"
                                            {...register("business")}
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
                                                            {...register("businessSize", { valueAsNumber: true })}
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
                            </div>
                        )}

                        {/*PRIVACY*/}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer mb-12">
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
                        </div>

                        {/*SUBMIT BUTTON*/}
                        <Button type="submit" className="w-full">Confirm & Pay</Button>
                    </fieldset>
                </form>
            </div>
        </section>
    )
}
export default LetsConnect
