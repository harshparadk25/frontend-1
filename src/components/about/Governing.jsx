import { motion } from "framer-motion";
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
    <section className="bg-[#F0EEEF] py-16">

      <div className="max-w-6xl mx-auto px-3">

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl md:text-[60px] font-medium text-[#002147]"
        >
          Governing Body
        </motion.h3>

        <div className="h-[2px] w-60 bg-[#FF7373] my-3 mb-8" />

        {/* Governing Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {leaders.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-[300px] object-cover mb-3"
              />
              <div className="text-xl font-medium text-[#002147]">
                {m.name}
              </div>
              <div className="text-sm text-gray-600">
                {m.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Members */}
        <div className="pt-16">
          <h5 className="text-3xl font-medium text-[#002147] mb-6">
            Executive Members
          </h5>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[#3A3A3A]">
            {executiveMembers.map((name, i) => (
              <div key={i} className="border-b border-[#D7D7D7] pb-3 text-xl font-medium">
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="pt-16">
          <h5 className="text-3xl font-medium text-[#002147] mb-6">
            Advisory Board
          </h5>

          <div className="grid md:grid-cols-3 gap-6">
            {advisoryBoard.map((member, i) => (
              <div key={i} className="border-b border-[#D7D7D7] pb-3">
                <div className="text-xl font-medium text-[#3A3A3A]">
                  {member.name}
                </div>
                <p className="text-base font-medium text-[#3A3A3A]">
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
