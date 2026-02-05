import Header from "./components/layouts/Header.tsx";
import Hero from "./components/pages/Hero.tsx";
import About from "./components/pages/About.tsx";
import Location from "./components/pages/Location.tsx";
import Agenda from "./components/pages/Agenda.tsx";
import OurSpeakers from "./components/pages/OurSpeakers.tsx";

const App = () => {
    return (
            <>
                <Header />
                <Hero/>
                <About/>
                <Location/>
                <Agenda/>
                <OurSpeakers/>
            </>
    )
}
export default App
