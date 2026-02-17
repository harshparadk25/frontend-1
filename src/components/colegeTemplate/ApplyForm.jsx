export default function ApplyForm() {
  return (
    <section id="apply-form" className="bg-gradient-to-br from-[#060e22] to-[#0f2b5b] py-12 sm:py-14 md:py-16 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Apply for <span className="text-yellow-400">Admission 2026</span>
            <br />
            and Shape Your Future
          </h2>

          <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
            Start your journey with world-class faculty, industry-focused curriculum,
            and excellent placement opportunities.
          </p>

          <ul className="mt-6 space-y-2 inline-block text-left">
            {[
              "Industry Oriented Programs",
              "100% Placement Assistance",
              "Modern Infrastructure",
              "Scholarship Options Available",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-yellow-400 font-bold">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FORM */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8">

          <h4 className="font-bold text-lg sm:text-xl mb-5 text-center lg:text-left">Apply Now</h4>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full" placeholder="Full Name" />
            <input className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full" placeholder="Email" />

            <input className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full" placeholder="Mobile Number" />

            <select className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 w-full">
              <option className="text-black">Select Course</option>
              <option className="text-black">BCA</option>
              <option className="text-black">BBA</option>
              <option className="text-black">MBA</option>
            </select>

            <textarea
              className="md:col-span-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full"
              placeholder="Message (Optional)"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#002147] font-bold py-3 rounded-lg hover:opacity-90 transition w-full"
            >
              Submit Application
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
