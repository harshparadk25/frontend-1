import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { resolveImageUrl } from "../../services/api";

export default function Recruiters({ data }) {
  const title = data?.title || "Recruiters";
  const images = data?.images || [];

  return (
    <section id="recruiters" className="bg-[#f7f9fc] py-12 sm:py-14 md:py-16">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0b1c39] text-center md:text-left">
          {title}
        </h2>

        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 mt-8 sm:mt-10">

            {images.map((img, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 sm:p-5 md:p-6 flex items-center justify-center shadow hover:-translate-y-1 transition"
              >
                <LazyLoadImage
                  src={resolveImageUrl(img)}
                  alt={`Recruiter ${i + 1}`}
                  effect="blur"
                  className="max-h-8 sm:max-h-9 md:max-h-10 w-auto grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
