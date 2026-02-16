import ActivitiesHero from "../components/activity/ActivitiesHero";
import ActivitiesSlider from "../components/activity/ActivitiesSlider";

export default function ActivitiesPage() {
  return (
    <div className="w-full overflow-hidden">
      <ActivitiesHero />
      <ActivitiesSlider />
    </div>
  );
}
