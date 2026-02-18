import facility from "../../assets/Images/facilities.jpg";

export default function Hero() {
  return (
    <section className="
      relative mb-12 sm:mb-16 lg:mb-20
      w-full max-w-[1492px]
      h-[420px] sm:h-[520px] md:h-[620px] lg:h-[736px]
      mx-auto px-4
    ">

      {/* Background image */}
      <img
        src={facility}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom-left overlay box */}
      <div
        className="absolute bottom-0 left-0
        translate-y-0 lg:translate-y-1/7
        bg-[#E9E9E9]
        w-full sm:w-[85%] md:w-[70%] lg:w-[40%] xl:w-[35%]
        max-w-3xl
        px-4 sm:px-6 md:px-8 lg:px-10
        py-4 sm:py-7 md:py-7 lg:py-5
        z-10"
      >

        <h1 className="
          text-[#0B2C4D]
          text-xl sm:text-2xl md:text-3xl lg:text-5xl
          leading-tight font-medium
        ">
          Your Community
          <br />
          Your Campus
          <br />
          Your Vibe
        </h1>

        {/* CTA button */}
        <button
          className="mt-4 sm:mt-5 md:mt-6
               flex items-center gap-3
               border border-[#0B2C4D]
               text-[#0B2C4D]
               px-4 sm:px-5 md:px-6
               py-2 sm:py-2.5 md:py-3
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
