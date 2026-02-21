import React from "react";
import { motion } from "framer-motion";

const FacultyPublication = () => {

  /* ================= STATIC DATA (API READY) ================= */
  const publications = [
    { sno: 1, category: "Journal Publications (UGC Care / SCI / Web of Science)", total: 135 },
    { sno: 2, category: "Peer-Reviewed Publications (Refereed Journals)", total: 25 },
    { sno: 3, category: "Conference Proceedings (National & International)", total: 86 },
    { sno: 4, category: "Book Publications (Textbooks / Reference Books)", total: 19 },
    { sno: 5, category: "Book Chapters (Edited Volumes with ISBN)", total: 14 },
    { sno: 6, category: "Patents (Filed / Published / Granted)", total: 5 },
    { sno: 7, category: "Copyrights", total: 1 },
    { sno: 8, category: "Faculty Development Programs (FDP) Attended/Organized", total: 91 }
  ];


  /* ================= ANIMATION ================= */
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  /* ================= UI ================= */
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center text-xl md:text-2xl font-bold text-[#002147] mb-8"
        >
          Department of Commerce, IPS Academy, Indore
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center text-lg md:text-xl font-semibold mb-8"
        >
          Summary of Faculty Contributions (2013–2025)
        </motion.h2>


        {/* TABLE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-x-auto bg-white rounded-2xl shadow border"
        >

          <table className="min-w-full text-sm md:text-base">

            {/* HEAD */}
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left w-16">S.No</th>
                <th className="p-3 text-left">Publication / Activity Category</th>
                <th className="p-3 text-left w-48">Total Numbers (2013–2025)</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {publications.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={fadeUp}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">{row.sno}</td>
                  <td className="p-3">{row.category}</td>
                  <td className="p-3 font-semibold text-[#002147]">
                    {row.total}
                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>

        </motion.div>

      </div>

    </section>
  );
};

export default FacultyPublication;