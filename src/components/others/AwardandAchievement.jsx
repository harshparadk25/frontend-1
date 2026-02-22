import React from "react";

const AwardandAchievement = ({ achievementsHtml, coCurricularHtml }) => {

  if (!achievementsHtml && !coCurricularHtml) return null;

  return (
    <section className="bg-gray-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {achievementsHtml && (
          <div dangerouslySetInnerHTML={{ __html: achievementsHtml }} />
        )}
        {coCurricularHtml && (
          <div dangerouslySetInnerHTML={{ __html: coCurricularHtml }} />
        )}
      </div>
    </section>
  );
};

export default AwardandAchievement;