
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/common/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/common/Header"
import FacilitiesPage from "./pages/Facilities"
import StudentLife from "./pages/StudentLife"
import Placements from "./pages/Placement"
import AboutPage from "./pages/About"
import CollegeTemp from "./pages/CollegeTemp"

function App() {
  return (
    <Router>
  <Navbar />

  <Routes>

    {/* ========= STATIC PAGES ========= */}
    <Route path="/" element={<Home />} />
    <Route path="/facilities" element={<FacilitiesPage />} />
    <Route path="/placements" element={<Placements />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<Contact />} />

    {/* ========= COLLEGE TEMPLATE ========= */}
    <Route path="/college/:slug" element={<CollegeTemp />} />

    {/* ========= STUDENT LIFE DYNAMIC ========= */}
    <Route path="/:collegeSlug/studentlife/:subSlug" element={<StudentLife />} />



  </Routes>

  <Footer />
</Router>

  )
}

export default App