
import iconHouse from "../../assets/images/house.png";
import iconLocation from "../../assets/images/location.png";
import iconPrice from "../../assets/images/dollar-circle.png";
import Card from "./Card";

const BoxCards = () => {
    return (
    <div className="md:w-[810px] p-5 md:py-3 md:px-[35px] rounded-2xl flex flex-col gap-7 md:gap-0  md:flex-row items-center justify-between backdrop-blur-lg bg-white opacity-75">
    
    <Card icon={iconLocation} title="Location" subTitle="Ahmedabad, India"/>
    <Card icon={iconPrice} title="Price" subTitle="$1000 - $10,000"/>
    <Card icon={iconHouse} title="Type of Property" subTitle="Apartment"/>

    </div>
    )
}

export default BoxCards
