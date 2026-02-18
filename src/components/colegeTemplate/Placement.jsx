import { useState } from "react";
import { resolveImageUrl } from "../../services/api";

export default function Placement({ placement, testimonials }) {

  const placementData = placement || {};
  const testimonialsData = testimonials || {};
  const testimonialItems = testimonialsData.items || [];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonialItems.length) % testimonialItems.length);

  const next = () =>
    setIndex((index + 1) % testimonialItems.length);

  const first = testimonialItems[index];
  const second = testimonialItems[(index + 1) % testimonialItems.length];

  return (
    <section id="placement" className="bg-[#f7f9fc] py-12 sm:py-14 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP CONTENT */}
        {placementData.title && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">

            <div className={`text-center lg:text-left ${placementData.image_position === "left" ? "order-2" : ""}`}>
              {placementData.tag && (
                <span className="text-yellow-600 tracking-widest font-medium text-sm sm:text-base">
                  {placementData.tag}
                </span>
              )}

              <h3 className="text-[#002147] text-2xl sm:text-3xl md:text-4xl font-medium mt-2">
                {placementData.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                {placementData.description}
              </p>

              {placementData.items && placementData.items.length > 0 && (
                <ul className="mt-6 space-y-2 inline-block text-left">
                  {placementData.items.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-yellow-600 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {placementData.image && (
              <div className={`text-center ${placementData.image_position === "left" ? "order-1" : ""}`}>
                <img
                  src={resolveImageUrl(placementData.image)}
                  alt={placementData.title}
                  className="rounded shadow-lg mx-auto w-full max-w-md lg:max-w-full"
                />
              </div>
            )}

          </div>
        )}

        {/* TESTIMONIALS */}
        {testimonialItems.length > 0 && (
          <>
            <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium text-center md:text-left">
              {testimonialsData.title || "Testimonials"}
            </h2>

            <div className="w-24 sm:w-32 h-[2px] bg-[#002147] mt-3 mb-8 sm:mb-10 mx-auto md:mx-0"></div>

            <div className="relative max-w-5xl mx-auto px-6 sm:px-0">

              {/* GRID: 1 on mobile, 2 on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {[first, second].filter(Boolean).map((t, i) => (
                  <div key={i} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow border">

                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      {t.image && (
                        <img
                          src={resolveImageUrl(t.image)}
                          alt={t.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#002147] object-cover"
                        />
                      )}
                      <div>
                        <h6 className="font-bold text-[#002147] text-sm sm:text-base">{t.name}</h6>
                        <span className="text-gray-500 text-xs sm:text-sm">{t.designation}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base">{t.story}</p>

                  </div>
                ))}

              </div>

              {/* NAV BUTTONS */}
              <button
                onClick={prev}
                className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-[#002147] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full z-10"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-[#002147] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full z-10"
              >
                ›
              </button>

            </div>
          </>
        )}

      </div>
    </section>
  );
}
