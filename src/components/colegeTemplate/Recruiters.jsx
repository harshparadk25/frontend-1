const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/Infosys_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/TCS_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Wipro_Primary_Logo_Color_RGB.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Accenture_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/HCL_Technologies_logo.svg"
];

export default function Recruiters() {
  return (
    <section id="recruiters" className="bg-[#f7f9fc] py-12 sm:py-14 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0b1c39] text-center md:text-left">
          <span className="text-orange-500">150+</span> Recruiters
          <br />
          to help you realise your dream
        </h2>

        <p className="text-gray-600 mt-4 mb-8 sm:mb-10 max-w-xl text-center md:text-left mx-auto md:mx-0 text-sm sm:text-base">
          Our students are placed in top national and multinational companies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">

          {logos.map((l, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 sm:p-5 md:p-6 flex items-center justify-center shadow hover:-translate-y-1 transition"
            >
              <img
                src={l}
                className="max-h-8 sm:max-h-9 md:max-h-10 w-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
