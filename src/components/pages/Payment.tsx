import PaymentCard from "../ui/PaymentCard.tsx";

const Payment = () => {
    return (
        <section id="payment" className="section-x section-y">
            <div className=" flex flex-col md:flex-row md:justify-between gap-6 mb-16 md:mb-20 lg:mb-24">
                <h2 className="text-h1 text-[var(--color-black)] md:w-1/2">Reserve Your Spot</h2>
                <p className="text-p1 md:w-1/2 text-justify">Kingdom & Company 2025 is more than just an event — it's a launchpad for vision, alignment, and Kingdom-driven momentum. Choose the registration tier that best fits your journey and join a community of leaders who build with purpose.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch md:justify-items-center">
                <PaymentCard name="StudentRegistration" />
                <PaymentCard name="CoupleRegistration" popularity={true} />
                <PaymentCard name="SingleRegistration" />
            </div>

        </section>
    )
}
export default Payment
