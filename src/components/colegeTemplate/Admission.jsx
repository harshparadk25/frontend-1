const steps = [
  {
    num: 1,
    title: "Apply Online",
    desc: "Fill out the online admission form with accurate personal and academic details.",
  },
  {
    num: 2,
    title: "Document Verification",
    desc: "Submit required documents for eligibility check.",
  },
  {
    num: 3,
    title: "Counselling & Interview",
    desc: "Attend counselling session and interview if required.",
  },
  {
    num: 4,
    title: "Confirmation & Fee Payment",
    desc: "Confirm your seat by completing payment and formalities.",
  },
];

export default function Admission() {
  return (
    <section id="admission" className="bg-[#f8f9fc] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[#002147] text-3xl md:text-5xl font-medium">
          Admission Procedure
        </h2>

        <div className="w-32 h-[2px] bg-[#002147] mt-3 mb-4"></div>

        <p className="text-gray-600 mb-10">
          Follow these simple steps to begin your journey with us.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white p-6 rounded-xl text-center shadow hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center font-bold mb-3">
                {s.num}
              </div>

              <h6 className="font-semibold mb-2">{s.title}</h6>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
