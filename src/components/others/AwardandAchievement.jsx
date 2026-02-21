import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

/* ------------------ DATA (can come from API later) ------------------ */

const universityToppers = [
  ["Mansi Ahuja","1st Position (DAVV Merit List)","2025"],
  ["Shailly Patel","2nd Position (DAVV Merit List)","2025"],
  ["Aishwarya Sharma","1st Position (DAVV Merit List)","2023"],
  ["Neha Sagar","4th Position","2023"],
  ["Niharika Yadav","6th Position","2023"],
  ["Shruti Jain","7th Position","2018"],
  ["Lavina Pahuja","7th Position","2018"],
  ["Anurakti Sabnani","7th Position","2015"],
  ["Mayank Tiwari","8th Position","2015"],
  ["Ankita Pandey","5th Position","2016"],
  ["Shikha Agrawal","9th Position","2016"],
  ["Varnika Shrotriya","4th Position","2010"],
];

const recentToppers = [
  ["B.Com Hons. (IV Yr)","Ayush Chaturvedi","9.20","1st"],
  ["B.Com Hons. (IV Yr)","Jatin Kesharwani","9.15","2nd"],
  ["B.Com I Yr","Anakha S. Pillai & Jaydeep Sengar","8.35","1st"],
];

const admissions = [
  "Ayush Chaturvedi – IIM Bodh Gaya (2025)",
  "Ayush Singh – IIM Jammu (2025)",
];

const ncc = [
  ["Harbans Singh Arora","Youth Exchange Program, Bangladesh"],
  ["Shobha Bhandari","RDC, PM Rally, Guard of Honour (2012)"],
  ["Ritvika Gour","Winner, Cultural Trophy, National Integration Camp (Leh)"],
  ["Pawar Simran Kour","RDC Parade 2023, PM House Visit"],
];

const coCurricular = [
  ["National","Deeksha Prajapati, Ravina Malviya","Cartooning & Poster Winners"],
  ["National","Abhinav Dey","Debate, Represented DAVV at AMU"],
  ["National","Ayush Soni & Vaibhav Sharma","2nd Position, Battle of Bands IIT Jodhpur"],
  ["State","Shweta Anjlina Asra","Singing Winner"],
  ["State","Mayank Tiwari & Team","Skit Winner"],
  ["State","Animesh Singh Baghel","Quiz 2nd Position"],
  ["District/University","Abhinav Dey, Shobha Bhandari, Akriti Shukla","Debate Winners"],
  ["District/University","Shubham Bhariya & Akriti Tiwari","Duet Dance Winner"],
];

/* ------------------ REUSABLE TABLE ------------------ */

const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto bg-white rounded-xl shadow">
    <table className="w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((h,i)=>(
            <th key={i} className="p-3 border text-left">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r,i)=>(
          <motion.tr
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            className="hover:bg-gray-50"
          >
            {r.map((c,j)=>(
              <td key={j} className="p-3 border">{c}</td>
            ))}
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ------------------ MAIN COMPONENT ------------------ */

const AwardandAchievement = () => {

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* Heading */}
        <motion.div
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#002147]">
            IPS Academy, Department of Commerce
          </h2>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            Achievements
          </p>
        </motion.div>

        {/* Intro */}
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          The College of Commerce consistently sets high benchmarks across academics,
          co-curricular success and career development driven by exceptional student performance.
        </p>

        {/* Ranking */}
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h3 className="font-semibold text-blue-700 mb-2">
            Scaling New Heights in Excellence!
          </h3>
          <p className="text-gray-700">
            Ranked <b>#79 in India</b> and <b>#2 in Madhya Pradesh</b> in
            The Week-Hansa Research Survey 2025.
          </p>
        </div>

        {/* University toppers */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#002147]">
            University Toppers
          </h3>
          <Table
            headers={["Student Name","Achievement / Rank","Year"]}
            rows={universityToppers}
          />
        </div>

        {/* Recent toppers */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#002147]">
            Recent College Toppers
          </h3>
          <Table
            headers={["Program","Student(s)","Score","Rank"]}
            rows={recentToppers}
          />
        </div>

        {/* Admissions */}
        <div>
          <h3 className="font-semibold text-lg text-[#002147] mb-3">
            Recent Prestigious Admissions
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {admissions.map((a,i)=>(
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>

        {/* Co-curricular */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#002147]">
            Co-Curricular & Competition Success
          </h3>
          <Table
            headers={["Level","Student(s)","Achievement"]}
            rows={coCurricular}
          />
        </div>

        {/* NCC */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-[#002147]">
            NCC Achievements
          </h3>
          <Table
            headers={["Student Name","Achievement"]}
            rows={ncc}
          />
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-semibold text-lg text-[#002147] mb-3">
            Skill Development & Certification
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>International certifications in AI, Digital Marketing, Data Analytics.</li>
            <li>Training under BFSI, Talentmark, MakeIntern.</li>
            <li>NCC selections, PM Rally, Youth Exchange programs.</li>
          </ul>
        </div>

        {/* Industry */}
        <div>
          <h3 className="font-semibold text-lg text-[#002147] mb-3">
            Industry Engagement
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Industry visits, guest lectures, mentoring workshops.</li>
            <li>Live projects with startups, finance firms, digital agencies.</li>
            <li>Top recruiters: Byju’s, Upgrad, PlanetSpark, Godrej, Jaro Education.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AwardandAchievement;