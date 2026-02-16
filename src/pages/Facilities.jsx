import Hero from "../components/facilities/Hero";
import HostelFeatures from "../components/facilities/HostelFeature";
import LibraryVision from "../components/facilities/LibraryVision";
import Sports from "../components/facilities/Sports";
import FuturePlan from "../components/facilities/FuturePlan";
import FacilityBlocks from "../components/facilities/FacilityBlocks";

export default function FacilitiesPage() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <HostelFeatures />
      <LibraryVision />
      <Sports />
      <FuturePlan />
      <FacilityBlocks />
    </div>
  );
}
