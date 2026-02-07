import ButtonIcon from "@/assets/icons/ButtonIcon.svg";
import type { RegistrationName} from "../../types/payments.ts";
import {Registrations} from "../../data/payments.ts";

type RegistrationProps = {
    name: RegistrationName;
    popularity?: boolean;
};

const PaymentCard = ({ name,popularity = false }: RegistrationProps) => {
    const registration = Registrations[name];
    return (

            <div
                className={`relative h-full flex flex-col px-4 py-8 rounded-xl bg-[var(--color-light-blue)]
                            border transition-colors duration-200
                            ${popularity ? "group border-[var(--color-orange)] hover:border-[var(--color-black)] active:border-[var(--color-black)]"
                                         : "border-transparent hover:border-[var(--color-orange)] active:border-[var(--color-orange)]"
                            }         
                `}
            >

                {popularity && (
                    <div className="absolute top-0 -left-px -right-px z-30 bg-[var(--color-orange)] group-hover:bg-[var(--color-black)] group-active:bg-[var(--color-black)]
                                    text-p3 text-[var(--color-white)] text-center py-2 rounded-t-xl pointer-events-none -translate-y-6"
                    >
                        most popular
                    </div>
                )}

                <div className={`flex flex-col items-center justify-center`} >
                    <h3 className="text-h3 text-center uppercase text-[var(--color-black)]">
                        {registration.name}
                    </h3>
                    <h3 className="text-h3 mb-4">{registration.price}</h3>
                    <p className="text-p2 text-left">{registration.description}</p>
                    <a
                        href="#"
                        className="flex w-full justify-center items-center gap-2 py-3 px-5 border border-[var(--color-blue)]
                                   rounded-[10px] text-p2 text-[var(--color-blue)] my-6"
                    >
                        Buy Now <span><img src={ButtonIcon} alt="icon"/></span>
                    </a>
                </div>

                <ul className="flex flex-col gap-2">
                    {registration.itemsList.map((item, index) => (
                        <li key={`${registration.name}-${index}`} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 shrink-0"/>
                            <p className="text-p2 text-[var(--color-dark-gray)]">{item}</p>
                        </li>
                    ))}
                </ul>

                <div className="w-full h-px bg-[var(--color-gray)] my-3"></div>

                <p className="text-p2-semiBold mb-2 text-[var(--color-black)]">Best for</p>
                <p className="text-p2">{registration.details}</p>
            </div>

    )
}
export default PaymentCard
