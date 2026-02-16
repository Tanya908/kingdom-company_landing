import Header from "./components/layouts/Header.tsx";
import Hero from "./components/pages/Hero.tsx";
import About from "./components/pages/About.tsx";
import Location from "./components/pages/Location.tsx";
import Agenda from "./components/pages/Agenda.tsx";
import OurSpeakers from "./components/pages/OurSpeakers.tsx";
import Payment from "./components/pages/Payment.tsx";
import LetsConnect from "./components/pages/LetsConnect.tsx";
import Faq from "./components/pages/Faq.tsx";
import ForPartners from "./components/pages/ForPartners.tsx";
import Footer from "./components/layouts/Footer.tsx";
import Preloader from "./components/ui/Preloader.tsx";
import {useState} from "react";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return <Preloader onFinish={() => setIsLoading(false)} />;
    }
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
                <Faq/>
                <ForPartners/>
                <Footer/>
            </>
    )
}
export default App
