
import locationIcon from "../../assets/images/locationCard.png";

const CardTrending = ({image, price, title}) => {
  return (
    //from w-[380px] to 100% depends on grid column
    <div className="w-full p-5 rounded-[10px] border-[1.5px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
      <img  src={image} className="rounded-[10px] object-cover w-full  h-[242px]" alt="card image"/>

    <div className="pt-4 pb-10">
    <p className="text-primary text-[18px] font-semibold">
        {price}
      </p>
      <p className="text-[18px] font-semibold md:w-[70%]">
      {title}
      </p>

    </div>

    <div className="flex items-center gap-2 text-[14px] font-normal">
        <img src={locationIcon}  alt="location icon" />
        <span>
        1901 Thornridge Cir. Shiloh, Hawaii 81063
        </span>
    </div>


    </div>
  )
}

export default CardTrending
