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
    <section className="relative w-full h-[60vh] min-h-[1020px]">

      <img
        src={heroImage}
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 bg-[#E9E9E9] w-[70%] max-w-2xl px-10 py-12">

        <h1 className="text-[#0B2C4D] text-4xl md:text-5xl leading-tight font-medium max-w-3xl">
          {description}
        </h1>

        {/* CTA button */}
        <a
          href={ctaLink}
          className="mt-6 inline-flex items-center gap-3 border border-[#0B2C4D] text-[#0B2C4D] px-7 py-3 hover:bg-[#0B2C4D] hover:text-white transition"
        >
          {ctaText}
        </a>

      </div>

    </section>
  );
}
