import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Images/hero.jpg";

export default function Hero({ data }) {
  const [showVideo, setShowVideo] = useState(false);

  const heroImg = data?.images?.[0] || heroImage;
  const description = data?.description?.replace(/\n/g, ' ').trim() || "Serving Excellence in Global Hospitality Education";
  const ctaText = data?.cta_text || "Explore Now";
  const videoUrl = data?.cta_link || "";

  return (
    <div className="w-full px-2">

      {/* HERO */}
      <section className="relative w-full 
                          h-[100svh] 
                          max-lg:h-[70vh] 
                          max-md:h-[65vh] 
                          max-sm:h-[60vh]
                          pb-24 overflow-visible">

        {/* Background */}
        <img
          src={heroImg}
          alt="Hero Background"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY BOX */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="absolute left-0 -bottom-12
                     bg-[#E9E9E9]
                     w-[92%] sm:w-[88%] md:w-[75%] lg:w-auto
                     max-w-[637px]
                     px-5 py-5
                     sm:px-6 sm:py-6
                     md:px-8 md:py-8
                     shadow-lg
                     max-sm:-bottom-8">

          <h1 className="text-[#0B2C4D]
                         font-medium
                         leading-tight
                         text-[1.35rem]
                         sm:text-[1.7rem]
                         md:text-[2.2rem]
                         lg:text-[3.2rem]
                         xl:text-[4rem]">
            {description}
          </h1>

          <button
            onClick={() => setShowVideo(true)}
            className="mt-5 flex items-center gap-3
                       border border-[#0B2C4D]
                       text-[#0B2C4D]
                       px-5 py-2.5
                       bg-[#fff]
                       transition-all duration-300
                       hover:-translate-y-1 hover:scale-105
                       hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]
                       active:scale-95">

            <Play size={18} fill="currentColor" />
            {ctaText}
          </button>
        </motion.div>

        {/* VIDEO MODAL */}
        {showVideo && videoUrl && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-[900px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 bg-[#002147] text-white
                           rounded-full w-[34px] h-[34px]
                           flex items-center justify-center shadow-lg z-[99]">
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
            </motion.div>
          </div>
        )}

      </section>

    </div>
  );
}