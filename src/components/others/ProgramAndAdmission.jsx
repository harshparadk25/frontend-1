import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

/* ---------------- DATA ---------------- */

const programs = [
  {
    course: (
      <>
        <b>B.Com (Elective with Professional Certification)</b>
        <ul className="list-disc pl-5 mt-2">
          <li>B.Com + US CMA</li>
          <li>B.Com + US ACCA</li>
          <li>B.Com + Business Analytics</li>
          <li>B.Com + FinTech</li>
          <li>B.Com + Branding & Advertising</li>
        </ul>
      </>
    ),
    seats: "480",
    eligibility: "10+2 in appropriate discipline (recognized board)",
  },
  {
    course: (
      <>
        <b>B.Com (Elective)</b>
        <ul className="list-disc pl-5 mt-2">
          <li>Finance</li>
          <li>Taxation</li>
          <li>Economics</li>
          <li>Computer Applications</li>
          <li>Foreign Trade</li>
        </ul>
      </>
    ),
    seats: "",
    eligibility: "",
  },
  {
    course: (
      <>
        <b>Bachelor (Honors) in Commerce</b>
      </>
    ),
    seats: "",
    eligibility: "Graduation in Commerce",
  },
  {
    course: (
      <>
        <b>M.Com</b> (Marketing, Accounting, Taxation, Financial Analysis & Control)
      </>
    ),
    seats: "30",
    eligibility: "B.Com (recognized university)",
  },
];

const contacts = {
  phones: [
    "6232626261",
    "9111008161",
    "07314014589",
    "07314014515",
  ],
  email: "hod.coc@ipsacademy.org",
};

/* ---------------- COMPONENT ---------------- */

const ProgramAndAdmission = () => {
  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-xl md:text-3xl font-bold text-[#002147]">
            Department of Commerce, IPS Academy
          </h2>
          <p className="text-lg text-gray-700 mt-2 font-semibold">
            Program Offered, Eligibility & Seats
          </p>
        </motion.div>

        {/* TABLE */}
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border text-left">Course</th>
                <th className="p-4 border text-left w-28">Seats</th>
                <th className="p-4 border text-left">Eligibility</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((item, i) => (
                <motion.tr
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="align-top hover:bg-gray-50"
                >
                  <td className="p-4 border">{item.course}</td>
                  <td className="p-4 border font-semibold">{item.seats}</td>
                  <td className="p-4 border">{item.eligibility}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CONTACT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-white rounded-xl shadow p-6"
        >
          <h3 className="font-semibold text-[#002147] mb-3">
            Contact Details
          </h3>

          <p className="text-gray-700">
            Contact: {contacts.phones.join(", ")}
          </p>

          <p className="text-gray-700 mt-2">
            Email:{" "}
            <a
              href={`mailto:${contacts.email}`}
              className="text-blue-600 underline"
            >
              {contacts.email}
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProgramAndAdmission;