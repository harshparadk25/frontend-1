const items = [
  { title: "Experiential Learning", desc: "Industry projects, internships, and case studies" },
  { title: "Skill Development", desc: "Certifications in analytics, digital marketing, NSE and more" },
  { title: "Research Focus", desc: "Publication opportunities in journals" },
  { title: "Holistic Growth", desc: "Leadership workshops and cultural events" },
  { title: "Internship & Projects", desc: "Industrial projects for real exposure" },
  { title: "Industry Connect", desc: "Guest lectures & networking events" },
];

export default function Advantage() {
  return (
    <section className="bg-[#002147] py-12 sm:py-14 md:py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-2 text-center md:text-left">
          Experience, Learn, Lead: The IBMR Advantage
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-white mb-8 sm:mb-10 mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="border border-white/20 rounded-lg p-5 sm:p-6 hover:bg-white/5 transition text-center sm:text-left"
            >
              <h6 className="text-lg sm:text-xl font-medium mb-2">{i.title}</h6>
              <p className="text-white/70 text-sm sm:text-base">{i.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
