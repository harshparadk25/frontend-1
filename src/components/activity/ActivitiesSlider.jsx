import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ActivitiesSlider() {

  const [active, setActive] = useState(null);

  const cards = Array.from({ length: 6 });

  return (
    <section className="py-[100px] px-[5px] md:py-[50px]">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADING */}
        <div className="grid md:grid-cols-2 gap-6 items-start">

          <div>
            <h2 className="text-3xl font-semibold text-[#002147]">
              365 Days to <br /> Become Your Best
            </h2>
            <div className="w-24 h-[2px] bg-[#002147] mt-2"></div>
          </div>

          <p className="md:text-left text-center md:pt-0 pt-3">
            Life at IPS Academy is a melting pot of diverse cultures,
            events, learning opportunities and peer activities that
            enhance your experience on campus.
          </p>

        </div>

        {/* PAGINATION */}
        <div className="flex justify-end items-center mt-[-31px] mb-[45px] md:mt-[-31px] md:mb-[45px]">

          <div className="flex gap-2">

            <button className="border border-[#FF7373] text-[#FF7373] rounded-full w-[30px] h-[30px] flex items-center justify-center">
              <ChevronLeft size={16} />
            </button>

            <button className="border border-[#FF7373] text-[#FF7373] rounded-full w-[30px] h-[30px] flex items-center justify-center">
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[40px]">

          {cards.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`h-[320px] bg-[#D9D9D9] cursor-pointer
              ${active === i ? "border-2 border-blue-500 bg-[#f0f6ff]" : ""}`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
