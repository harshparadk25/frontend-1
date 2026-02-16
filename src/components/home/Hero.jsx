import { useState } from "react";
import { Play } from "lucide-react";
import heroFallback from "../../assets/Images/hero.jpg";

export default function Hero({ data }) {
  const [showVideo, setShowVideo] = useState(false);

  // Fallback values if API data is not available
  const heroImage = data?.images?.[0] || heroFallback;
  const description = data?.description || "Where Knowledge, Skills and Values Transform the Future -";
  const ctaText = data?.cta_text || "Explore Now";
  const videoUrl = data?.cta_link || "";

  return (
    <section className="relative w-full h-[960px] overflow-hidden">

      {/* Background image */}
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom-left overlay box */}
      <div className="absolute bottom-0 left-0 bg-[#E9E9E9] w-[70%] max-w-4xl px-10 py-12">

        <h1 className="text-[#0B2C4D] text-4xl md:text-5xl leading-tight font-medium max-w-3xl">
          {description}
        </h1>

        {/* CTA button with Play icon */}
        <button
          onClick={() => setShowVideo(true)}
          className="mt-6 flex items-center gap-3 border border-[#0B2C4D] text-[#0B2C4D] px-7 py-3 hover:bg-[#0B2C4D] hover:text-white transition"
        >
          <Play size={20} />
          {ctaText}
        </button>

      </div>

      {/* Video modal */}
      {showVideo && videoUrl && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="relative w-[90%] max-w-4xl">

            {/* Close button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-xl"
            >
              ✕
            </button>

            {videoUrl.includes("youtube") || videoUrl.includes("youtu.be") ? (
              <iframe
                className="w-full h-[500px] rounded-lg"
                src={videoUrl}
                title="Youtube Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video
                className="w-full h-[500px] rounded-lg"
                src={videoUrl}
                controls
                autoPlay
              />
            )}

          </div>

        </div>
      )}

    </section>
  );
}
