import Heading from "../Heading/Heading"
import CardTrending from "./CardTrending"
import trandImage1 from "../../assets/images/trending1.png";
import trandImage2 from "../../assets/images/trending2.png";
import trandImage3 from "../../assets/images/trending3.png";
import trandImage4 from "../../assets/images/trending4.png";

const MostTrendingSection = () => {
  return (
    <section className="pt-10 md:pt-20 pb-20 custom-container ">
    <Heading title="Most Trending" text="Lorem ipsum dolor sit amet, consectetur adipiscing eli" />

    <article className="grid grid-cols-1 justify-center  sm:grid-cols-2  md:grid-cols-3 gap-4">
        <CardTrending image ={trandImage1} price="$300000" title="Luxury Apartment in California"/>
        <CardTrending image ={trandImage2} price="$300000" title="Luxury Apartment in California"/>
        <CardTrending image ={trandImage3} price="$300000" title="Luxury Apartment in California"/>
        <CardTrending image ={trandImage4} price="$300000" title="Luxury Apartment in California"/>
        <CardTrending image ={trandImage1} price="$300000" title="Luxury Apartment in California"/>
        <CardTrending image ={trandImage2} price="$300000" title="Luxury Apartment in California"/>
    </article>

    </section>
  )
}

export default MostTrendingSection
