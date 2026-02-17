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
    <section className="bg-[#F0EEEF] py-12 sm:py-16 md:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:text-6xl font-semibold text-[#002147] leading-tight">
              An infrastructure designed to make
              <br />
              <span className="inline-block border-b-2 border-[#FF7373] pb-1">
                your ideas
              </span>{" "}
              happen
            </h2>
          </div>

          <p className="text-[#3A3A3A] text-sm sm:text-base md:text-lg leading-relaxed">
            Bring your ideas and make them successful growth stories at the IPS Academy Incubation Centre.
            Our multidisciplinary hub brings together students, faculty, and alumni from all departments
            to build solutions that matter.
          </p>

        </div>


        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">

          <div className="bg-[#0CC2FE] text-[#002147] p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl md:text-[32px] font-medium mb-3 leading-tight">
              Vibrant Entrepreneurial Ecosystem
            </h3>
            <p className="leading-[22px] text-sm sm:text-base">
              The Incubation Centre reflects IPS Academy’s commitment to holistic, future-oriented
              education - shaping graduates who think boldly, act responsibly and create meaningful impact.
            </p>
          </div>

          <div className="bg-[#FF7373] text-[#002147] p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl md:text-[32px] font-medium mb-3 leading-tight">
              A Collaboration Across Disciplines
            </h3>
            <p className="leading-[22px] text-sm sm:text-base">
              Diverse minds from multiple disciplines and skillsets come together to build bold,
              relevant and real-world-ready ventures at the IPSA Incubation Centre.
            </p>
          </div>

        </div>


        {/* ICON GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-14">

          {features.map((f, i) => (
            <div key={i} className="mt-2">

              <img
                src={f.icon}
                alt={f.title}
                className="w-12 sm:w-14 mb-3 sm:mb-4 
                [filter:brightness(0)_saturate(100%)_invert(15%)_sepia(35%)_saturate(900%)_hue-rotate(190deg)_brightness(85%)_contrast(110%)]"
              />

              <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#002147]">
                {f.title}
              </p>

              <span className="block text-[#002147] text-sm sm:text-sm md:text-base mt-1 leading-relaxed">
                {f.desc}
              </span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
