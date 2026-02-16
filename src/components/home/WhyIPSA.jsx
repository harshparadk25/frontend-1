import { useState } from "react";

export default function WhyIPSA({ data }) {
  const [expanded, setExpanded] = useState(false);

  const title = data?.title || "Why IPSA";
  const text = data?.content || "";

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">

      <div>
        <h2 className="text-[60px] font-medium text-[#002147]">
          {title}
        </h2>
        <div className="w-40 h-[2px] bg-[#FF7373] mt-4" />
      </div>

      <div>

        {/* Paragraph with collapse */}
        <p className={`text-gray-600 mb-2 transition-all duration-300 ${expanded ? "" : "line-clamp-3"
          }`}>
          {text}
        </p>

        {/* Read more / less */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#0B2C4D] font-medium hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>


      </div>

    </section>
  );
}
