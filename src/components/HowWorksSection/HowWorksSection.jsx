import Heading from "../Heading/Heading"
import CardWord from "./CardWord"
import logo1 from "../../assets/images/howworks1.png";
import logo2 from "../../assets/images/howworks2.png";
import logo3 from "../../assets/images/howworks3.png";

const HowWorksSection = () => {
  return (
    <section className="pt-10 md:pt-20 pb-20 custom-container">
      <Heading title="How it Works" text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>
      
      <article className="flex justify-between flex-col md:flex-row gap-3">
        <CardWord logo={logo1} title="Search Aprtment" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."/>
        <CardWord hasStyle={true} logo={logo2} title="Select Aprtment" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."/>
        <CardWord logo={logo3} title="Confirm Aprtment" subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."/>
      </article>

    </section>
  )
}

export default HowWorksSection
