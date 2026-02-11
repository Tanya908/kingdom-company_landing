import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import AcceptIcon from "@/assets/icons/AcceptIcon.svg";
import {useState} from "react";
import { useForm } from "react-hook-form";
import CommonFields from "../ui/CommonFields.tsx";
import type {FormValues} from "../../types/form.ts";

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

    const { register, watch } = useForm<FormValues>();
    const hasBusiness = watch("business");
    const [activeTab, setActiveTab] = useState<"new" | "existing">("new");

    return (
        <section id="connect" className="mt-20 bg-[var(--color-light-blue)] py-16 px-3">
            <h2 className="text-h1 text-[var(--color-black)] mb-14 text-center">Let’s Connect</h2>

            <div>
                <button
                    type="button"
                    onClick={() => setActiveTab("new")}
                    className={`w-full flex flex-col gap-3 items-center justify-center py-8 px-14 rounded-t-2xl cursor-pointer
                            ${activeTab === "new" ? "bg-[var(--color-white)]" : "bg-[var(--color-light-blue)]"}
                          `}
                >
                    <div
                        className={`w-4 h-4 rounded-full border-2
                                ${activeTab === "new" ? "bg-[var(--color-blue)] border-[var(--color-blue)]" : "border-[var(--color-blue)] bg-transparent"}
                              `}
                    />
                    <h4 className="text-h4 text-[var(--color-black)]">I am a new member</h4>
                </button>

                <button
                    type="button"
                    onClick={() => setActiveTab("existing")}
                    className={`flex flex-col gap-3 items-center justify-center py-8 px-14 cursor-pointer
                            ${activeTab === "existing" ? "bg-[var(--color-white)]" : "bg-[var(--color-light-blue)]"}
                          `}
                >
                    <div
                        className={`w-4 h-4 rounded-full border-2 
                               ${activeTab === "existing" ? "bg-[var(--color-blue)] border-[var(--color-blue)]": "border-[var(--color-blue)] bg-transparent"}             
                              `}
                    />
                    <h4 className="text-h4 text-[var(--color-black)]">Already part of the K&C community?</h4>
                </button>

                <form className="flex flex-col py-12 px-2 bg-[var(--color-white)]" >
                    <fieldset>
                        <CommonFields register={register}/>

                        {/*PASTOR'S NAME*/}
                        <div className="flex flex-col gap-2 mb-6">
                            <label htmlFor="pastorName" className="text-p1 text-[var(--color-black)]">Pastor's Name (not mandatory)</label>
                            <input
                                id="pastorName"
                                type="text"
                                {...register("pastorName")}
                                placeholder="Enter your pastor’s name (if applicable)."
                                className="bg-[var(--color-light-blue)] text-p2 py-4 px-6 rounded-3xl outline-none focus:outline-none focus:ring-0"
                            />
                        </div>

                        {/*BUSINESS*/}
                        {activeTab === "new" && (
                            <div className="mt-6 mb-8">
                                <p className="text-p1 text-[var(--color-black)] mb-6">Do you currently own a business or are you planning a startup?</p>

                                <div className="flex flex-col gap-4 justify-center">
                                    <label className="flex gap-4 items-center">
                                        <input
                                            type="radio"
                                            {...register("business", { required: true })}
                                            value="yes"
                                            className="w-6 h-6 accent-[var(--color-dark-gray)] cursor-pointer"
                                            required
                                        />
                                        <span className="text-p1 text-[var(--color-black)]">Yes</span>
                                    </label>

                                    <label className="flex gap-4 items-center">
                                        <input
                                            type="radio"
                                            {...register("businessSize", { valueAsNumber: true })}
                                            value="no"
                                            className="w-6 h-6 accent-[var(--color-dark-gray)] cursor-pointer"
                                        />
                                        <span className="text-p1 text-[var(--color-black)]">No</span>
                                    </label>

                                    {hasBusiness === "yes" && (
                                        <div className="flex flex-col gap-4 ">
                                            <label htmlFor="businessSize" className="text-p1 text-[var(--color-black)] my-6">How would you describe your business size?</label>
                                            <div>
                                                {businessSizes.map((size) => (
                                                    <label key={size.id} className="flex gap-6 items-start mb-4 ">
                                                        <input
                                                            type="radio"
                                                            name="businessSize"
                                                            value={size.id}
                                                            className="w-6 h-6 mt-1 min-w-6 min-h-6 accent-[var(--color-dark-gray)] cursor-pointer"
                                                        />
                                                        <span className="text-p1 text-[var(--color-black)]">{size.text}</span>
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
                            <label className="flex items-start gap-3 cursor-pointer mb-12 ">
                                <input
                                    type="checkbox"
                                    {...register("privacyAccepted", { required: true })}
                                    className="peer sr-only"
                                    required
                                />
                                <div
                                    className="w-6 h-6 border border-[var(--color-black)] rounded flex items-center justify-center
                                           [&>img]:opacity-0 peer-checked:[&>img]:opacity-100 aspect-square"
                                >
                                    <img src={AcceptIcon} alt=""/>
                                </div>
                                <span className="text-p2">
                                By submitting this form, I consent to the collection and use of my personal information in accordance with applicable Canadian privacy laws.
                            </span>
                            </label>
                        </div>

                        {/*SUBMIT BUTTON*/}
                        <button type="submit" className="w-full flex justify-center items-center gap-2 py-3 px-5 border
                            bg-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-white)]">
                            Confirm & Pay <span><img src={ButtonIcon} alt="icon"/></span>
                        </button>

                    </fieldset>
                </form>
            </div>

        </section>
    )
}
export default LetsConnect
