
import image from "../../assets/images/findDream.png";

const FindDream = () => {
  return (
    <section className="relative h-[380px] flex justify-center items-center">
    
    <div className="absolute bg-black  opacity-50 w-full h-full z-10"></div>
    <img src={image} className="h-full w-full object-cover" alt="image" />

    <div className="text-center absolute z-20 text-white">
    <h2 className="text-3xl md:text-7xl font-bold">
    Find Dream Home
    </h2>
    <p className="font-normal pt-3 md:pt-9 text-[15px] md:text-3xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </p>
    </div>

    </section>
  )
}

export default FindDream
