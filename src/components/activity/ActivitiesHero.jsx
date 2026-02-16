// src/components/Activities/Hero.jsx
import activitiesImg from "../../assets/Images/activities.jpg";

const Hero = () => {
  return (
    <div className="w-full relative h-[60vh] md:h-[75vh] overflow-hidden">
      
      <img
        src={activitiesImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 
                bg-[#E9E9E9] 
                w-full sm:w-[80%] lg:w-[70%] 
                max-w-2xl 
                px-6 sm:px-8 lg:px-10 
                py-8 sm:py-10 lg:py-12">

  <h1 className="text-[#0B2C4D] 
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                 leading-tight font-medium">
    Events <br /> 365 days of celebration
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

    </div>
  );
};

export default Hero;
