import fairmontLogo from "../../assets/logos/Fairmont_Logo.svg.png";
import oberoiLogo from "../../assets/logos/oberoi-hotelspng.png";
import marriottLogo from "../../assets/logos/Marriott.png";
import hyattLogo from "../../assets/logos/Hyatt.png";
import tajLogo from "../../assets/logos/Taj_Hotels_logo.svg.png";
import itcLogo from "../../assets/logos/ITC_Hotels_logo.svg.png";

export default function Recruiters() {

  const logos = [
    fairmontLogo,
    oberoiLogo,
    marriottLogo,
    hyattLogo,
    tajLogo,
    itcLogo,
  ];

  const sectors1 = [
    { num: 14, name: "PSU" },
    { num: 81, name: "Core" },
    { num: 74, name: "MNC" },
    { num: 15, name: "Bank" },
    { num: 32, name: "NBFC" },
  ];

  const sectors2 = [
    { num: 21, name: "PHARMA" },
    { num: 134, name: "Blue Chip" },
    { num: 115, name: "IT/ITES" },
    { num: 60, name: "Service Industry" },
    { num: 17, name: "Consulting" },
  ];

  return (
    <section className="bg-[#F0EEEF] pt-28 pb-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#002147] leading-tight">
          Proven Placement Record with <br /> 500+ Recruiters
        </h2>

        <div className="h-[2px] w-64 bg-[#FF7373] mt-4 mb-10" />

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

          {logos.map((logo, i) => (
            <div key={i} className="bg-white p-3 border border-[#F0EEEF] flex items-center justify-center">
              <img
                src={logo}
                alt="Recruiter"
                className="h-[72px] w-full object-contain"
              />
            </div>
          ))}

        </div>


        {/* PLACEMENT HIGHLIGHTS */}
        <div className="bg-[#FFCC4D] mt-14 p-8 md:p-12">

          {/* TOP ROW */}
          <div className="grid lg:grid-cols-2 gap-6 items-center">

            <div className="text-[#002147] text-3xl md:text-4xl font-medium leading-tight">
              Placement Highlights <br />
              2024-2025
            </div>

            <div className="flex flex-wrap items-center gap-8">

              <div className="flex items-center gap-3">
                <div className="text-4xl md:text-5xl font-semibold text-[#002147]">
                  1904
                </div>
                <div className="text-[#002147] font-medium">
                  Students Placed
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-14 bg-white" />

              <div className="flex items-center gap-3">
                <div className="text-4xl md:text-5xl font-semibold text-[#002147]">
                  563
                </div>
                <div className="text-[#002147] font-medium leading-tight">
                  Companies in <br /> Closed Campus Drive
                </div>
              </div>

            </div>

          </div>


          {/* SECTORS */}
          <div className="mt-10">

            <div className="text-2xl md:text-3xl font-medium text-[#002147] mb-6">
              Sectors
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4">

              {sectors1.map((s, i) => (
                <div key={i} className="border-b border-[#0CC2FE] font-medium text-[#002147]">
                  <span className="text-2xl md:text-3xl mr-1">{s.num}</span> {s.name}
                </div>
              ))}

            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 mt-4">

              {sectors2.map((s, i) => (
                <div key={i} className="border-b border-[#0CC2FE] font-medium text-[#002147]">
                  <span className="text-2xl md:text-3xl mr-1">{s.num}</span> {s.name}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
