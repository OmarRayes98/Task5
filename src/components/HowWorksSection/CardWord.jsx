import { cn } from "@/lib/utils"

const CardWord = ({logo,title,subText,hasStyle}) => {
  return (
    <div className={cn("flex flex-col gap-4 md:max-w-[380px] py-[15px] px-[10px]  md:py-[30px] md:px-5 rounded-[10px] md:rounded-[15px]",
        hasStyle && "bg-primary text-white"
    )}>
      <img src={logo} alt="icon" className="w-10 h-10"/>
      <h3 className="text-[22px] font-semibold leading-7">
      {title}
      </h3>
      <p className="opacity-50 text-sm font-normal">
        {subText}
      </p>
    </div>
  )
}

export default CardWord
