
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/common/Header"
import FacilitiesPage from "./pages/Facilities"
import ActivitiesPage from "./pages/StudentLife"
import Placements from "./pages/Placement"
import AboutPage from "./pages/About"
import CollegeTemp from "./pages/CollegeTemp"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:slug" element={<CollegeTemp />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App