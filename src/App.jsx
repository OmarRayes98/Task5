import BestRealState from "./components/BestRealState/BestRealState"
import FindDream from "./components/FindDream/FindDream"
import Hero from "./components/Hero/Hero"
import HowWorksSection from "./components/HowWorksSection/HowWorksSection"
import Footer from "./components/layouts/Footer/Footer"
import Navbar from "./components/layouts/Navbar/Navbar"
import MostTrendingSection from "./components/MostTrendingSection/MostTrendingSection"

function App() {

  return (
    <>
    <section className="max-w-[105rem] mx-auto">
    <Navbar/>

    <Hero/>
    <HowWorksSection/>
    <FindDream/>
    <MostTrendingSection/>
    <BestRealState/>
    <Footer/>
    </section>

    </>
  )
}

export default App
