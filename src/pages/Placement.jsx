import { useEffect, useState } from "react";
import { fetchPageData } from "../services/api";
import Hero from "../components/placement/Hero";
import About from "../components/placement/About";
import Incubation from "../components/placement/Incubation";
import Team from "../components/placement/Team";
import Recruiters from "../components/placement/Recruiter";
import { useParams } from "react-router-dom";

export default function Placements() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { collegeSlug } = useParams();

  useEffect(() => {
    fetchPageData(collegeSlug, "placements")
      .then((res) => setData(res))
      .catch((err) => {
        console.error("Failed to load placements:", err);
        setError("Failed to load placements data.");
      })
      .finally(() => setLoading(false));
  }, [collegeSlug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002147]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  const sections = data?.sections || {};

  return (
    <div className="w-full overflow-hidden">
      <Hero data={sections.hero} />
      <About data={sections.about_ips} />
      <Incubation
        infrastructure={sections.an_infrastructure}
        vibrant={sections.vibrant_entreprenurial}
        collaboration={sections.a_collaboration}
        stats={sections.orientation_and_awareness}
      />
      <Team data={sections.the_placement_team} />
      <Recruiters />
    </div>
  );
}
