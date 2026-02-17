import activitiesImg from "../../assets/Images/activities.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[80vh] overflow-hidden">

      <img
        src={activitiesImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center md:text-left">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-medium leading-tight max-w-xl mx-auto md:mx-0">
            Big career goals? <br />
            Make them real at IBMR
          </h1>

          <button className="mt-5 sm:mt-6 bg-yellow-400 hover:bg-yellow-500 text-[#002147] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded w-full sm:w-auto">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}
