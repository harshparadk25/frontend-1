import Logo from "../../assets/Images/static.jpg";
import nirf from "../../assets/Images/nirf-logo.png";

function Stat({ num, label }) {
  return (
    <div>
      <h5 className="text-4xl font-medium text-[#002147]">{num}</h5>
      <p className="text-xl text-[#002147]">{label}</p>
    </div>
  );
}

export default function StatsSection({ statsData, excellenceData }) {

  const stats = statsData?.stats || [];
  const excellenceTitle = excellenceData?.title || "High on Excellence Since 1993";
  const excellenceItems = excellenceData?.items || [];

  return (
    <section className="bg-[#062b4c] pb-20">

      <div
        className="relative h-[560px] bg-cover bg-top flex items-center ml-28"
        style={{ backgroundImage: `url(${Logo})` }}
      >

        <div className="absolute left-[3%] bg-[#0CC2FE] p-10 grid grid-cols-2 gap-10">
          {stats.map((stat, i) => (
            <Stat key={i} num={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 text-white">

        <h2 className="text-[54px] font-medium">
          {excellenceTitle}
        </h2>

        <div className="w-96 h-[2px] bg-[#FF7373] my-6" />

        <div className="grid md:grid-cols-3 gap-8">
          {excellenceItems.map((item, i) => {
            // Last item gets the NIRF logo treatment
            if (i === excellenceItems.length - 1) {
              return (
                <div key={i} className="flex gap-4 items-center">
                  <div>
                    <p>{item.question}</p>
                    <p>{item.answer}</p>
                  </div>
                  <img src={nirf} className="h-12" alt="NIRF" />
                </div>
              );
            }
            return (
              <Info
                key={i}
                title={item.question}
                desc={item.answer}
              />
            );
          })}
        </div>

      </div>

    </section>
  );
}

function Info({ title, desc }) {
  return (
    <div>
      <h4 className="text-3xl">{title}</h4>
      <p className="whitespace-pre-line">{desc}</p>
    </div>
  );
}
