import activitiesImg from "../../assets/Images/activities.jpg";

export default function ActivitiesHero() {
  return (
    <section className="relative w-full">

      <img
        src={activitiesImg}
        className="w-full h-[70vh] object-cover"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-4">

          <div className="bg-black/40 p-8">
            <h1 className="text-white text-4xl md:text-5xl leading-tight font-semibold">
              A Calendar Full of <br /> Learning
            </h1>

            <button className="mt-6 bg-[#002147] text-white px-6 py-2 hover:bg-[#081f36]">
              Explore Now
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
