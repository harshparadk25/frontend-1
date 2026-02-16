import Hero from "../components/placement/Hero";
import About from "../components/placement/About";
import Incubation from "../components/placement/Incubation";
import Team from "../components/placement/Team";
import Recruiters from "../components/placement/Recruiter";

export default function Placements() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Incubation />
      <Team />
      <Recruiters />
    </div>
  );
}
