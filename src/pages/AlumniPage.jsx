import React, { useState, useEffect } from 'react'
import Alumni from '../components/others/Alumni'
import Hero from '../components/others/Hero'
import { fetchPageData } from '../services/api'
import { useParams } from 'react-router-dom'

const AlumniPage = () => {
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const collegeSlug = useParams();

  useEffect(() => {
    fetchPageData(collegeSlug, "activities/alumni")
      .then((data) => setPageData(data))
      .catch((err) => console.error("Failed to fetch alumni data:", err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
      </div>
    )
  }

  const sections = pageData?.data?.sections || {}
  const heroSection = sections.hero
  const alumniSection = sections.alumni
  const socialSection = sections.social_activities
  const testimonialsSection = sections.alumni_testimonials

  return (
    <div>
      <Hero
        heroImage={heroSection?.images?.[0]}
        description={heroSection?.description}
        ctaText={heroSection?.cta_text}
        ctaLink={heroSection?.cta_link}
      />
      <Alumni
        alumniHtml={alumniSection?.html}
        socialHtml={socialSection?.html}
        testimonials={testimonialsSection?.items}
        testimonialTitle={testimonialsSection?.title}
      />
    </div>
  )
}

export default AlumniPage