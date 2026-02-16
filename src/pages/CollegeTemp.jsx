import Hero from "../components/colegeTemplate/Hero";
import About from "../components/colegeTemplate/About";
import Advantage from "../components/colegeTemplate/Advantage";
import Programs from "../components/colegeTemplate/Programs";
import Facilities from "../components/colegeTemplate/Facilities";
import Placement from "../components/colegeTemplate/Placement";
import Faculty from "../components/colegeTemplate/Faculty";
import Admission from "../components/colegeTemplate/Admission";
import ApplyForm from "../components/colegeTemplate/ApplyForm";
import Recruiters from "../components/colegeTemplate/Recruiters";

export default function IbmrPage() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Advantage />
      <Programs />
      <Facilities />
      <Placement />
      <Faculty />
      <Admission />
      <ApplyForm />
      <Recruiters />
    </div>
  );
}
