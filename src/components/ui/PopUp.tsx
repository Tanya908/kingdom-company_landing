import CloseBlack from "@/assets/icons/CloseBlack.svg";
import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import AcceptIcon from "@/assets/icons/AcceptIcon.svg";
import {useEffect} from "react";

type PopUpProps = {
    onClose: () => void;
};

const PopUp = ({ onClose }: PopUpProps) => {

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

            <div className="relative max-w-[400px] md:max-w-[900px] lg:max-w-[700px] overflow-y-auto rounded-2xl
                            bg-[var(--color-white)] mx-auto px-2 md:px-10 py-6"
            >

            <div className="flex">
                <button
                    type="button"
                    className="ml-auto w-6 h-6 cursor-pointer"
                    aria-label="Close popup"
                    onClick={onClose}
                >
                    <img src={CloseBlack} alt="" />
                </button>
            </div>

            <h3 className="text-h3 text-[var(--color-black)] text-center mt-6">Your Support Makes It Possible</h3>
            <p className="text-p2 text-center mt-4">Your partnership helps expand a movement of faith-filled leadership.</p>

            <form className="mt-10">
                {/*FULL NAME*/}
                <div className="form-field">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your first and last name."
                        className="form-input"
                        required
                    />
                </div>

                {/*EMAIL ADDRESS*/}
                <div className="form-field">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="We’ll contact you here."
                        className="form-input"
                        required
                    />
                </div>

                {/*PHONE NUMBER*/}
                <div className="form-field">
                    <label htmlFor="phone" className="form-label">Phone Number (optional)</label>
                    <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Include your number if you'd prefer a call."
                        className="form-input"
                    />
                </div>

                {/*WEBSITE OR SOCIAL MEDIA*/}
                <div className="form-field">
                    <label htmlFor="choice" className="form-label">Website or Social Media (optional)</label>
                    <input
                        id="choice"
                        type="text"
                        placeholder="Share a link where we can learn more."
                        className="form-input"
                    />
                </div>

                {/*PRIVACY*/}
                <div>
                    <label className="flex items-start gap-3 cursor-pointer mb-10">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            required
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
                </div>

                {/*SUBMIT BUTTON*/}
                <button type="submit" className="w-full border-none flex justify-center items-center gap-2 py-3 px-5
                            bg-[var(--color-blue)] rounded-[10px] text-p2 text-[var(--color-white)]">
                    Confirm & Pay <span><img src={ButtonIcon} alt="" aria-hidden/></span>
                </button>
            </form>
            </div>
        </section>
    )
}
export default PopUp
