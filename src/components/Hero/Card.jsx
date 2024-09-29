
const Card = ({icon,title,subTitle}) => {
  return (
    <div className="flex items-center justify-start gap-3 w-[230px]" >
        <div className="relative h-[60px] w-[60px] flex items-center justify-center">
            <img src={icon} alt={`icon ${title}`} className="aspect-square	w-[30px] h-[30px]" />
            <div className="absolute bg-primary opacity-5 h-full w-full rounded-full"></div>
        </div>

        <div className="flex flex-col gap-2 items-start ">
            <span>
                {title}
            </span>
            <span>
                {subTitle}
            </span>

        </div>
      
    </div>
  )
}

export default Card
