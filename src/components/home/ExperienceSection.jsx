import collegeFallback from "../../assets/Images/college.JPG";
import logo360 from "../../assets/logos/360.png";

export default function ExperienceSection({ data }) {

  const title = data?.title || "Experience IPSA with a 3600 View";
  const image = data?.images?.[0] || collegeFallback;

  // Use Cloudinary / external URL directly, or fallback to imported image
  const imageSrc = image.startsWith("http") ? image : collegeFallback;

  return (
    <section className="max-w-[1140px] mx-auto px-4 max-[576px]:px-3">
      <div className="py-[70px] max-[1200px]:py-[60px] max-[991px]:py-[50px] max-[768px]:py-[40px] max-[576px]:py-[30px]">

        <h2 className="text-[#002147] text-[60px] font-medium mb-3
        max-[1200px]:text-[52px]
        max-[991px]:text-[48px]
        max-[768px]:text-[38px]
        max-[576px]:text-[28px] max-[576px]:text-center">
          {title}
        </h2>

        <div className="bg-[#FF7373] w-[380px] h-[2px] mb-12
        max-[768px]:mb-10
        max-[576px]:w-auto max-[576px]:mx-auto max-[576px]:my-[15px]" />

        <div className="relative overflow-hidden rounded-[2px]">

          <img
            src={imageSrc}
            alt={title}
            className="max-h-[568px] w-full object-cover transition-all duration-[600ms] scale-100 
            hover:scale-[1.01] hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
            max-[1200px]:max-h-[520px]
            max-[991px]:max-h-[460px]
            max-[768px]:max-h-[380px]
            max-[576px]:max-h-[300px]"
          />

          <img
            src={logo360}
            alt="360 view"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            max-[991px]:w-[90px]
            max-[768px]:w-[70px]
            max-[576px]:w-[55px]"
          />

        </div>
      </div>
    </section>
  );
}
