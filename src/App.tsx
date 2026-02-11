import Header from "./components/layouts/Header.tsx";
import Hero from "./components/pages/Hero.tsx";
import About from "./components/pages/About.tsx";
import Location from "./components/pages/Location.tsx";
import Agenda from "./components/pages/Agenda.tsx";
import OurSpeakers from "./components/pages/OurSpeakers.tsx";
import Payment from "./components/pages/Payment.tsx";
import LetsConnect from "./components/pages/LetsConnect.tsx";

const App = () => {
    return (
            <>
                <Header />
                <Hero/>
                <About/>
                <Location/>
                <Agenda/>
                <OurSpeakers/>
                <Payment/>
                <LetsConnect/>
            </>
    )
}
export default App
