import facility from "../../assets/Images/facilities.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[960px] overflow-hidden">
    
          {/* Background image */}
          <img
            src={facility}
            alt="Hero"
            className="absolute inset-0 w-full h-[1160px]"
          />
    
          {/* Bottom-left overlay box */}
          <div className="absolute bottom-0 left-0 
                bg-[#E9E9E9] 
                w-full sm:w-[80%] lg:w-[70%] 
                max-w-2xl 
                px-6 sm:px-8 lg:px-10 
                py-8 sm:py-10 lg:py-12">

  <h1 className="text-[#0B2C4D] 
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                 leading-tight font-medium">
    Come Home To A 
    <br />
    Vibrant World
  </h1>

  {/* CTA button */}
  <button
    className="mt-6 flex items-center gap-3 
               border border-[#0B2C4D] 
               text-[#0B2C4D] 
               px-6 py-3
               font-medium
               hover:bg-[#0B2C4D] hover:text-white 
               transition duration-300"
  >
    Explore Now
  </button>

</div>
    
        </section>
  );
}
