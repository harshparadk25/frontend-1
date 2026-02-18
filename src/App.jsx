
import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import Footer from "./components/common/Footer"
import Navbar from "./components/common/Header"

const Home = lazy(() => import("./pages/Home"))
const Contact = lazy(() => import("./pages/Contact"))
const FacilitiesPage = lazy(() => import("./pages/Facilities"))
const StudentLife = lazy(() => import("./pages/StudentLife"))
const Placements = lazy(() => import("./pages/Placement"))
const AboutPage = lazy(() => import("./pages/About"))
const CollegeTemp = lazy(() => import("./pages/CollegeTemp"))

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#002147] border-t-transparent" />
  </div>
)

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
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
        <Route path="/:collegeSlug" element={<CollegeTemp />} />

      </Routes>
      </Suspense>

      <Footer />
    </Router>
  )
}


export default App