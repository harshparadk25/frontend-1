import aboutFallback from "../../assets/Images/about.png";
import { resolveImageUrl } from "../../services/api";

export default function Hero({ data }) {

  const heroImage = data?.images?.[0]
    ? resolveImageUrl(data.images[0])
    : aboutFallback;
  const description = data?.description || "Welcome to Central India's Premier Institute";
  const ctaText = data?.cta_text || "Explore Now";
  const ctaLink = data?.cta_link || "#";

  return (
    <section className="relative mb-20 w-full h-[60vh] min-h-[1020px] sm:min-h-[520px] xs:min-h-[480px]">

      <img
        src={heroImage}
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 transform translate-y-1/4 bg-[#E9E9E9] w-[50%] sm:w-[92%] xs:w-full max-w-2xl px-10 sm:px-6 xs:px-4 py-12 sm:py-8 xs:py-6">

        <h1 className="text-[#0B2C4D] text-4xl md:text-5xl sm:text-3xl xs:text-2xl leading-tight font-medium max-w-3xl">
          {description}
        </h1>

        {/* CTA button */}
        <a
          href={ctaLink}
          className="mt-6 sm:mt-5 inline-flex items-center gap-3 border border-[#0B2C4D] text-[#0B2C4D] px-7 sm:px-5 py-3 sm:py-2.5 hover:bg-[#0B2C4D] hover:text-white transition text-base sm:text-sm"
        >
          {ctaText}
        </a>

      </div>

    </section>
  );
}
