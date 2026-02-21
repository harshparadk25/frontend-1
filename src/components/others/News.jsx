import React from "react";
import { motion } from "framer-motion";

/* -------------------- TABLE DATA -------------------- */
const newsData = [
  {
    date: "26 Jan 2023",
    event: "National NCC Achievement",
    description:
      "An NCC Cadet from the Commerce Department was honored by the Honorable Prime Minister of India during the Republic Day Parade in Delhi.",
  },
  {
    date: "Sep 2024",
    event: "Intercollege Debate Competition",
    description:
      "A platform for students to showcase oratorical skills and critical thinking on contemporary issues, organized by the Commerce Dept.",
  },
  {
    date: "Sep 2024",
    event: "Intercollege Mehndi Designing",
    description:
      "A creative cultural competition celebrating traditional art, organized for students across various colleges.",
  },
  {
    date: "20 Nov 2024",
    event: "District Level Intercollege Dance Competition",
    description:
      "A major performing arts event organized by the Commerce Department to promote cultural talent at the district level.",
  },
  {
    date: "28 Nov 2025",
    event: "MP State Level Business Plan Pitching",
    description:
      "A high-level competition focused on entrepreneurship and innovation.",
  },
];

/* -------------------- IMAGE NEWS DATA -------------------- */
/* Replace image paths with your assets later or API urls */
const mediaNews = [
  {
    image: "/images/news1.jpg",
    title: "Farewell Party Cultural Event",
    desc: "Students presented cultural performances during farewell celebration.",
  },
  {
    image: "/images/news2.jpg",
    title: "Online Webinar During Covid",
    desc: "Interactive webinar encouraging reading and learning habits.",
  },
  {
    image: "/images/news3.jpg",
    title: "Women Empowerment Initiative",
    desc: "Launch of empowerment campaign with faculty and students.",
  },
  {
    image: "/images/news4.jpg",
    title: "Intercollege Cultural Competition",
    desc: "Students winning awards at district level competition.",
  },
];

/* -------------------- ANIMATION -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45 },
  }),
};

/* -------------------- COMPONENT -------------------- */
const News = ({
  tableData = newsData,
  galleryData = mediaNews,
}) => {
  return (
    <section className="bg-gray-50 py-10 md:py-14">

      <div className="max-w-6xl mx-auto px-4">

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#002147]"
        >
          News & Events Coverage: IPS Academy, Indore
        </motion.h2>

        <p className="text-center text-gray-600 mt-2 mb-10">
          Department of Commerce
        </p>

        {/* ================= TABLE ================= */}
        <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow mb-14">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4 border">Date</th>
                <th className="p-4 border">Event</th>
                <th className="p-4 border">Description</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((item, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="hover:bg-gray-50"
                >
                  <td className="p-4 border font-semibold">{item.date}</td>
                  <td className="p-4 border font-semibold text-[#002147]">
                    {item.event}
                  </td>
                  <td className="p-4 border text-gray-600">
                    {item.description}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE TABLE → CARDS ================= */}
        <div className="md:hidden space-y-4 mb-14">
          {tableData.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-4 rounded-xl shadow"
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="font-semibold text-[#002147] mt-1">
                {item.event}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= IMAGE NEWS SECTION ================= */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg md:text-2xl font-bold text-[#002147] mb-6"
        >
          News Media Coverage
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {galleryData.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-4">
                <h4 className="font-semibold text-[#002147] text-sm md:text-base">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default News;