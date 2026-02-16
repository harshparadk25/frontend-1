import visionIcon from "../../assets/Images/vision.svg";
import missionIcon from "../../assets/Images/mission.svg";

export default function VisionMission({ data }) {

  const items = data?.items || [];

  // Find vision and mission from the API items array
  const vision = items.find((item) => item.question?.toLowerCase() === "vision");
  const mission = items.find((item) => item.question?.toLowerCase() === "mission");

  const visionTitle = vision?.question || "Vision";
  const visionText = vision?.answer ||
    "IPS Academy aims to be one of the premier institutions of the country, dedicated to creation and dissemination of knowledge and global citizens.";

  const missionTitle = mission?.question || "Mission";
  const missionText = mission?.answer ||
    "To create professional manpower of the highest order and nurture entrepreneurship capabilities amongst students.";

  return (
    <section className="bg-[#FF7373] py-16 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img src={visionIcon} className="mx-auto md:mx-0 h-24" alt="Vision" />

          <div>
            <h2 className="text-4xl md:text-5xl text-[#002147] font-semibold mb-4">
              {visionTitle}
            </h2>

            <p>
              {visionText}
            </p>
          </div>

        </div>

        <div className="h-[2px] bg-gray-200 my-10" />

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl text-[#002147] font-semibold mb-4">
              {missionTitle}
            </h2>

            <p>
              {missionText}
            </p>
          </div>

          <img
            src={missionIcon}
            alt="Mission"
            className="order-1 md:order-2 mx-auto md:ml-auto h-24"
          />

        </div>

      </div>

    </section>
  );
}
