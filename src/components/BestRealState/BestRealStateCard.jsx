
const BestRealStateCard = ({image}) => {
  return (
    <div className="relative rounded-[5px] md:max-w-[382px] ">

      <img src={image} alt="image" className=" object-cover w-full " />
      <div className="flex items-center gap-3 text-white  text-xs absolute top-[14px] left-[14px]">
        <span className=" py-1 px-3 rounded-[5px] border border-white bg-[#22222280]">
          Fetured
        </span>
        <span className="py-1 px-3 rounded-[5px] border border-white bg-[#22222280]">
          3D
        </span>

      </div>
      
    </div>
  )
}

export default BestRealStateCard
