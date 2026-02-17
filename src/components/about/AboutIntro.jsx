import onlineTeachingIcon from "../../assets/Images/online-teaching 1.svg";
import computerIcon from "../../assets/Images/computer 1.svg";
import globalIcon from "../../assets/Images/global 1.svg";
import opportunitiesIcon from "../../assets/Images/opportunities 1.svg";
import studentFallback from "../../assets/Images/student.png";
import { resolveImageUrl } from "../../services/api";

// Map icons by index (matches the order returned by the API)
const iconMap = [onlineTeachingIcon, computerIcon, globalIcon, opportunitiesIcon];

const defaultFeatures = [
  {
    icon: onlineTeachingIcon,
    title: "Ecosystem For Your Growth",
    text: "From tech-led classrooms to advanced labs and studios, find a world of excellence to lead the future."
  },
  {
    icon: computerIcon,
    title: "Learn Beyond Textbooks",
    text: "Dive into industry-tailored, experiential learning to nurture your creativity with career-readiness."
  },
  {
    icon: globalIcon,
    title: "Be A Global Citizen",
    text: "Prepare for a successful career and get ready for global opportunities."
  },
  {
    icon: opportunitiesIcon,
    title: "Connect With Alumni",
    text: "Grow your network with IPS alumni all over the world."
  }
];

export default function AboutIntro({ aboutData, ecosystemData, growthImage }) {

  const title = aboutData?.title || "About IPS";
  const content = aboutData?.content ||
    "We are Central India's leading multidisciplinary institution, known for excellence in academics, infrastructure and industry connect.";

  const features = ecosystemData?.items
    ? ecosystemData.items.map((item, i) => ({
      icon: iconMap[i] || iconMap[0],
      title: item.question,
      text: item.answer
    }))
    : defaultFeatures;

  const growthImg = growthImage?.images?.[0]
    ? resolveImageUrl(growthImage.images[0])
    : studentFallback;

  return (
    <section className="py-16 sm:py-12">

      <div className="max-w-7xl mx-auto px-6 sm:px-4">

        {/* title */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-5 items-start">
          <h2 className="text-4xl sm:text-3xl xs:text-2xl font-semibold text-[#002147] leading-tight">
            {title}
          </h2>

          <p className="text-gray-700 text-base sm:text-[15px]">
            {content}
          </p>
        </div>

        {/* feature section */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-8 mt-10 items-start">

          <img
            src={growthImg}
            alt={title}
            className="w-full object-cover rounded sm:max-h-[420px]"
          />

          <div>
            {features.map((f, i) => (
              <div key={i} className="flex gap-6 sm:gap-4 py-6 sm:py-4 border-b last:border-0">

                <img
                  src={f.icon}
                  className="w-10 h-10 sm:w-8 sm:h-8 mt-1 shrink-0"
                  alt={f.title}
                />

                <div>
                  <h6 className="text-xl sm:text-lg font-medium text-[#002147] leading-snug">
                    {f.title}
                  </h6>
                  <p className="text-gray-600 mt-1 text-sm sm:text-[13.5px]">
                    {f.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
