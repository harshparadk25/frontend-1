import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Hero from "../components/Hospital/Hero";
import About from "../components/Hospital/About";
import Program from "../components/Hospital/Program";
import Facility from "../components/Hospital/Facility";
import Skills from "../components/Hospital/Skills";
import Faculties from "../components/Hospital/Faculties";
import Placement from "../components/Hospital/Placement";

const Hospital = () => {
  return (
    <div className='w-full'>
      <Hero/>
      <About/>
      <Program/>
      <Facility />
      <Skills/>
      <Faculties/>
      <Placement/>
    </div>
  )
}

export default Hospital