import img4 from "../../assets/Images/img4.png";
import developmentIcon from "../../assets/Images/development.svg";
import soldierIcon from "../../assets/Images/soldier.svg";
import valuePropositionIcon from "../../assets/Images/value-proposition.svg";
import confidenceIcon from "../../assets/Images/confidence.svg";
import hikingIcon from "../../assets/Images/hiking.svg";
import citizenIcon from "../../assets/Images/citizen.svg";
import supportIcon from "../../assets/Images/support.svg";
import adaptiveIcon from "../../assets/Images/adaptive.svg";
import teamLeaderIcon from "../../assets/Images/team-leader.svg";
import goalIcon from "../../assets/Images/goal.svg";

export default function FuturePlan() {
  const icons = [
    { img: developmentIcon, text: "Character-building" },
    { img: soldierIcon, text: "Army exposure" },
    { img: valuePropositionIcon, text: "Values" },
    { img: confidenceIcon, text: "Self-confidence" },
    { img: hikingIcon, text: "Adventure" },
    { img: citizenIcon, text: "Nation-building" },
    { img: supportIcon, text: "Community service" },
    { img: adaptiveIcon, text: "Life skills" },
    { img: teamLeaderIcon, text: "Leadership development" },
    { img: goalIcon, text: "Vision and purpose" },
  ];

  const initiatives = [
    "Adult Education",
    "Tree Plantation",
    "Blood Donation",
    "Anti-Dowry Rally",
    "AIDS Awareness",
    "Visit to old age homes and orphanage homes",
    "Disaster prevention, protection & relief",
    "Mission Indradhanush (Awareness about immunization)",
    "Campaign for saving water and cleanliness and many more activities",
  ];

  return (
    <section className="bg-[#F0EEEF] py-12 sm:py-10 xs:py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">

          {/* LEFT */}
          <div>

            {/* badge */}
            <div className="bg-[#0CC2FE] text-[#002147] px-4 py-1 text-2xl sm:text-xl text-lg w-fit mb-2">
              NCC
            </div>

            {/* title */}
            <h2 className="text-3xl sm:text-2xl text-xl font-semibold text-[#002147]">
              Empower Your Future
            </h2>

            <div className="w-24 h-[2px] bg-[#002147] mt-2"></div>

            {/* image */}
            <img
              src={img4}
              className="pt-12 sm:pt-8 w-full"
            />

          </div>

          {/* RIGHT */}
          <div className="lg:pl-5">

            <p className="text-[#3A3A3A] mb-4 text-base sm:text-[15px] leading-relaxed">
              NCC is more than an extracurricular opportunity. It is your pathway to an empowered and
                        inspiring future. As a unique platform for self-transformation, NCC offers you rigor, dynamism
                        and challenges to grow as a leader, nation-builder and changemaker. Become a cadet and prepare
                        for a future that you truly deserve.
            </p>

            {/* ICON GRID */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-6 my-6">

              {icons.map((item, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <img src={item.img} className="shrink-0" />
                  <span className="text-[#3A3A3A] text-[16px] sm:text-[15px] font-medium">
                    {item.text}
                  </span>
                </div>
              ))}

            </div>

            {/* subtitle */}
            <h3 className="text-[32px] sm:text-[26px] text-[22px] text-[#002147] font-medium mb-6 sm:mb-4">
              Lead Change – One Initiative At a Time
            </h3>

            {/* list */}
            <ul>
              {initiatives.map((item, i) => (
                <li key={i} className="mb-5 sm:mb-4 text-[#3A3A3A] text-base sm:text-[15px] leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
