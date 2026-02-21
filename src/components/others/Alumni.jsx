import React from "react";
import { motion } from "framer-motion";

const Alumini = () => {

  /* ================== STATIC DATA (API READY) ================== */

  const achievements = [
    "Public Service & Government: Anurakti Sabnani (DSP), Harbans Singh Arora (Indian Army), Manish Sool (CM Security).",
    "Founders & Entrepreneurs: Sonam Pahuja, Shubham Pradhan, Neeraj Agrawal.",
    "Corporate Leaders: Harshika Masand (Amazon), Guru Prasad (ARCESIUM NY), Pallavi Kulkarni (ZEE Entertainment).",
    "Global Presence: Alumni working across Dubai, New York & other countries."
  ];

  const successStories = [
    {
      category: "Founders & Entrepreneurs",
      name: "Shubham Pradhan",
      org: "Ashok Plastic Industries",
      achievement: "Founded a manufacturing company"
    },
    {
      category: "Founders & Entrepreneurs",
      name: "Neeraj Agrawal",
      org: "CA Firm",
      achievement: "Runs firm & Digital Creator"
    },
    {
      category: "Founders & Entrepreneurs",
      name: "Sudipta Gosh",
      org: "House Pandora Café Manali",
      achievement: "Co-Founder & Pet Show Organizer"
    },
    {
      category: "Founders & Entrepreneurs",
      name: "Gautam Kale",
      org: "Sangeet Gurukul",
      achievement: "Director & Disciple of Pt. Jasraj ji"
    },
    {
      category: "Founders & Entrepreneurs",
      name: "Aprajita Singh",
      org: "Digital Creator",
      achievement: "Online Creator"
    },
    {
      category: "Public Service",
      name: "Anurakti Sabnani",
      org: "DSP, MP Police",
      achievement: "Deputy Superintendent of Police"
    },
    {
      category: "Public Service",
      name: "Manish Sool",
      org: "STF / CM Security",
      achievement: "Serves in CM Security"
    }
  ];

  const socialActivities = [
    { name: "Vinamma Gangrade", achievement: "Bar Council Member, Social Worker" },
    { name: "Dikshant Patidar", achievement: "Politics & Social Work" },
    { name: "Devendra Patel", achievement: "Politics & Social Work" },
    { name: "Ashish Singh", achievement: "NGO & Entrepreneur" },
    { name: "Vedansh Soni", achievement: "NGO & Social Worker" }
  ];

  const alumniTestimonials = [
  {
    name: "Anukrati Sabnani",
    text: "Looking back, my time studying B.Com at the Commerce Department, IPS Academy, Indore was less about the degree and more about the transformation. The academic rigor provided a solid foundation, but it was the cultural events and active participation in organizing committees that taught me leadership. The network I built here—supported immensely by faculty guidance—remains my biggest professional asset today."
  },
  {
    name: "Akshat Khamparia",
    text: "While the academic side was intense, the Commerce Department provided the perfect outlet through its sports facilities. Being part of the team taught me discipline, teamwork, and resilience—skills that are just as crucial in the boardroom as they are on the field. The encouragement I received from the faculty to balance my passion for sports with my studies was invaluable to my growth."
  },
  {
    name: "Aparna Bishnoi",
    text: "The campus at IPS Academy was a melting pot of ideas. Beyond the classroom, the co-curricular activities allowed me to explore interests I didn't know I had. It’s a place where mentors truly invest in your growth, ensuring that you graduate not just as a professional, but as a well-rounded individual ready for the global stage."
  },
  {
    name: "Harbans Singh",
    text: "I owe a lot to the networking opportunities facilitated by the Commerce Department, IPS Academy. Whether it was guest lectures from industry veterans or alumni meetups, the bridge between students and the professional world was always there. The academic environment was challenging, but the constant support from the faculty made it manageable and memorable."
  },
  {
    name: "Nikhil Soni",
    text: "For me, the highlights were the industrial visits and technical fests arranged by the department. Seeing how concepts are applied on the factory floor changed my perspective on business and engineering. The faculty didn't just teach from textbooks; they shared experiences and provided practical guidance that prepared us for the industry."
  }
];


  /* ================== ANIMATIONS ================== */

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };


  /* ================== UI ================== */

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center text-2xl md:text-3xl font-bold text-[#002147] mb-10"
        >
          IPS Academy, Department of Commerce Alumni
        </motion.h1>


        {/* ================= ACHIEVEMENTS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-lg md:text-xl font-semibold mb-4">
            1. Alumni Achievements
          </motion.h2>

          <ul className="space-y-3">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="bg-white p-4 rounded-xl shadow border text-sm md:text-base"
              >
                • {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>



        {/* ================= SUCCESS STORIES TABLE ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >

          <motion.h2 variants={fadeUp} className="text-lg md:text-xl font-semibold mb-4">
            COC Alumni Success Stories
          </motion.h2>

          <div className="overflow-x-auto bg-white rounded-xl shadow border">

            <table className="min-w-full text-sm md:text-base">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Alumni Name</th>
                  <th className="p-3 text-left">Organization / Position</th>
                  <th className="p-3 text-left">Recent Achievement</th>
                </tr>
              </thead>

              <tbody>
                {successStories.map((row, i) => (
                  <motion.tr
                    key={i}
                    variants={fadeUp}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3">{row.category}</td>
                    <td className="p-3 font-medium">{row.name}</td>
                    <td className="p-3">{row.org}</td>
                    <td className="p-3">{row.achievement}</td>
                  </motion.tr>
                ))}
              </tbody>

            </table>

          </div>
        </motion.div>



        {/* ================= SOCIAL ACTIVITIES ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <motion.h2 variants={fadeUp} className="text-lg md:text-xl font-semibold mb-4">
            Social Activities
          </motion.h2>

          <div className="overflow-x-auto bg-white rounded-xl shadow border">

            <table className="min-w-full text-sm md:text-base">

              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Achievement</th>
                </tr>
              </thead>

              <tbody>
                {socialActivities.map((row, i) => (
                  <motion.tr
                    key={i}
                    variants={fadeUp}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">{row.name}</td>
                    <td className="p-3">{row.achievement}</td>
                  </motion.tr>
                ))}
              </tbody>

            </table>

          </div>

        </motion.div>

        {/* ================= ALUMNI TESTIMONIAL TILES ================= */}
<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="mt-16"
>

  <motion.h2
    variants={fadeUp}
    className="text-lg md:text-xl font-semibold mb-6 text-center"
  >
    Alumni Testimonials – B.Com, Commerce Department
  </motion.h2>

  <motion.div
    variants={container}
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    {alumniTestimonials.map((t, i) => (

      <motion.div
        key={i}
        variants={fadeUp}
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-2xl shadow-md p-6 border flex flex-col"
      >

        <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
          “{t.text}”
        </p>

        <div className="mt-4 font-semibold text-[#002147]">
          — {t.name}
        </div>

      </motion.div>

    ))}
  </motion.div>

</motion.div>

      </div>

    </section>
  );
};

export default Alumini;