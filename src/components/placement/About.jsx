import mentoringIcon from "../../assets/Images/mentoring.svg";
import skyscrapersIcon from "../../assets/Images/skyscrapers.svg";
import consultingIcon from "../../assets/Images/consulting.svg";
import skillIcon from "../../assets/Images/skill 1.svg";
import internshipIcon from "../../assets/Images/internship.svg";
import mechanicalIcon from "../../assets/Images/mechanical-engineering.svg";
import certificateIcon from "../../assets/Images/certificate 1.svg";

const features = [
  { title: "Corporate Mentoring", img: mentoringIcon },
  { title: "Industrial Visit", img: skyscrapersIcon },
  { title: "Expert Talk", img: consultingIcon },
  { title: "Soft Skills", img: skillIcon },
  { title: "Internship", img: internshipIcon },
  { title: "Industrial Training", img: mechanicalIcon },
  { title: "Industry-Linked Certifications", img: certificateIcon },
];

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <h2 className="text-6xl md:text-6xl font-semibold text-[#002147]">
            Where Opportunities 
            <br />
            <span className="border-b-2 border-[#FF7373]">
  Find You
</span>

          </h2>

          <p className="text-gray-700">
            At the Central Placement Cell, we offer comprehensive placement support that is designed to prepare our students for success; from campus life to a thriving career. Whether you're aiming for a specific industry or a particular role, our nationally recognized placement cell is committed to equipping you for success in an increasingly competitive job market.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="border p-6 hover:shadow-lg transition rounded bg-white"
            >
              <img
                src={f.img}
                className="w-14 h-14 mb-6"
              />
              <h3 className="text-xl font-medium text-[#002147]">{f.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
