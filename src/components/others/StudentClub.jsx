import React from "react";
import { motion } from "framer-motion";

const StudentClub = () => {

  const clubs = [
    { sr: 1, name: "The Artist Hub", motive: "Art and Hobby Club", mentor: "Dr. Meenakshi Gaikwad", coordinator: "Samriddhi Chaubey", deputy: "Prabhat Tiwari", members: ["Shashwat Garg"] },
    { sr: 2, name: "Indian Knowledge System (IKS)", motive: "Indian Knowledge system and Academic Event", mentor: "Dr. Archana Dwivedi", coordinator: "Abhishek Porwal", deputy: "Tapsaya Shukla", members: [] },
    { sr: 3, name: "Nayak", motive: "Class Representative", mentor: "Ms. Shallu Vats", coordinator: "Kashish Patidar", deputy: "Moksha Ostwal", members: ["Khushi Khushwaha", "Bhanu Pratap"] },
    { sr: 4, name: "The Book Worms", motive: "Literature", mentor: "Mr. Pramod Yadav", coordinator: "Prabhat Tiwari", deputy: "Vinu Mandloi", members: ["Rishabh Thakre", "Moksha Ostwal"] },
    { sr: 5, name: "Women Empowerment (Shakti)", motive: "Women Empowerment Club", mentor: "Dr. Archana Dwivedi", coordinator: "Radhika Neema", deputy: "Palak Sharma", members: [] },
    { sr: 6, name: "Battle of Nerves", motive: "Sports Activity", mentor: "Dr. Yogita Chandel", coordinator: "Bhanupratap Singh Panwar", deputy: "Siddhi Tiwari", members: [] },
    { sr: 7, name: "Founder's Club", motive: "Start-ups and incubation", mentor: "Dr. Pawan Pushpad", coordinator: "Avni Joshi", deputy: "Glory Mahajan", members: [] },
    { sr: 8, name: "Aanandam Club", motive: "Happiness", mentor: "Dr. Deevya Aggarwal", coordinator: "Yash Pratap", deputy: "Anshul Pandey", members: [] },
    { sr: 9, name: "The Wing", motive: "Placement", mentor: "Mr. Kshitij Khare", coordinator: "Shruti Jain", deputy: "Riya Kumari", members: ["Sibbi Singh", "Rudraksh Tamarkar"] },
    { sr: 10, name: "Viral Veins", motive: "Social Media and content writing", mentor: "Ms. Ocean Rana", coordinator: "Aditya Bandhu", deputy: "Sparsh Chaurasiya", members: [] },
  ];

  const maxMembers = Math.max(...clubs.map(c => c.members.length));

  // Framer animations
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
  const row = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

  return (
    <section className="py-10 px-3 sm:px-6 bg-white">

      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-6"
      >
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
          COLLEGE OF COMMERCE, IPSA, INDORE
        </h2>
        <p className="font-medium text-sm sm:text-base">(Students Activity Club)</p>
        <p className="text-sm sm:text-base mt-1">Session 2025-26</p>
      </motion.div>

      {/* Table wrapper */}
      <div className="max-w-6xl mx-auto overflow-x-auto rounded-xl shadow border">

        <table className="w-full text-[11px] sm:text-sm md:text-base border-collapse">

          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Sr. No.</th>
              <th className="border px-3 py-2">Name of Club</th>
              <th className="border px-3 py-2">Motive of Club</th>
              <th className="border px-3 py-2">Club Mentor</th>
              <th className="border px-3 py-2">Club Coordinator</th>
              <th className="border px-3 py-2">Deputy Coordinator</th>

              {[...Array(maxMembers)].map((_, i) => (
                <th key={i} className="border px-3 py-2">
                  Member {i + 1}
                </th>
              ))}
            </tr>
          </thead>

          <motion.tbody
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {clubs.map((club, idx) => (
              <motion.tr
                key={idx}
                variants={row}
                className="text-center hover:bg-gray-50 transition"
              >
                <td className="border px-3 py-2">{club.sr}</td>
                <td className="border px-3 py-2 text-left sm:text-center">{club.name}</td>
                <td className="border px-3 py-2">{club.motive}</td>
                <td className="border px-3 py-2">{club.mentor}</td>
                <td className="border px-3 py-2">{club.coordinator}</td>
                <td className="border px-3 py-2">{club.deputy}</td>

                {[...Array(maxMembers)].map((_, i) => (
                  <td key={i} className="border px-3 py-2">
                    {club.members[i] || ""}
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

export default StudentClub;