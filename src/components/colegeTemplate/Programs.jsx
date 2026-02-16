export default function Programs() {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-[#002147] text-3xl md:text-5xl font-medium">
          Programmes Offered
        </h2>

        <div className="w-32 h-[2px] bg-[#002147] mt-3 mb-10"></div>

        <div className="overflow-x-auto">

          <table className="min-w-full border border-gray-300">

            {/* HEADER */}
            <thead>
              <tr className="text-left text-lg font-medium">
                <th className="p-4 bg-cyan-400 text-[#002147]">Programme</th>
                <th className="p-4 bg-red-400 text-[#002147]">Programme Details</th>
                <th className="p-4 bg-yellow-300 text-[#002147]">Eligibility</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-gray-700">

              <tr className="border-t">
                <td className="p-4 font-medium text-[#002147] whitespace-nowrap">
                  MBA (Core)
                </td>

                <td className="p-4 bg-gray-100">
                  Build a strong foundation in business leadership with IBMR’s MBA (Core).
                  Master fundamentals, practical skills and critical thinking.

                  <br /><br />

                  <strong>Program Highlights:</strong>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Interactive problem-solving classes</li>
                    <li>Training in analytics & leadership</li>
                    <li>Dual specialization options</li>
                  </ul>

                  <br />

                  <strong>Career Pathways:</strong> Leadership roles & entrepreneurship.
                </td>

                <td className="p-4 bg-gray-100">
                  Graduation with minimum 50% marks and CMAT score.
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium text-[#002147] whitespace-nowrap">
                  MBA (International Business)
                </td>

                <td className="p-4 bg-gray-100">
                  Expertise in international sales, trade, logistics and global markets.

                  <br /><br />

                  <strong>Program Highlights:</strong>
                  <ul className="list-disc ml-6 mt-2">
                    <li>Global trade policies</li>
                    <li>Cross-cultural management</li>
                    <li>Real-world projects</li>
                  </ul>

                  <br />

                  <strong>Career Pathways:</strong> Global trade, MNC roles, supply chain.
                </td>

                <td className="p-4 bg-gray-100">
                  Graduation with minimum 50% marks and CMAT score.
                </td>
              </tr>

              {/* ADD remaining programs same way */}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}
