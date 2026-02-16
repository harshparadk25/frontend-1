import logo from "../../assets/logos/logo-white.png";

export default function Footer() {

  const sections = [
    { title:"IBMR", links:["BBA","MBA","Ph.D"] },
    { title:"SOC", links:[
      "B.Sc (Computer science with statistics)",
      "BCA",
      "MCA Integrated",
      "MCA (5 Years)",
      "MCA (Working Professionals)"
    ]},
    { title:"ISR", links:["B.Sc","M.Sc","Ph.D"]},
    { title:"SoSS", links:["BA","B.lib","MSW"]},
    { title:"COC", links:["B.Com","B.Com (Honours)","M.Com"]},
    { title:"IOHM", links:[
      "Bachelor of Hotel Management",
      "BBA (Hotel Management)",
      "Short Term Courses"
    ]},
    { title:"COE", links:["Bed"]},
    { title:"College of Law", links:["BA. LLB","BA. LLB","LLB","LLB"]},
    { title:"IFT", links:[
      "B. Design",
      "Certificate Course (Fashion Design)",
      "Short Term Courses"
    ]}
  ];

  const navLinks=[
    "Home","About Us","Colleges","Placements",
    "Activities","Facilities","Contact Us"
  ];

  return (

<footer className="bg-[#002147] text-white pt-14 pb-10 text-[14px]">

  <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-10">

    {/* ================= TOP COLLEGE GRID ================= */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-x-8 gap-y-10">

      {sections.map((sec,i)=>(
        <div key={i}>
          <h6 className="text-[#00BFFF] font-semibold mb-3">
            {sec.title}
          </h6>

          <ul className="space-y-1 leading-relaxed">
            {sec.links.map((l,idx)=>(
              <li key={idx}>
                <a href="#" className="hover:text-[#00BFFF] transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

    </div>


   {/* LOGO + RIGHT CONTENT */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-12 gap-10">

  {/* LOGO */}
  <img
    src={logo}
    className="h-[80px] lg:h-[90px] object-contain mx-auto lg:mx-0"
    alt="IPS Logo"
  />

  {/* RIGHT SIDE */}
  <div className="flex-1 flex flex-col items-center lg:items-end w-full">

    {/* NAV */}
    <ul className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-8 md:gap-10 text-[15px] sm:text-[16px]">
      {navLinks.map((n,i)=>(
        <li key={i}>
          <a href="#" className="hover:text-[#00BFFF] transition">
            {n}
          </a>
        </li>
      ))}
    </ul>

    {/* DIVIDER */}
    <div className="w-full border-t border-[#0F3D72] mt-4 mb-4"></div>

    {/* CONTACT */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center lg:text-right">

      <div className="flex gap-3 justify-center lg:justify-end">
        <span className="text-[#FF6B6B]">📍</span>
        <p>
          IPS Academy, AB Road,<br/>
          Rajendra Nagar, Indore (M.P)
        </p>
      </div>

      <div className="flex gap-3 justify-center lg:justify-end">
        <span className="text-[#FF6B6B]">📞</span>
        <p>
          +91 92294 98055<br/>
          +91 99778 35161
        </p>
      </div>

      <div className="flex gap-3 justify-center lg:justify-end">
        <span className="text-[#FF6B6B]">✉️</span>
        <a href="mailto:info@ipsacademy.org" className="hover:underline">
          info@ipsacademy.org
        </a>
      </div>

    </div>

  </div>

</div>


  </div>

</footer>

  );
}
