import trophy from "../../assets/Images/trophy 2.svg";
import sportsHero from "../../assets/Images/268A2441.jpg";

export default function Sports() {
  return (
    <section className="py-10 mt-20 sm:mt-14 mt-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        {/* ---------- INTRO SECTION ---------- */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start mb-8">

          {/* LEFT */}
          <div>

            <div className="bg-[#FF7373] text-[#002147] text-[22px] sm:text-[20px] text-[18px] font-medium px-4 py-1 w-fit mb-2">
              Hostel
            </div>

            <h2 className="text-[34px] md:text-[42px] sm:text-[30px] text-[26px] font-medium text-[#002147] leading-snug">
              Your Playground for Success
            </h2>

            <div className="w-[120px] h-[3px] bg-[#FFC73E] mt-2"></div>

          </div>

          {/* RIGHT */}
          <p className="text-[#3A3A3A] text-base sm:text-[15px] leading-relaxed">
            At IPS, sports is a way of life. Our state-of-the-art sports facilities encourage you to step
            out of your comfort zone and uncover new dimensions to your personality.
            Find your passion, build new skills and imbibe new life lessons on the playing field.
          </p>

        </div>

        {/* HERO IMAGE */}
        <div className="pt-10 sm:pt-8">
          <img
            src={sportsHero}
            className="w-full min-h-[480px] max-h-[480px] md:min-h-[420px] md:max-h-[420px] sm:min-h-[320px] sm:max-h-[320px] min-h-[260px] max-h-[260px] object-cover"
          />

          {/* CAPTION BOX */}
          <div className="bg-[#F0EEEF] p-[28px] sm:p-[22px] grid md:grid-cols-2 gap-4 items-center">
            <p className="text-[32px] md:text-[28px] sm:text-[24px] text-[22px] font-medium text-[#002147] leading-snug">
              Join a Community of Athletes
            </p>

            <span className="text-[#3A3A3A] text-[16px] sm:text-[15px] leading-relaxed">
              Whether you are a star athlete or someone who plays for fun,
              IPS offers indoor and outdoor opportunities to pursue a wide
              range of sports.
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h5 className="text-[32px] md:text-[30px] sm:text-[26px] text-[24px] text-[#002147] font-medium mt-6">
          The Sportstars of IPS
        </h5>

        {/* ATHLETES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 mt-6">

          <Athlete name="Varun Bais" desc="International Football Player" />

          <Athlete
            name="Deepu Munim"
            desc={
              <ul className="list-disc pl-5">
                <li>MP State Ranking in Doubles Category</li>
                <li>DAVV Inter-collegiate Lawn Tennis Tournament</li>
              </ul>
            }
          />

          <Athlete
            name="Rishita Manas"
            desc="DAVV Inter-collegiate Lawn Tennis Tournament"
          />

          <Athlete
            name="Modi Dhakad"
            desc={
              <ul className="list-disc pl-5">
                <li>Gold Medal in DAVV 10m Pistol Shooting</li>
                <li>Best Shooter of DAVV University Since 2021</li>
                <li>Only Player to Win 5 Gold Medals</li>
              </ul>
            }
          />

        </div>

        {/* DIVIDER */}
        <hr className="h-[2px] bg-[#D9D9D9] border-none my-8 sm:my-6" />

        {/* SPORTS LISTS */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-5">

          <SportsList items={[
            "400 M Athletic track",
            "2 Huge Grounds for Cricket and Football",
            "26 Indoor and Outdoor sports",
            "Karate Hall",
            "Yoga Room",
            "Volleyball Courts",
            "Kabaddi Grounds"
          ]} />

          <SportsList items={[
            "KHO-KHO Grounds",
            "400 Meter Athletic Track",
            "Horse Riding Arena",
            "Skating",
            "Chess Room",
            "Basketball Courts",
            "Lawn Tennis Courts"
          ]} />

          <SportsList items={[
            "Football Ground",
            "Cricket Ground",
            "Shooting Range",
            "Swimming Pool",
            "Table Tennis Hall",
            "Judo Hall",
            "Gymnastic Hall"
          ]} />

        </div>

      </div>
    </section>
  );
}


/* ---------- Athlete Card ---------- */

function Athlete({ name, desc }) {
  return (
    <div className="p-4 sm:p-3">

      <img src={trophy} className="mb-3 sm:mb-2 w-auto h-auto" />

      <div className="text-[24px] sm:text-[22px] text-[20px] font-medium text-[#002147] border-b border-[#FFC73E] pb-4 pt-2">
        {name}
      </div>

      <div className="text-[16px] sm:text-[15px] text-[#3A3A3A] pt-4 leading-relaxed">
        {desc}
      </div>

    </div>
  );
}


/* ---------- Sports List ---------- */

function SportsList({ items }) {
  return (
    <ul className="text-[16px] sm:text-[15px]">
      {items.map((item, i) => (
        <li key={i} className="mb-4 sm:mb-3 flex">
          <span className="mr-2 text-[#002147]">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
