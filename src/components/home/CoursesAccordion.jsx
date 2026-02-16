import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function CoursesAccordion() {

  const courses = [
    {
      title: `B.Arch M.Arch M.Plan. (Urban & Regional Planning), Diploma (Interior Design)`,
      desc: `Design the world and shape your future with a host of innovative programs in architecture at Central India’s most prestigious private institution. Experience a dynamic learning ecosystem that blends creativity, cutting-edge technology, hands-on training, and global exposure — empowering you to become a visionary architect and industry-ready professional.`
    },
    {
      title: `MBA (Core, FA, MM, IB) Ph.D (Management, Economics) BBA (Plain, FT, HA) BA (HONS.) Economics`,
      desc: `Transform your ambition into achievement and prepare to lead in a dynamic global business environment with our tech-driven and experiential programs in business management. Our industry-aligned curriculum, expert mentorship, real-world projects, and immersive learning experiences empower you with strategic thinking, leadership excellence, and practical skills to excel in today’s competitive marketplace.`
    },
    {
      title: `B. Tech M. Tech`,
      desc: `Transform your ambition into achievement and prepare to lead in a dynamic global business environment with our tech-driven and experiential programs in business management.`
    },
    {
      title: `BCA MCA MCA (Integrated)`,
      desc: `Prepare for the evolving technology sector with a top-notch programme designed for future innovators. Develop advanced technical expertise, problem-solving abilities, and creative thinking through industry-aligned curriculum, hands-on projects, expert mentorship, and real-world exposure — empowering you to lead in the digital era.`
    },
    {
      title: `B. SC. | M.SC. B.Lib MSW`,
      desc: `Lead change as a social scientist with rigorous and experiential programmes designed to equip you for meaningful global impact.`
    },
    {
      title: `B. Com M. Com`,
      desc: `Sharpen your analytical skills and transform your love for numbers to shape businesses and economies in a fast-changing world.`
    },
    {
      title: `BA (HONS.) Economics Ph.D (Economics)`,
      desc: `Prepare to work in dynamic global markets with strong theoretical understanding and sharp acumen in real-world application.`
    },
    {
      title: `Bachelor of Hotel Management BBA (Hotel Management) One Year Short Term Courses`,
      desc: `Gain the skills and expertise to lead the global hospitality industry with comprehensive, hands-on industry training across diverse sectors.`
    },
    {
      title: `B. Pharm. M. Pharm. (Pharmaceutics / Pharmacology/ Quality Assurance)`,
      desc: `Be part of pharmaceutical innovation with a cutting-edge program anchored in practical coursework, industry training, and advanced methodologies across diverse sectors.`
    },
    {
      title: `B.F.A. – Bachelor of Fine Arts | M.F.A. - Master of Fine Arts`,
      desc: `Shape your future in the world of fine arts with boundless creativity, innovative curriculum, and cutting-edge facilities at IPS.`
    },
    {
      title: `B. Ed.`,
      desc: `Shape young minds and nurture future changemakers through a comprehensive educational qualification designed for the dynamic education sector.`
    },
    {
      title: `B. Design Certificate Course in Fashion Design P.G. Diploma in Fashion Designing & Marketing Short Term Courses`,
      desc: `Turn your passion into a profession and prepare for the global fashion stage with cutting-edge skills and immersive industry training.`
    },
    {
      title: `B.A.LL.B. (Hons.) BBA LLB (Hons.) L.L.B. (Hons.) LLM`,
      desc: `Build a strong foundation in legal education and prepare to make a meaningful impact through ethical practice and professional excellence.`
    },
    {
      title: `MUSIC, DANCE, DRAMA & THEATER, B.P.A. & M.P.A., 3 yr. Advance diploma Certificate course`,
      desc: `Take your talent to the big stage through a comprehensive program designed to nurture artistic excellence and professional growth.`
    },
    {
      title: `B.A. (Travel & Tourism)`,
      desc: `Empower your passion for the rapidly expanding global travel industry with future-ready skills and immersive learning.`
    },
    {
      title: `BA (Mass Comm) MA (Mass Comm) B.Sc. ( Elect Media)`,
      desc: `Shape your future in the fast-evolving media world with state-of-the-art facilities and immersive, industry-driven learning.`
    },
    {
      title: `Courses in Sanwer Campus: MBA (Core, FA & MM) BBA (Plain & FT) B.Com (Tax, Plain, CA, Hons.) BCA`,
      desc: `Choose your dream path in your city and step into a world of opportunity at the Sanwer Campus.`
    },
    {
      title: `Jhabua Campus BBA | B.Com | B.Sc. | BCA`,
      desc: `The future begins at the Jhabua Campus. Shape your career with industry-ready skills and knowledge. Learn, grow, and succeed through experiential education and expert guidance.`
    }
  ];

  const [open, setOpen] = useState(0);
  const [expanded, setExpanded] = useState({});

  return (
    <div className="bg-[#F0EEEF]  pt-[180px] pb-[60px] px-2 -mt-[13%] max-[991px]:-mt-[24%] max-[576px]:pt-[30px] max-[576px]:pb-[30px] max-[576px]:px-5 max-[576px]:mt-0!">
      <section className="max-w-[1300px] mx-auto px-3">


        {/* Header Row */}
        <div className="grid grid-cols-12 items-center gap-1 mt-15">
          <div className="col-span-12 lg:col-span-7">
            <div className="max-[576px]:text-center">
              <h2 className="text-[50px] text-[#002147] mb-4 font-medium leading-[60px] max-[991px]:text-[48px] max-[576px]:text-[32px] max-[576px]:leading-[38px]">
                Innovative Courses<br />
                Tailored for the Industry
              </h2>
              <div className="w-[340px] h-[2px] bg-[#FF7373] max-[576px]:w-auto max-[576px]:mx-auto" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[16px] text-[#605654] font-normal mb-0! pt-8 max-[991px]:pt-5 max-[576px]:pt-5">
              Choose your next from a diverse range of courses designed to shape
              you for an evolving future.
            </p>
          </div>
        </div>

        {/* Accordion */}
<div className="py-12 max-w-[1420px]  px-4 max-[676px]:py-6">

  {courses.map((c, i) => {
    const isOpen = open === i;
    const isExpanded = expanded[i];

    return (
      <div key={i} className="border-b-[3px] border-white">


        {/* HEADER */}
        <button
          onClick={() => setOpen(isOpen ? null : i)}
          className={`w-full flex justify-between items-center text-left
          px-9 py-6 transition-all duration-300
          max-[576px]:px-5 max-[576px]:py-4
          
          ${isOpen
            ? "bg-[#F26D6D] text-white"
            : "bg-[#EDEBED] text-[#0B2A4A]"
          }`}
        >
          <span className="text-[28px] leading-[34px] font-medium max-[991px]:text-[24px] max-[576px]:text-[20px]">
            {c.title}
          </span>

          {/* ARROW CIRCLE */}
          <div className={`w-9 h-9 flex items-center justify-center rounded-full border transition-all
            ${isOpen ? "border-white" : "border-[#F26D6D]"}`}>
            <ChevronRight
              size={20}
              className={`transition-transform duration-300
                ${isOpen ? "rotate-90 text-white" : "text-[#F26D6D]"}`}
            />
          </div>
        </button>

        {/* BODY */}
        <div
          className={`overflow-hidden transition-all duration-500
          ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-[#F6F4F5] px-9 py-6 text-[#605654] max-[576px]:px-5">

            <p className={`text-[16px] leading-[26px] ${isExpanded ? "" : "line-clamp-3"}`}>
              {c.desc}
            </p>

            <button
              onClick={() =>
                setExpanded(prev => ({ ...prev, [i]: !prev[i] }))
              }
              className="mt-3 text-[#F26D6D] underline font-medium"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>

          </div>
        </div>

      </div>
    );
  })}
</div>
      </section>
    </div>
  );
}
