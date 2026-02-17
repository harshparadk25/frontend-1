import Logo from "../../assets/Images/static.jpg";
import nirf from "../../assets/Images/nirf-logo.png";

export default function StatsSection({ statsData, excellenceData }) {
  const stats = statsData?.stats || [];
  const excellenceTitle = excellenceData?.title || "Rankings & Quality Accreditations";
  const excellenceItems = excellenceData?.items || [];

  return (
    <section className="bg-[#062b4c] pb-[70px] max-[768px]:pb-[50px] max-[576px]:pb-5">

      {/* Hero Second - Background Image */}
      <div
        className="relative h-[568px] bg-cover bg-top flex items-center ml-auto top-[-70px] max-w-[calc(100%-105.5px)] rounded-none
          max-[1200px]:max-w-[calc(100%-60px)]
          max-[991px]:max-w-full max-[991px]:h-[520px]
          max-[768px]:h-[480px] max-[768px]:top-[-40px]
          max-[576px]:h-auto max-[576px]:max-h-full max-[576px]:top-0 max-[576px]:py-10"
        style={{ backgroundImage: `url(${Logo})` }}
      >

        {/* Stats Box */}
        <div
          className="absolute left-[3%] top-1/2 -translate-y-1/2 bg-[#0CC2FE] p-[50px] max-w-[503px] text-white grid grid-cols-2 gap-10
            max-[1200px]:p-[40px]
            max-[991px]:p-[35px] max-[991px]:max-w-[460px]
            max-[768px]:p-[28px] max-[768px]:gap-7
            max-[576px]:relative max-[576px]:left-0 max-[576px]:top-0 max-[576px]:translate-y-0 max-[576px]:mx-auto max-[576px]:max-w-full max-[576px]:grid-cols-1 max-[576px]:gap-6 max-[576px]:p-[30px] max-[576px]:text-center"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${i % 2 === 0 && i + 1 < stats.length
                  ? "border-r border-white/70 max-[576px]:border-r-0"
                  : ""
                }`}
            >
              <h5 className="text-[38px] font-medium text-[#002147] mb-0!
                max-[991px]:text-[34px]
                max-[768px]:text-[30px]
                max-[576px]:text-[26px]">
                {stat.value}
              </h5>

              <p className="text-[24px] text-[#002147] leading-[26px] mb-0!
                max-[991px]:text-[22px]
                max-[768px]:text-[20px]
                max-[576px]:text-[16px] max-[576px]:leading-5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rankings & Accreditations */}
      <div className="max-w-[1140px] mx-auto px-4 text-white max-[576px]:px-3">

        <h2 className="text-left text-[54px] font-medium mb-4
          max-[1200px]:text-[50px]
          max-[991px]:text-[48px]
          max-[768px]:text-[40px]
          max-[576px]:text-[30px] max-[576px]:text-center max-[576px]:pt-[30px]">
          {excellenceTitle}
        </h2>

        <div className="w-[384px] h-[2px] bg-[#FF7373]
          max-[768px]:w-[260px]
          max-[576px]:w-[200px] max-[576px]:mx-auto max-[576px]:mb-5" />

        <div
          className={`grid gap-[30px] py-[18px]
          max-[991px]:gap-[24px]
          max-[768px]:gap-[18px]
          max-[576px]:grid-cols-1 max-[576px]:text-center max-[576px]:gap-[10px] max-[576px]:py-[15px]`}
          style={{ gridTemplateColumns: `repeat(${excellenceItems.length}, minmax(0, 1fr))` }}
        >

          {excellenceItems.map((item, i) => {
            if (i === excellenceItems.length - 1) {
              return (
                <div key={i} className="flex items-start w-full text-white
                  max-[768px]:items-start
                  max-[576px]:flex-col max-[576px]:items-center max-[576px]:text-center">

                  {/* TEXT */}
                  <div className="pr-6 gap-2 max-[768px]:pr-4 max-[576px]:pr-0">
                    <p className="text-[20px] mb-0 font-normal leading-[22px]
                      max-[768px]:text-[18px]
                      max-[576px]:text-[18px]">
                      {item.question}
                    </p>

                    <hr className="my-2 opacity-60" />

                    <p className="text-[20px] mb-0 font-normal leading-[22px]
                      max-[768px]:text-[18px]
                      max-[576px]:text-[18px]">
                      {item.answer}
                    </p>
                  </div>

                  {/* LOGO */}
                  <img
                    src={nirf}
                    alt="NIRF Logo"
                    className="h-[64px] w-auto ml-auto
                      max-[991px]:h-[56px]
                      max-[768px]:h-[50px]
                      max-[576px]:ml-0 max-[576px]:mt-3 max-[576px]:h-[44px]"
                  />

                </div>
              );
            }

            return (
              <div key={i}>
                <h4 className="text-[34px] mb-[5px] font-medium
                  max-[991px]:text-[30px]
                  max-[768px]:text-[26px]
                  max-[576px]:text-[24px]">
                  {item.question}
                </h4>

                <p className="text-[23px] opacity-90 leading-[26px]
                  max-[991px]:text-[21px]
                  max-[768px]:text-[19px]
                  max-[576px]:text-[16px]">
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
