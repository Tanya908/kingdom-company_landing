import Header from "./components/layouts/Header.tsx";
import Hero from "./components/pages/Hero.tsx";
import About from "./components/pages/About.tsx";
import Location from "./components/pages/Location.tsx";
import Agenda from "./components/pages/Agenda.tsx";

const App = () => {
    return (
            <>
                <Header />
                <Hero/>
                <About/>
                <Location/>
                <Agenda/>
            </>
    )
}
export default App
