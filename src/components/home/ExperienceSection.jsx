import collegeFallback from "../../assets/Images/college.JPG";
import logo360 from "../../assets/logos/360.png";

export default function ExperienceSection({ data }) {

  const title = data?.title || "Experience IPSA with a 3600 View";
  const image = data?.images?.[0] || collegeFallback;

  // Use Cloudinary / external URL directly, or fallback to imported image
  const imageSrc = image.startsWith("http") ? image : collegeFallback;

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-[60px] font-medium text-[#002147]">
        {title}
      </h2>

      <div className="w-96 h-[2px] bg-[#FF7373] my-6" />

      <div className="relative">

        <img
          src={imageSrc}
          alt={title}
          className="w-full h-[560px] object-cover"
        />

        <img
          src={logo360}
          alt="360 view"
          className="absolute inset-0 m-auto h-16"
        />

      </div>

    </section>
  );
}
