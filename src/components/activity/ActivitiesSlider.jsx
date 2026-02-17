import { useState, useEffect } from "react";

const slides = [
  [
    "https://ipsacademy.edu.in/media/2025/04/9-3-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/10-1-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/11-4-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/14-2-1-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/3-6-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/11-4-768x454.jpg",
  ],
  [
    "https://ipsacademy.edu.in/media/2025/04/9-3-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/10-1-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/11-4-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/14-2-1-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/3-6-768x454.jpg",
    "https://ipsacademy.edu.in/media/2025/04/11-4-768x454.jpg",
  ],
];

const EventSlider = () => {

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 md:py-20 px-4 sm:px-5">

      {/* Heading */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-4 items-start">

        <div>
          <h2 className="text-2xl md:text-4xl sm:text-3xl font-semibold leading-tight">
            A calendar full of celebrations
          </h2>
          <div className="w-20 h-[3px] bg-red-400 mt-3"></div>
        </div>

        <p className="text-gray-600 text-base sm:text-[15px]">
          Life at IPS Academy is a melting pot of diverse cultures, a plethora
          of events, learning opportunities and peer activities that enhance
          your experience on campus.
        </p>

      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto mt-10 sm:mt-8 relative">

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute right-14 sm:right-12 xs:right-10 -top-10 sm:-top-8 border border-red-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-50 bg-white"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-4 -top-10 sm:-top-8 border border-red-400 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-50 bg-white"
        >
          ›
        </button>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4">

          {slides[index].map((img, i) => (
            <div key={i} className="cursor-pointer">
              <img
                src={img}
                alt={`event-${i}`}
                className="
                  w-full h-[320px] sm:h-[260px] xs:h-[220px] object-cover
                  border-2 border-[#ff7373]
                  shadow-md
                  transition duration-300
                  hover:-translate-y-2 hover:scale-105 hover:shadow-xl
                "
              />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default EventSlider;
