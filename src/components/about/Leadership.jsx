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
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-4xl md:text-5xl font-semibold text-[#002147]">
          {title}
        </h3>

        <div className="h-[2px] w-60 bg-[#FF7373] my-6" />

        {leaders.map((l, i) => (
          <div key={i} className="bg-[#F0EEEF] p-8 mb-8">

            <div className={`grid md:grid-cols-2 gap-8 items-center ${i === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>

              <img src={l.img} alt={l.name} className="w-full max-w-[400px] mx-auto" />

              <div>
                <p className="text-gray-700">{l.text}</p>
                <div className="mt-4 font-semibold text-[#002147]">{l.name}</div>
                <div className="text-gray-500">{l.role}</div>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
