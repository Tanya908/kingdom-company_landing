import type { RegistrationName} from "../../types/payments.ts";
import {Registrations} from "../../data/payments.ts";
import Button from "./Button.tsx";

type RegistrationProps = {
    name: RegistrationName;
    popularity?: boolean;
};

const PaymentCard = ({ name,popularity = false }: RegistrationProps) => {
    const registration = Registrations[name];
    return (

            <div
                className={`relative h-full flex flex-col px-4 py-8 rounded-xl bg-[var(--color-light-blue)]
                            border transition-colors duration-200 cursor-pointer
                            ${popularity ? "group card-dark-hover"
                                         : "card-hover"
                            }         
                `}
            >

                {popularity && (
                    <div className="absolute top-0 -left-px -right-px z-30 bg-[var(--color-orange)] popularity-hover pointer-events-none
                                    text-p3 text-[var(--color-white)] text-center py-2 rounded-t-xl -translate-y-6"
                    >
                        most popular
                    </div>
                )}

                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-h3 text-center uppercase text-[var(--color-black)] max-w-60">
                        {registration.name}
                    </h3>
                    <h3 className="text-h3 mb-4 mt-2">{registration.price}</h3>
                    <p className="text-p2 mr-auto max-w-xs lg:min-h-12">{registration.description}</p>
                    <Button
                        href="#connect"
                        variant={popularity ? "primary" : "primaryOutlined"}
                        className="w-full my-8"
                    >
                        Register Now
                    </Button>
                </div>

                <ul className="flex flex-col gap-2 min-h-40 overflow-hidden">
                    {registration.itemsList.map((item, index) => (
                        <li key={`${registration.name}-${index}`} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 popularity-hover shrink-0"/>
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
