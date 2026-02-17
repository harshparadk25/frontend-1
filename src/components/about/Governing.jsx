import achalImg from "../../assets/Images/achal.png";
import yogendraJainImg from "../../assets/Images/Mr. Yogendra Jain.png";
import kumudiniImg from "../../assets/Images/Mrs. Kumudini.jpg";
import urmilaJainImg from "../../assets/Images/Mrs. Urmila Jain.png";

export default function Governing() {

  const leaders = [
    { img: achalImg, name: "Ar. Achal Choudhary", role: "President" },
    { img: yogendraJainImg, name: "Mr. Yogendra Jain", role: "Vice President" },
    { img: kumudiniImg, name: "Mrs. K. Choudhary", role: "Secretary" },
    { img: urmilaJainImg, name: "Mrs. Urmila Jain", role: "Treasurer" },
  ];

  const executiveMembers = [
    "Rajesh Choudhary",
    "Mr. Dharmendra Jain",
    "Mr. Nishit Jain",
    "Ar. Shikha Choudhary",
    "Ms. Nidhi Jain"
  ];

  const advisoryBoard = [
    {
      name: "Dr. M.S. Sodha",
      desc: "Ex. VC, Indore, Bhopal & Lucknow Universities"
    },
    {
      name: "Ar. Uttam C. Jain",
      desc: "Eminent Architect"
    },
    {
      name: "Er. Jagdish Chhabria",
      desc: "Eminent Architect"
    }
  ];

  return (
    <section className="bg-[#F0EEEF] py-16 sm:py-12">

      <div className="max-w-7xl mx-auto px-6 sm:px-4">

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl sm:text-3xl font-semibold text-[#002147] leading-tight">
          Governing Body
        </h3>

        <div className="h-[2px] w-48 sm:w-36 bg-[#FF7373] my-6 sm:my-5" />

        {/* Governing Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
          {leaders.map((m, i) => (
            <div key={i}>
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-[300px] sm:h-[260px] object-cover mb-3 rounded"
              />
              <div className="text-xl sm:text-lg font-medium text-[#002147]">
                {m.name}
              </div>
              <div className="text-sm sm:text-xs text-gray-600">
                {m.role}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Members */}
        <div className="pt-16 sm:pt-12">
          <h5 className="text-3xl sm:text-2xl font-medium text-[#002147] mb-6 sm:mb-5">
            Executive Members
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[#3A3A3A] gap-y-3 sm:gap-y-2">
            {executiveMembers.map((name, i) => (
              <div key={i} className="border-b border-[#D7D7D7] pb-3 text-xl sm:text-lg font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="pt-16 sm:pt-12">
          <h5 className="text-3xl sm:text-2xl font-medium text-[#002147] mb-6 sm:mb-5">
            Advisory Board
          </h5>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:gap-5">
            {advisoryBoard.map((member, i) => (
              <div key={i} className="border-b border-[#D7D7D7] pb-3">
                <div className="text-xl sm:text-lg font-medium text-[#3A3A3A]">
                  {member.name}
                </div>
                <p className="text-base sm:text-sm font-medium text-[#3A3A3A]">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
