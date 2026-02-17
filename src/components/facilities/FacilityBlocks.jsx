import wellness from "../../assets/Images/image 22.png";
import transport from "../../assets/Images/image 23.png";


const blocks = [
  {
    badge: "Wellness Centre",
    color: "#FFC73E",
    title: "Build Your Strength.\nFind Your Balance.",
    text: `Academic success truly thrives when all aspects of health - mental,
physical, and emotional well-being are in harmony. The Wellness Centre
on campus is your safe space to find this balance and experience a wholesome life.`,
    img: wellness,
    reverse: false,
  },
  {
    badge: "Transport",
    color: "#FF7373",
    title: "Safe transport at your service",
    text: `Live your dream life with our well-managed fleet of buses
connecting key locations across Indore city and Mhow.`,
    img: transport,
    reverse: true,
  },
  {
    badge: "Canteen",
    color: "#0CC2FE",
    title: "Wholesome meals\nJoyful flavours",
    text: `Your favourite hangout zone, the IPS canteen offers hygienic,
nutritious, and wholesome flavours that help you power through the day.`,
    img: null,
    reverse: false,
  },
  {
    badge: "Mess",
    color: "#FFC73E",
    title: "Taste of Home on Your Plate",
    text: `The hostel mess serves healthy, flavourful meals that comfort
your heart while delighting your tastebuds.`,
    img: null,
    reverse: true,
  },
];

export default function FacilityBlocks() {
  return (
    <section className="py-[80px] sm:py-[60px] xs:py-[40px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        {blocks.map((b, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-2 gap-10 sm:gap-8 gap-y-8 items-center mb-[30px] sm:mb-[40px]"
          >

            {/* TEXT */}
            <div className={b.reverse ? "lg:order-2 lg:pl-10" : ""}>

              <div
                className="px-4 py-1 text-[#002147] text-xl sm:text-lg text-base font-medium w-fit mb-2"
                style={{ backgroundColor: b.color }}
              >
                {b.badge}
              </div>

              <h2 className="text-3xl sm:text-2xl text-xl text-[#002147] font-semibold whitespace-pre-line leading-snug">
                {b.title}
              </h2>

              <div className="w-24 h-[2px] bg-[#002147] mt-2"></div>

              <p className="text-[#3A3A3A] mt-5 mb-2 text-base sm:text-[15px] leading-relaxed">
                {b.text}
              </p>

            </div>

            {/* IMAGE */}
            <div className={b.reverse ? "lg:order-1" : ""}>

              {b.img ? (
                <img
                  src={b.img}
                  alt={b.badge}
                  className="w-full h-[456px] lg:h-[456px] md:h-[380px] sm:h-[300px] h-[240px] object-cover"
                />
              ) : (
                <div className="w-full h-[456px] lg:h-[456px] md:h-[380px] sm:h-[300px] h-[240px] bg-[#D9D9D9]"></div>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
