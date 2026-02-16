import { useState } from "react";

export default function WhyIPSA({ data }) {
  const [expanded, setExpanded] = useState(false);

  const title = data?.title || "Why IPSA";
  const text = data?.content || "";

  return (
    <section className="max-w-[1140px] mx-auto px-4 py-30 mb-10">
      <div className="grid grid-cols-12 gap-x-6">
        {/* Left column - col-12 col-md-6 col-lg-4 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="flex flex-col max-[576px]:items-center">
            <h2 className="text-[60px] font-medium text-[#002147] max-[576px]:text-[32px]">
              {title}
            </h2>
            <div className="w-[168px] h-[2px] bg-[#FF7373] mb-5" />
          </div>
        </div>

        {/* Right column - col-12 col-md-6 col-lg-8 */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="flex flex-col max-[576px]:items-center">
            <p
              className={`text-[16px] font-normal text-[#605654] mb-1! leading-[1.8] transition-all duration-300 max-[576px]:text-center ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {text}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="bg-transparent border-none p-0 font-medium text-[#FF7373] cursor-pointer text-left underline"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
