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
    <section className="bg-[#002147] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-medium mb-2">
          Experience, Learn, Lead: The IBMR Advantage
        </h2>

        <div className="w-32 h-[2px] bg-white mb-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="border border-white/20 rounded-lg p-6 hover:bg-white/5 transition"
            >
              <h6 className="text-xl font-medium mb-2">{i.title}</h6>
              <p className="text-white/70">{i.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
