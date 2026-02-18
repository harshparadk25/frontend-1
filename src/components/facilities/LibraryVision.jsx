import library from "../../assets/Images/library.jpg";

import wifi from "../../assets/Images/wifi-signal.svg";
import dvd from "../../assets/Images/dvd-player.svg";
import member from "../../assets/Images/member-card.svg";
import exam from "../../assets/Images/exam.svg";
import classmate from "../../assets/Images/classmate.svg";
import book from "../../assets/Images/book.svg";

export default function LibraryVision() {
  return (
    <section className="bg-[#f7f7f7] lg:pt-[160px] md:pt-[120px] pt-[40px] pb-[40px]">

      <div className="w-full">

  {/* YELLOW CARD */}
  <div className="
    bg-[#FFC73E]
    w-[92%] lg:w-[88%]        /* makes card slightly smaller */
    mr-auto                   /* keeps it aligned left */
    p-6 md:p-8
    shadow-[8px_12px_50px_#00000026]
    lg:-mt-[140px] md:-mt-[100px] sm:-mt-[60px]
    relative z-10
  ">

    {/* INNER CONTENT WRAPPER (controls spacing from left) */}
    <div className="max-w-7xl ml-auto pl-6 md:pl-16 lg:pl-24">

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-6 items-center">

        <img
          src={library}
          alt="Library"
          className="w-full aspect-square object-cover min-h-[260px]"
        />

        <div>

          <span className="text-[#002147] text-xl md:text-2xl font-medium">
            Library
          </span>

          <h5 className="text-[26px] sm:text-[30px] md:text-[48px] lg:text-[60px] leading-none text-[#002147] font-medium mb-3">
            Fuel Your Mind Create Your Future
          </h5>

          <div className="w-[168px] h-[2px] bg-[#FF7373] my-4"></div>

          <p className="text-[#3A3A3A] leading-snug text-base sm:text-[15px]">
            The IPSA Knowledge hub, with 6 libraries, advanced digital access and a strong academic resource network ensures that learning never stops.
            It is located at the heart of the academic complex and provides seamless access with the vision to serve right information to the right user at the right time.
          </p>

          <h6 className="text-[22px] md:text-[28px] lg:text-[32px] mt-4 font-medium text-[#002147]">
            Wisdom at your fingertips
          </h6>

          <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
            <li>More than 1,00,000 books, 155 journals, 46 magazines, 1906 Bound Periodicals and 1955 CDs</li>
            <li>8 access points</li>
            <li>Information Literacy Programs (ILP)</li>
            <li>Theses, dissertations and research support</li>
            <li>OPAC – Online Public Access Catalogue for easy search</li>
            <li>E-library</li>
            <li>Plagiarism software Turnitin</li>
          </ul>

        </div>
      </div>

    </div>
  </div>

</div>


      <div className="max-w-6xl mx-auto ml-60 px-4 sm:px-5">        

        {/* SERVICES */}
        <div className="mt-12 lg:mt-14 sm:mt-10">

          <h3 className="text-[26px] md:text-[30px] lg:text-[32px] sm:text-[24px] text-[#002147] font-medium mb-6 sm:mb-4">
            Your Service
          </h3>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-6">

            <ul className="text-[#3A3A3A] space-y-3 md:space-y-4 text-base sm:text-[15px]">
              <li>Circulation Service</li>
              <li>Reference Service</li>
              <li>Xerox Service</li>
              <li>Access to Full-text Online Journals</li>
              <li>Access to Back Issues of Journals</li>
              <li>Current Contents (Monthly) - a compilation of selected journals</li>
            </ul>

            <ul className="text-[#3A3A3A] space-y-3 md:space-y-4 text-base sm:text-[15px]">
              <li>Article Repository Service with indexed articles</li>
              <li>Research Reference Library for doctoral students</li>
              <li>Book Bank Service for physics and biotechnology</li>
              <li>Need-based Newspaper Clipping Service</li>
              <li>Online News Paper clipping Service</li>
            </ul>

          </div>
        </div>


        {/* FACILITIES */}
        <div className="mt-12 sm:mt-10">

          <div className="text-[26px] md:text-[30px] lg:text-[32px] sm:text-[24px] text-[#002147] font-medium mb-6 sm:mb-4">
            Facilities for you
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5">

            {[
              { img: wifi, text: "Cyber space for free internet access" },
              { img: dvd, text: "Dedicated sections for CD-ROMS and Classic DVDs" },
              { img: member, text: "DELNET Membership" },
              { img: exam, text: "Requisition Form for recommended books" },
              { img: classmate, text: "Library Orientation Program for students and faculty" },
              { img: book, text: "Journals and online resource" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={item.img} alt="" className="w-6 h-6 shrink-0" />
                <span className="font-medium text-[#3A3A3A] text-base sm:text-[15px] leading-snug">
                  {item.text}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
