export default function Programs({ data }) {
  const title = data?.title || "Programmes Offered";
  const programs = data?.programs || [];

  return (
    <section id="courses" className="py-12 sm:py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium text-center md:text-left">
          {title}
        </h2>

        <div className="w-24 sm:w-32 h-[2px] bg-[#002147] mt-3 mb-8 sm:mb-10 mx-auto md:mx-0"></div>

        <div className="overflow-x-auto">

          <table className="min-w-full border border-gray-300 text-sm sm:text-base">

            {/* HEADER */}
            <thead>
              <tr className="text-left text-base sm:text-lg font-medium">
                <th className="p-3 sm:p-4 bg-cyan-400 text-[#002147] whitespace-nowrap">
                  Programme
                </th>
                <th className="p-3 sm:p-4 bg-red-400 text-[#002147] whitespace-nowrap">
                  Programme Details
                </th>
                <th className="p-3 sm:p-4 bg-yellow-300 text-[#002147] whitespace-nowrap">
                  Eligibility
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-gray-700 bg-gray-100">

              {programs.map((program, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3 sm:p-4 font-medium text-[#002147] whitespace-nowrap align-top">
                    {program.name}
                  </td>

                  <td className="p-3 sm:p-4 bg-gray-100 whitespace-pre-line">
                    {program.details}
                  </td>

                  <td className="p-3 sm:p-4 bg-gray-100 whitespace-pre-line">
                    {program.eligibility}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}
