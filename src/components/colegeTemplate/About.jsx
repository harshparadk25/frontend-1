export default function About() {
  return (
    <section id="about" className="py-12 sm:py-14 md:py-10">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 items-center">

        <div className="text-center md:text-left">
          <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium mr-5">
            About IBMR
          </h2>
          <div className="w-20 sm:w-44 h-[2px] bg-[#faa701] mt-3 mx-auto md:mx-0"></div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-gray-600 text-base sm:text-lg ">
            At IBMR, shape your future with an innovative, industry-tailored
            curriculum designed with real-world learning and global exposure.
            Build skills and deepen your industry insights to lead and succeed.
          </p>

          <button className="mt-5 bg-white border border-[#002147] text-black px-6 py-3  w-full sm:w-auto">
            Know More
          </button>
        </div>

      </div>
      <div className="bg-[#F0EEEF] mt-20 py-12 sm:py-14 md:py-16">

  <div className="max-w-6xl mx-auto px-4">

    {/* TITLE */}
    <h2 className="text-[#0B2C4D] text-3xl md:text-4xl font-semibold">
      Campus To Business Boardrooms
    </h2>

    {/* UNDERLINE */}
    <div className="w-40 h-[3px] bg-red-400 mt-3 mb-6"></div>

    {/* SUBTITLE */}
    <h3 className="text-[#0B2C4D] text-xl md:text-2xl mb-6">
      Make it happen at IBMR
    </h3>

    {/* LIST */}
    <ul className="space-y-5 text-gray-800">

      {[
        "Legacy of 30 years",
        "58-acre Lush Green Campus",
        "500+ Faculty Members",
        "500+ Eminent Recruiters",
        "100000+ Alumni Network",
        "Ranked among Top 50 Management Institutes",
        "NAAC A++ Accredited & NIRF Ranked (76–100 band)",
        "Approved Management & Economics Ph.D Research Centre of DAVV",
        "10,000+ Changemakers Community",
        "Harvard Case Studies & Real-time Simulations Based Learning"
      ].map((item, i) => (
        <li key={i} className="border-b border-gray-300 pb-4 flex gap-3">
          <span className="mt-2 w-2 h-2 bg-gray-700 rounded-full"></span>
          <span>{item}</span>
        </li>
      ))}

    </ul>

  </div>

</div>

    </section>
  );
}
