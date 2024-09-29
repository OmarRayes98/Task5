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
    <Navbar/>
    <Hero/>
    <HowWorksSection/>
    <FindDream/>
    <MostTrendingSection/>
    <BestRealState/>
    <Footer/>
    </>
  )
}

export default App
