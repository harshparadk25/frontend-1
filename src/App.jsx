
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
import { Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* DEFAULT REDIRECT */}
        <Route path="/" element={<Navigate to="/ipsa/home" replace />} />

        {/* COLLEGE ROUTES */}
        <Route path="/:collegeSlug/home" element={<Home />} />
        <Route path="/:collegeSlug/about" element={<AboutPage />} />
        <Route path="/:collegeSlug/contact" element={<Contact />} />
        <Route path="/:collegeSlug/facilities" element={<FacilitiesPage />} />
        <Route path="/:collegeSlug/placements" element={<Placements />} />
        <Route path="/:collegeSlug/activities/:subSlug" element={<StudentLife />} />

      </Routes>

      <Footer />
    </Router>
  )
}


export default App