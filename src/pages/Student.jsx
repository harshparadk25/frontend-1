import React from 'react'
import StudentClub from '../components/others/StudentClub'
import StudentTestimonials from '../components/others/StudentTestimonials'
import ActivitiesHero from '../components/activity/ActivitiesHero'

const Student = () => {
  return (
    <div>
      <ActivitiesHero/>
      <StudentClub />
      <StudentTestimonials />
    </div>
  )
}

export default Student