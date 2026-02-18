import Close from "@/assets/icons/Close.svg?react";
import AcceptIcon from "@/assets/icons/AcceptIcon.svg";
import {useEffect, useState} from "react";
import Button from "./Button.tsx";
import CommonFields from "./CommonFields.tsx";
import {useForm} from "react-hook-form";
import type {FormValues} from "../../types/form.ts";
import ErrorIcon from "@/assets/icons/ErrorIcon.svg";
import { motion } from "framer-motion";


type PopUpProps = {
    onClose: () => void;
};

const PopUp = ({ onClose }: PopUpProps) => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<FormValues>({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            privacyAccepted: false
        }
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: FormValues) => {
        try {
            setLoading(true);
            setError(null);

            console.log(data);

            setSuccess(true);
            setTimeout(() => {onClose();}, 1500);

        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <section
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
        >

            <div className="absolute inset-0 bg-[var(--color-black)]/50 backdrop-blur-sm" onClick={onClose}/>

            <div className="relative max-w-[400px] md:max-w-[900px] lg:max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl
                            bg-[var(--color-white)] mx-auto px-2 md:px-10 py-6"
            >

                <div className="flex">
                    <button
                        type="button"
                        className="ml-auto w-6 h-6 cursor-pointer"
                        aria-label="Close popup"
                        onClick={onClose}
                    >
                        <Close className="text-[var(--color-black)] w-6 h-6" />
                    </button>
                </div>

                <h3 className="text-h3 text-[var(--color-black)] text-center mt-6">Your Support Makes It Possible</h3>
                <p className="text-p2 text-center mt-4">Your partnership helps expand a movement of faith-filled leadership.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10">

                    <CommonFields register={register} errors={errors}/>

                    {/*WEBSITE OR SOCIAL MEDIA*/}
                    <div className="form-field">
                        <label htmlFor="choice" className="form-label">Website or Social Media (optional)</label>
                        <input
                            id="choice"
                            type="text"
                            placeholder="Share a link where we can learn more."
                            className="form-input"
                            {...register("website")}
                        />
                    </div>

                    {/*PRIVACY*/}
                    <div>
                        <label className="flex items-start gap-3 cursor-pointer mb-10">
                            <input
                                type="checkbox"
                                className="peer sr-only"
                                {...register("privacyAccepted", { required: true })}
                            />
                            <div
                                className="w-4 h-4 form-checkbox"
                            >
                                <img src={AcceptIcon} alt="" className="w-3 h-3" aria-hidden/>
                            </div>
                            <span className="text-p2">
                                I consent to the collection and use of my information for partnership-related communication in accordance with Canadian privacy laws.
                            </span>
                        </label>
                        {errors.privacyAccepted && (
                            <p className="error-message mb-4">
                                <img src={ErrorIcon} alt="" aria-hidden/>
                                <span>You must accept the privacy policy</span>
                            </p>
                        )}
                    </div>

                    {/*SUBMIT BUTTON*/}
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}

                            className="error-message my-4">
                            <img src={ErrorIcon} alt="" aria-hidden/>
                            <span> {error}</span>
                        </motion.p>
                    )}

                    {success && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}

                            className="text-p2 text-[var(--color-white)] bg-[var(--color-dark-gray)] flex items-center justify-start gap-3 py-2 px-4 rounded-3xl my-4">
                            Thank you! Your request has been received.
                        </motion.p>
                    )}

                    <Button type="submit"
                            disabled={!isValid || loading}
                            className="w-full transition-all duration-300"
                    >
                        Confirm & Pay
                    </Button>
                </form>
            </div>
        </section>
    )
}
export default PopUp
