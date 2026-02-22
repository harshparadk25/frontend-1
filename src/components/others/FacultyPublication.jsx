import React from "react";

const FacultyPublication = ({ html }) => {

  if (html) {
    return (
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    );
  }

  return null;
};

export default FacultyPublication;