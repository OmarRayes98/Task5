import { dataBestRealData,dataBestRealTypes } from "@/constants/dataBestRealState"
import { cn } from "@/lib/utils";
import BestRealStateCard from "./BestRealStateCard";
import { Fragment, useRef, useState } from "react";
import Heading from "../Heading/Heading";


const BestRealState = () => {

    const [menuCategories, setMenuCategories] = useState(dataBestRealData);
    const whichActiveRef = useRef("all");

    const handleFilterCategory = (categoryType)=>{

        //if click same active button : compoare old with new values , not to continuse the rest code .
        if(categoryType ===  whichActiveRef.current){
            // alert("same Active button")
            return
        }
        
        whichActiveRef.current=categoryType;

        // orginal array for filtering , and store change in another varible
        const filterCards = dataBestRealData.filter((card)=>{
            if(categoryType==="all"){
                
                return dataBestRealData;
            }else{

                return card.category ===categoryType;
    
            }
            })
        
        setMenuCategories(filterCards)

    }

  return (
    <section className="pt-10 md:pt-20 pb-20 custom-container">

        <Heading title="Best Real Estate Deals" text="Lorem ipsum dolor sit amet, consectetur adipiscing eli"/>

      <section className="flex items-center gap-6 w-full overflow-x-auto mb-10">
        {
            dataBestRealTypes.map((item)=>(
                
                <span 
                key={item.id}
                onClick={()=>handleFilterCategory(item.category)}
                className={cn("font-normal text-[18px] leading-5 pb-3 text-nowrap cursor-pointer",
                whichActiveRef.current===item.category && "text-primary border-b-2 border-primary font-semibold")}
                >
                    {item.titleButton}
                </span>
                
            ))
        }
    
    </section>

    <article className="grid grid-cols-1 justify-center  sm:grid-cols-2  md:grid-cols-3 gap-4">
    {
        menuCategories.map((item)=>(
                <BestRealStateCard
                key={item.id}
                {...item}
                />
        ))
    }
    </article>

    </section>
  )
}

export default BestRealState
