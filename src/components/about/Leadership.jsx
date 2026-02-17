import nishitJainFallback from "../../assets/Images/Nishit Jain.png";
import achalFallback from "../../assets/Images/achal.png";
import yogendraJainFallback from "../../assets/Images/Mr. Yogendra Jain.png";
import { resolveImageUrl } from "../../services/api";

// Fallback images mapped by index
const fallbackImages = [nishitJainFallback, achalFallback, yogendraJainFallback];

const defaultLeaders = [
  {
    img: nishitJainFallback,
    name: "Nishit Jain",
    role: "Director",
    text: "Students that walk into IPS Academy carry limitless potential..."
  },
  {
    img: achalFallback,
    name: "Achal Choudhary",
    role: "President",
    text: "IPS Academy stands as a symbol of academic excellence..."
  },
  {
    img: yogendraJainFallback,
    name: "Yogendra Jain",
    role: "Vice Director",
    text: "The world of work is changing fast..."
  }
];

export default function Leadership({ data }) {

  const title = data?.title || "Our Leadership Team";

  const leaders = data?.members
    ? data.members.map((m, i) => ({
      img: m.image ? resolveImageUrl(m.image) : (fallbackImages[i] || fallbackImages[0]),
      name: m.name,
      role: m.title,
      text: m.description
    }))
    : defaultLeaders;

  return (
    <section className="py-16 sm:py-12">

      <div className="max-w-7xl mx-auto px-6 sm:px-4">

        <h3 className="text-4xl md:text-5xl sm:text-3xl font-semibold text-[#002147] leading-tight">
          {title}
        </h3>

        <div className="h-[2px] w-60 sm:w-40 bg-[#FF7373] my-6 sm:my-5" />

        {leaders.map((l, i) => (
          <div key={i} className="bg-[#F0EEEF] p-8 sm:p-5 mb-8 sm:mb-6">

            <div className={`grid md:grid-cols-2 gap-8 sm:gap-6 items-center ${i === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>

              <img
                src={l.img}
                alt={l.name}
                className="w-full max-w-[400px] sm:max-w-[320px] mx-auto"
              />

              <div className="text-center md:text-left">
                <p className="text-gray-700 text-base sm:text-[15px]">
                  {l.text}
                </p>
                <div className="mt-4 font-semibold text-[#002147] text-lg sm:text-base">
                  {l.name}
                </div>
                <div className="text-gray-500 text-sm sm:text-xs">
                  {l.role}
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
