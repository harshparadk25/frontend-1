import { useState } from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MBA | TCS",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "At IBMR, classroom learning meets real-world success. Placement training, internships and recruiter opportunities helped me achieve my career goals.",
  },
  {
    name: "Neha Verma",
    role: "MBA | Deloitte",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "IBMR transformed my journey from student to professional through excellent mentorship and placement support.",
  },
];

export default function Placement() {

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section id="placement" className="bg-[#f7f9fc] py-12 sm:py-14 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">

          <div className="text-center lg:text-left">
            <span className="text-yellow-600 tracking-widest font-medium text-sm sm:text-base">
              PLACEMENT
            </span>

            <h3 className="text-[#002147] text-2xl sm:text-3xl md:text-4xl font-medium mt-2">
              So Will You — They Made It Happen At IBMR
            </h3>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Our dedicated placement support transitions students from academics
              to industry through training, internships and mentorship.
            </p>

            <ul className="mt-6 space-y-2 inline-block text-left">
              {[
                "Tailored career guidance",
                "Soft skills & interview training",
                "Top recruiters & packages",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-yellow-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900"
              className="rounded shadow-lg mx-auto w-full max-w-md lg:max-w-full"
            />
          </div>

        </div>

        {/* TESTIMONIALS */}
        <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium text-center md:text-left">
          Testimonials
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-[#002147] mt-3 mb-8 sm:mb-10 mx-auto md:mx-0"></div>

        <div className="relative max-w-2xl mx-auto px-6 sm:px-0">

          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow border">

            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img
                src={t.img}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#002147]"
              />
              <div>
                <h6 className="font-bold text-[#002147] text-sm sm:text-base">{t.name}</h6>
                <span className="text-gray-500 text-xs sm:text-sm">{t.role}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">{t.text}</p>

          </div>

          {/* NAV BUTTONS */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-[#002147] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-[#002147] text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}
