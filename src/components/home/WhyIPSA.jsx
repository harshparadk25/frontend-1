import { useState } from "react";

export default function WhyIPSA({ data }) {
  const [expanded, setExpanded] = useState(false);

  const title = data?.title || "Why IPSA";
  const text = data?.content || "";

  return (
    <section className="max-w-[1140px] mx-auto px-4 py-30 mb-10
      max-[991px]:py-20
      max-[768px]:py-16
      max-[576px]:py-12 max-[576px]:mb-6">

      <div className="grid grid-cols-12 gap-x-6 max-[768px]:gap-y-6">

        {/* Left column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col max-[576px]:items-center">

            <h2 className="text-[60px] font-medium text-[#002147]
              max-[1200px]:text-[54px]
              max-[991px]:text-[48px]
              max-[768px]:text-[40px]
              max-[576px]:text-[32px]">
              {title}
            </h2>

            <div className="w-[168px] h-[2px] bg-[#FF7373] mb-5
              max-[768px]:mb-4" />

          </div>
        </div>

        {/* Right column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="flex flex-col max-[576px]:items-center">

            <p
              className={`text-[16px] font-normal text-[#605654] mb-1! leading-[1.8] transition-all duration-300
              max-[768px]:text-[15px]
              max-[576px]:text-center ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {text}
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-transparent border-none p-0 font-medium text-[#FF7373] cursor-pointer text-left underline
              max-[576px]:text-[15px]"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
