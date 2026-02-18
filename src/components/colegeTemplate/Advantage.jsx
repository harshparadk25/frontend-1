import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBookOpen,
  faChartLine,
  faUsers,
  faBuildingColumns,
  faSitemap
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { title:"Experiential Learning", desc:"Industry projects, internships, and case studies", icon: faBriefcase },
  { title:"Skill Development", desc:"Certifications in analytics, digital marketing, NSE and more", icon: faChartLine },
  { title:"Research Focus", desc:"Publication opportunities in journals", icon: faBookOpen },
  { title:"Holistic Growth", desc:"Leadership workshops and cultural events", icon: faUsers },
  { title:"Internship & Projects", desc:"Industrial projects for real exposure", icon: faBuildingColumns },
  { title:"Industry Connect", desc:"Guest lectures & networking events", icon: faSitemap },
];

export default function Advantage() {
  return (
    <section className="bg-[#002147] py-12 sm:py-14 md:pb-16 text-white mt-[-40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-2 text-center md:text-left">
          Experience, Learn, Lead: The IBMR Advantage
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-red-500 mb-8 sm:mb-10 mx-auto md:mx-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="
                border border-white/20 rounded-xl 
                p-6 bg-white/[0.02]
                hover:bg-white/[0.08]
                hover:-translate-y-2
                transition-all duration-300 ease-out
                text-center sm:text-left
                group
              "
            >

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 mb-4 mx-auto sm:mx-0 group-hover:bg-white/20 transition">
                <FontAwesomeIcon icon={i.icon} className="text-xl" />
              </div>

              <h6 className="text-lg sm:text-xl font-medium mb-2">
                {i.title}
              </h6>

              <p className="text-white/70 text-sm sm:text-base">
                {i.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
