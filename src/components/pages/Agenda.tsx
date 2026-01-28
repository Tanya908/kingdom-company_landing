import AgendaBlock from "../ui/AgendaBlock.tsx";

const Agenda = () => {
    return (
        <section className="mx-3 md:mx-10 lg:mx-16 mt-24 ">
            <h2 className="text-h1 text-[var(--color-black)] mx-auto text-center mb-14 ">Agenda Preview</h2>

            <AgendaBlock variant="vision" />
            <AgendaBlock variant="kc2025" />
        </section>
    )
}
export default Agenda
