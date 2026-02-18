import { resolveImageUrl } from "../../services/api";

export default function Facilities({ data }) {
  const title = data?.title || "Facilities";
  const subtitle = data?.subtitle || "";
  const description = data?.description || "";
  const facilityItems = data?.facilities || [];

  return (
    <section id="facilities" className="bg-black py-12 sm:py-14 md:py-16 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-center md:text-left">
          {title}
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-white mt-3 mb-6 mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 sm:mb-10 text-center md:text-left">
          <h5 className="text-xl sm:text-2xl font-medium">
            {subtitle}
          </h5>

          <p className="text-gray-400 text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">

          {facilityItems.map((f, i) => (
            <div key={i} className="bg-gray-200 text-black">

              <div className="bg-yellow-600 text-center font-semibold py-2 uppercase tracking-wide text-sm sm:text-base">
                {f.name}
              </div>

              <img
                src={resolveImageUrl(f.image)}
                alt={f.name}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />

              <div className="p-4 text-xs sm:text-sm font-medium text-center">
                {f.description}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
