import facility from "../../assets/Images/facilities.jpg";

export default function Hero() {
  return (
    <section className="relative mb-20 w-full h-[480px] sm:h-[560px] md:h-[700px] lg:h-[900px]">

      {/* Background image */}
      <img
        src={facility}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom-left overlay box */}
      <div
        className="absolute bottom-0 left-0
        translate-y-0 lg:translate-y-1/4
        bg-[#E9E9E9] 
        w-full sm:w-[80%] lg:w-[70%] 
        max-w-2xl 
        px-4 sm:px-6 lg:px-10 
        py-6 sm:py-8 lg:py-12
        z-10"
      >

        <h1 className="text-[#0B2C4D] 
                 text-xl sm:text-2xl md:text-4xl lg:text-5xl 
                 leading-tight font-medium">
          Come Home To A 
          <br />
          Vibrant World
        </h1>

        {/* CTA button */}
        <button
          className="mt-4 sm:mt-6 flex items-center gap-3 
               border border-[#0B2C4D] 
               text-[#0B2C4D] 
               px-5 sm:px-6 py-2.5 sm:py-3
               text-sm sm:text-base
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
