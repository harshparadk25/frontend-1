import React from 'react'
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

export default function HostelFeatures() {
  return (
    <section className="py-12">

      <div className="max-w-6xl mx-auto px-4">

        {/* heading */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <div className="bg-[#0CC2FE] text-[#002147] px-4 py-1 text-2xl w-fit mb-2">
              Hostel
            </div>

            <h2 className="text-4xl font-semibold text-[#002147]">
              Discover a Home Away from Home
            </h2>

            <div className="w-24 h-[2px] bg-[#002147] mt-2"></div>
          </div>

          <p className="text-[#3A3A3A]">
            A diverse community and a vibrant life on campus make learning truly transformational at IPS. Make new friends, find a new family and explore an unparalleled life. Our safe, welcoming and well-furnished hostel invites you to a world of comfort amidst state-of-the art facilities to grow more every day.


          </p>

        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[70px] pb-[50px]">

          {features.map((f, i) => (
            <div
              key={i}
              className="border-r border-[#D7D7D7] p-6 text-center md:text-left"
            >
              <img
                src={f.icon}
                className="w-[50px] h-[50px] mb-6 mx-auto md:mx-0"
              />
              <div className="text-[24px] font-medium text-[#002147] leading-6">
                {f.title}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
