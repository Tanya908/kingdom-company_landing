import Header from "./components/layouts/Header.tsx";
import Hero from "./components/pages/Hero.tsx";
import About from "./components/pages/About.tsx";
import Location from "./components/pages/Location.tsx";

const App = () => {
    return (
            <>
                <Header />
                <Hero/>
                <About/>
                <Location/>
            </>
    )
}
export default App
