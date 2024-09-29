
const Heading = ({title,text}) => {
  return (
    <section className="mb-10">
        <h2 className="font-bold text-3xl md:text-[39px] leading-10 pb-3 ">
            {title}
        </h2>
        <p className="opacity-50">
            {text}
        </p>
    
    </section>
  )
}

export default Heading
