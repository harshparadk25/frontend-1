import React from 'react'
import AnnualEvent from '../components/others/AnnualEvent'
import IndustryPartner from '../components/others/IndustryPartner'
import FacultyPublication from '../components/others/FacultyPublication'
import AwardandAchievement from '../components/others/AwardandAchievement'
import ActivitiesHero from '../components/activity/ActivitiesHero'

const SocialAct = () => {
  return (
    <div>
      <ActivitiesHero/>
      <AnnualEvent />
      <IndustryPartner />
      <FacultyPublication />
      <AwardandAchievement />

    </div>
  )
}

export default SocialAct