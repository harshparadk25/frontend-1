import React from "react";
import { motion } from "framer-motion";

const AnnualEvent = () => {

  const events = [
    { sr: 1, name: "Udaan", description: "Induction Program" },
    { sr: 2, name: "Aatithyam", description: "Freshers Party" },
    { sr: 3, name: "Battle of Nerves", description: "Annual Sports Meet" },
    { sr: 4, name: "ULLAS", description: "Annual Fest" },
    { sr: 5, name: "Swasti", description: "Farewell" },
    { sr: 6, name: "Samrishta", description: "Alumni Meet" },
    { sr: 7, name: "Prashasti Parv", description: "Felicitation Program" },
    { sr: 8, name: "Ujjwal", description: "A series of CSR Program" },
    { sr: 9, name: "Shakti Parv", description: "Women Empowerment Program" },
    { sr: 10, name: "Tradathon", description: "Annual Trade Fest" },
    { sr: 11, name: "IPSA Busy Buzz", description: "Business Plan Competition" },
    { sr: 12, name: "Budget Dialogue", description: "Post Budget Discussion" },
    { sr: 13, name: "Snapathon", description: "Social Media Fest" },
    { sr: 14, name: "Aanandam - The Happiness Carnival", description: "Festive & community gathering" },
  ];

  const columns = [
    { key: "sr", label: "Sr. No." },
    { key: "name", label: "Annual Event Name" },
    { key: "description", label: "Details" },
  ];

  // Framer animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };

  const row = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

  return (
    <section className="py-10 px-3 sm:px-6 bg-white">

      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-6"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
          COLLEGE OF COMMERCE, IPSA, INDORE
        </h2>
        <p className="font-semibold text-base sm:text-lg mt-1">
          Annual Events List
        </p>
      </motion.div>

      {/* Table wrapper */}
      <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl shadow border">

        <table className="w-full text-xs sm:text-sm md:text-base border-collapse">

          {/* Header */}
          <thead className="bg-gray-100">
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  className="border px-3 py-2 sm:px-4 sm:py-3 text-center font-semibold"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <motion.tbody
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {events.map((event, i) => (
              <motion.tr
                key={i}
                variants={row}
                className="text-center hover:bg-gray-50 transition"
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    className="border px-3 py-2 sm:px-4 sm:py-3"
                  >
                    {event[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>

        </table>

      </div>
    </section>
  );
};

export default AnnualEvent;