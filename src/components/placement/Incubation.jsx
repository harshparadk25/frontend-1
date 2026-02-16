import icon1 from "../../assets/Images/icon1.svg";
import icon2 from "../../assets/Images/icon2.svg";
import icon3 from "../../assets/Images/icon3.svg";
import icon4 from "../../assets/Images/icon4.svg";
import icon5 from "../../assets/Images/icon5.svg";

export default function Incubation() {

  const features = [
    {
      icon: icon1,
      title: "Orientation and awareness",
      desc: "Talks, lectures and discussions that introduce students to start-ups, innovation and entrepreneurial thinking."
    },
    {
      icon: icon2,
      title: "Skill-building workshops",
      desc: "Sessions on business modelling, design thinking, digital marketing, finance, IPR, pitching and more."
    },
    {
      icon: icon3,
      title: "Idea development",
      desc: "Hackathons, challenges and competitions to refine ideas, validate problems and shape strong value propositions."
    },
    {
      icon: icon4,
      title: "Incubation and mentoring",
      desc: "Structured support from industry experts, faculty mentors and alumni entrepreneurs to guide product development, market entry and scaling."
    },
    {
      icon: icon5,
      title: "Exposure and networking",
      desc: "Pitch days, investor collaborations with corporates, government bodies and ecosystem partners."
    },
    {
      icon: icon5,
      title: "Infrastructure support",
      desc: "Meeting rooms, high-speed internet, essential office facilities and access to labs, studios and prototyping spaces across IPS Academy’s institutes."
    }
  ];

  return (
    <section className="bg-[#F0EEEF] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TEXT */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-[#002147] leading-tight">
              An infrastructure designed to make
              <br />
              <span className="inline-block border-b-2 border-[#FF7373] pb-1">
                your ideas
              </span>{" "}
              happen
            </h2>
          </div>

          <p className="text-[#3A3A3A] text-base md:text-lg">
            Bring your ideas and make them successful growth stories at the IPS Academy Incubation Centre.
            Our multidisciplinary hub brings together students, faculty, and alumni from all departments
            to build solutions that matter.
          </p>

        </div>


        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-[#0CC2FE] text-[#002147] p-8 md:p-10">
            <h3 className="text-2xl md:text-[32px] font-medium mb-3 leading-tight">
              Vibrant Entrepreneurial Ecosystem
            </h3>
            <p className="leading-[22px]">
              The Incubation Centre reflects IPS Academy’s commitment to holistic, future-oriented
              education - shaping graduates who think boldly, act responsibly and create meaningful impact.
            </p>
          </div>

          <div className="bg-[#FF7373] text-[#002147] p-8 md:p-10">
            <h3 className="text-2xl md:text-[32px] font-medium mb-3 leading-tight">
              A Collaboration Across Disciplines
            </h3>
            <p className="leading-[22px]">
              Diverse minds from multiple disciplines and skillsets come together to build bold,
              relevant and real-world-ready ventures at the IPSA Incubation Centre.
            </p>
          </div>

        </div>


        {/* ICON GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

          {features.map((f, i) => (
            <div key={i} className="mt-2">

              <img
                src={f.icon}
                alt={f.title}
                className="w-14 mb-4 
                [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(35%)_saturate(900%)_hue-rotate(190deg)_brightness(85%)_contrast(110%)]"
              />

              <p className="text-xl md:text-2xl font-medium text-[#002147]">
                {f.title}
              </p>

              <span className="block text-[#002147] text-sm md:text-base mt-1">
                {f.desc}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
