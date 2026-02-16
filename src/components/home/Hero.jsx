import { useState } from "react";
import { Play } from "lucide-react";
import heroFallback from "../../assets/Images/hero.jpg";

export default function Hero({ data }) {
  const [showVideo, setShowVideo] = useState(false);

  // Fallback values if API data is not available
  const heroImage = data?.images?.[0] || heroFallback;
  const description =
    data?.description ||
    "Where Knowledge, Skills and Values Transform the Future";
  const ctaText = data?.cta_text || "Explore Now";
  const videoUrl = data?.cta_link || "";

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative w-full h-[960px] 
                          max-[991px]:h-[60vh] 
                          max-[576px]:h-[65vh] 
                          pb-28 overflow-visible">

        {/* Background */}
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* SMALLER OVERLAY BOX */}
        <div className="absolute left-0 -bottom-12
                        bg-[#E9E9E9]
                        w-[60%] max-w-lg
                        px-8 py-8
                        shadow-lg
                        max-[991px]:w-[75%] max-[991px]:px-6 max-[991px]:py-6 max-[991px]:-bottom-10
                        max-[576px]:w-[90%] max-[576px]:px-5 max-[576px]:py-5 max-[576px]:-bottom-8">

          <h1 className="text-[#0B2C4D]
                         text-[3rem]
                         leading-tight
                         font-medium
                         max-[991px]:text-[2.2rem]
                         max-[576px]:text-[1.3rem]">
            {description}
          </h1>

          <button
            onClick={() => setShowVideo(true)}
            className="mt-5 flex items-center gap-3
                       border border-[#0B2C4D]
                       text-[#0B2C4D]
                       px-6 py-2.5
                       transition-all duration-300
                       hover:-translate-y-1 hover:scale-105
                       hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]">

            <Play size={18} fill="currentColor" />
            {ctaText}
          </button>
        </div>

        {/* VIDEO MODAL */}
        {showVideo && videoUrl && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
            onClick={() => setShowVideo(false)}
          >
            <div
              className="w-[90%] max-w-[900px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 bg-[#002147] text-white
                           rounded-full w-[32px] h-[32px]
                           flex items-center justify-center shadow-lg">
                ✕
              </button>

              <div className="relative pt-[56.25%]">
                <iframe
                  src={videoUrl}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
