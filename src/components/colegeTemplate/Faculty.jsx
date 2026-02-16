import achalImg from "../../assets/Images/achal.png";
import kumudiniImg from "../../assets/Images/Mrs. Kumudini.jpg";
import yogendraJainImg from "../../assets/Images/Mr. Yogendra Jain.png";

const faculty = [
  {
    name: "Ar. Achal Choudhary",
    degree: "Ph.D – Artificial Intelligence",
    img: achalImg,
    desc: "15+ years of teaching & research experience. Published 40+ research papers.",
  },
  {
    name: "Prof. Neha Verma",
    degree: "MBA, IIM Ahmedabad",
    img: kumudiniImg,
    desc: "Corporate trainer & consultant with 12+ years experience.",
  },
  {
    name: "Dr. Rakesh Patel",
    degree: "Ph.D – Data Science",
    img: yogendraJainImg,
    desc: "Senior researcher & data scientist working with top MNCs.",
  },
  {
    name: "Dr. Rakesh Patel",
    degree: "Ph.D – Data Science",
    img: yogendraJainImg,
    desc: "Senior researcher & data scientist working with top MNCs.",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="bg-gradient-to-br from-[#0b1c39] to-[#112a52] text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-medium">
          Faculty
        </h2>

        <div className="w-32 h-[2px] bg-white mt-3 mb-4"></div>

        <h4 className="text-xl mb-4">
          Be trained by <span className="text-yellow-400">India's leading experts</span>
        </h4>

        <p className="text-gray-300 max-w-xl mb-10">
          Our faculty team consists of renowned academicians, industry professionals
          and research scholars who bring deep domain expertise into every classroom.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {faculty.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur rounded overflow-hidden hover:translate-y-[-6px] transition"
            >
              <img src={f.img} className="w-full h-64 object-cover" />

              <div className="p-5">
                <h5 className="font-medium">{f.name}</h5>
                <span className="text-yellow-400 text-sm">{f.degree}</span>
                <p className="text-gray-300 text-sm mt-2">{f.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
