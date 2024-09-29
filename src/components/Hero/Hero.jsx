
import heroImage from "../../assets/images/modern-residential-building-transformed 1.png";

import BoxCards from "./BoxCards";

const Hero = () => {
  return (
    <section className="bg-custom-bg  relative h-[600px]">

    <h1 className="text-4xl font-bold py-5 md:py-6 custom-container  tracking-tight md:text-5xl lg:text-6xl md:leading-[80px] md:w-[600px] ">
    Discove a place you will love to live 
    </h1>
    <div className="pb-8 md:pb-10 custom-container"> 
    <p className="opacity-50">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p className="opacity-50">
    Imperdiet tempus felis vitae sit est quisque.
    </p>
    </div>

    <img src={heroImage} className="absolute bottom-0 right-0 object-cover" alt="heading image" />

    <div className="md:custom-container">
    <BoxCards/>
    </div>

    </section>
  )
}

export default Hero
