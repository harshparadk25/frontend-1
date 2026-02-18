const facilities = [
  {
    title: "Library",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    desc: "State-of-the-art library with 35,000+ books and 100+ journals.",
  },
  {
    title: "Classrooms",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    desc: "Spacious classrooms with modern furniture and smart panels.",
  },
  {
    title: "Computer Labs",
    img: "https://images.unsplash.com/photo-1719159381981-1327b22aff9b",
    desc: "Advanced systems with seamless Wi-Fi for digital learning.",
  },
  {
    title: "Seminar Hall",
    img: "https://plus.unsplash.com/premium_photo-1679547202918-bf37285d3caf",
    desc: "Modern AV seminar hall with 300 seat capacity.",
  },
  {
    title: "Hostel",
    img: "https://plus.unsplash.com/premium_photo-1717026836061-32ec43465f9b",
    desc: "Safe and comfortable on-campus hostel environment.",
  },
  {
    title: "Mess & Canteen",
    img: "https://images.unsplash.com/photo-1605474621663-7ed81a1dcd55",
    desc: "Nutritious meals with hygienic preparation.",
  },
  {
    title: "Transport",
    img: "https://www.ipsacademy.org/assets/images/Transport-300x188.jpg",
    desc: "Dedicated fleet for smooth city transportation.",
  },
  {
    title: "Sports",
    img: "https://media.istockphoto.com/id/1164736873/photo/silhouette-action-sport-outdoors-of-a-group-of-kids-having-fun-playing-soccer-football-for.jpg",
    desc: "Indoor and outdoor sports facilities for fitness and teamwork.",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-black py-12 sm:py-14 md:py-16 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-center md:text-left">
          Facilities
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-white mt-3 mb-6 mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 sm:mb-10 text-center md:text-left">
          <h5 className="text-xl sm:text-2xl font-medium">
            60 acres of excellence. <br />
            Limitless success for you.
          </h5>

          <p className="text-gray-400 text-sm sm:text-base">
            IBMR is more than a campus. It is a thriving community to explore, learn and grow with like-minded peers. Our vibrant campus offers you the space to discover and unleash your true potential.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">

          {facilities.map((f, i) => (
            <div key={i} className="bg-gray-200 text-black">

              <div className="bg-yellow-600 text-center font-semibold py-2 uppercase tracking-wide text-sm sm:text-base">
                {f.title}
              </div>

              <img
                src={f.img}
                alt={f.title}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />

              <div className="p-4 text-xs sm:text-sm font-medium text-center">
                {f.desc}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
