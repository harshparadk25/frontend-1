import React from 'react'
import { motion } from "framer-motion";
import ups from "../../assets/Images/ups.svg";
import cabinet from "../../assets/Images/cabinet.svg";
import tableTennis from "../../assets/Images/table-tennis.svg";
import biometricAttendance from "../../assets/Images/biometric-attendance.svg";
import securityCamera from "../../assets/Images/security-camera.svg";
import queenBed from "../../assets/Images/queen-bed.svg";
import restaurant from "../../assets/Images/restaurant.svg";
import park from "../../assets/Images/park.svg";

const features = [
  { icon: ups, title: "Power backup" },
  { icon: cabinet, title: "TV lounge" },
  { icon: tableTennis, title: "Indoor and outdoor games" },
  { icon: biometricAttendance, title: "Biometric attendance" },
  { icon: securityCamera, title: "CCTV surveillance" },
  { icon: queenBed, title: "Guest accommodation" },
  { icon: restaurant, title: "Wholesome, hygienic meals" },
  { icon: park, title: "Lush greenery" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function HostelFeatures() {
  return (
    <section className="py-12 sm:py-10 xs:py-8 mt-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-5">

        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >

          <div>
            <div className="bg-[#0CC2FE] font-medium text-[#002147] px-4 py-1 text-3xl sm:text-xl text-lg w-fit mb-2">
              Hostel
            </div>

            <h2 className="text-4xl sm:text-6xl text-2xl font-medium text-[#002147] ">
              Discover a Home Away from Home
            </h2>

            <div className="w-44 h-[2px] bg-[#bb3d02] mt-2"></div>
          </div>

          <p className="text-[#3A3A3A] text-base sm:text-[15px] leading-relaxed">
            A diverse community and a vibrant life on campus make learning truly transformational at IPS. Make new friends, find a new family and explore an unparalleled life. Our safe, welcoming and well-furnished hostel invites you to a world of comfort amidst state-of-the art facilities to grow more every day.
          </p>

        </motion.div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[70px] sm:pt-[50px] pt-[40px] pb-[50px] sm:pb-[40px] gap-y-8">

          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, amount: 0.1 }}
              className="border-r border-[#D7D7D7] p-6 sm:p-5 text-center md:text-left"
            >
              <img
                src={f.icon}
                className="w-[50px] h-[50px] sm:w-[44px] sm:h-[44px] mb-6 sm:mb-4 mx-auto md:mx-0"
              />
              <div className="text-[24px] sm:text-[20px] text-[18px] font-medium text-[#002147] leading-6">
                {f.title}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
