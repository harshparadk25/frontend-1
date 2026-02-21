import React from "react";
import { motion } from "framer-motion";

const IndustryPartner = () => {

  // 🔥 Dynamic column config (backend can send this later)
  const columns = [
    { key: "sl", label: "Sl. No." },
    { key: "mou", label: "Name of the MoU / linkage" },
    { key: "institution", label: "Name of the institution / industry with whom the MoU / linkage is made, with contact details" },
    { key: "year", label: "Year of signing MoU / linkage" },
    { key: "purpose", label: "Purpose of the MoU/Linkage (Internship, on-the-job training, project work, student / faculty exchange and collaborative research)" }
  ];

  // 🔥 Static now → API later
  const data = [
    { sl:1, mou:"Stydy In", institution:"SIUK", year:"2024", purpose:"Collaborative activity & training" },
    { sl:2, mou:"MakeIntern", institution:"MakeIntern", year:"2024", purpose:"Internship and training" },
    { sl:3, mou:"BFSI- SSC (Banking & Finance Skill Sector Council of India)", institution:"BFSI- SSC (Banking & Finance Skill Sector Council of India)", year:"2022", purpose:"Certificate courses" },
    { sl:4, mou:"CEDMAP (under MSME)", institution:"CEDMAP (under MSME)", year:"2023", purpose:"Training & Internship" },
    { sl:5, mou:"Shefali Business Solution, Indore (TnA- TEPL)", institution:"", year:"28/11/2024", purpose:"Training & Internship" },
    { sl:6, mou:"Miles", institution:"Miles education pvt ltd", year:"2025", purpose:"Collaborative activity & studies" },
    { sl:7, mou:"Arthnirmiti", institution:"Sunil Patodia Welfare Foundation", year:"", purpose:"Internship" },
    { sl:8, mou:"ISDC", institution:"", year:"2025", purpose:"Collaborative activity & studies" },
  ];

  // Framer animations
  const container = { hidden:{}, show:{ transition:{ staggerChildren:0.05 } } };
  const row = { hidden:{ opacity:0, y:12 }, show:{ opacity:1, y:0, transition:{ duration:0.3 } } };

  return (
    <section className="py-10 px-3 sm:px-6 bg-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity:0, y:-15 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.45 }}
        viewport={{ once:true }}
        className="max-w-7xl mx-auto text-center mb-6"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
          IPS Academy, Department of Commerce : MOU / Linkages
        </h2>
      </motion.div>

      {/* Table */}
      <div className="max-w-7xl mx-auto overflow-x-auto rounded-xl shadow border">

        <table className="w-full border-collapse text-[11px] sm:text-sm md:text-base">

          {/* Dynamic headers */}
          <thead className="bg-gray-100">
            <tr>
              {columns.map(col => (
                <th
                  key={col.key}
                  className="border px-3 py-2 text-center font-semibold min-w-[120px]"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Dynamic rows */}
          <motion.tbody
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true }}
          >
            {data.map((rowData, i) => (
              <motion.tr
                key={i}
                variants={row}
                className="hover:bg-gray-50 transition text-center"
              >
                {columns.map(col => (
                  <td key={col.key} className="border px-3 py-2">
                    {rowData[col.key] || ""}
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

export default IndustryPartner;