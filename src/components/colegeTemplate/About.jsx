export default function About() {
  return (
    <section id="about" className="py-12 sm:py-14 md:py-10">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 items-center">

        <div className="text-center md:text-left">
          <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium mr-5">
            About IBMR
          </h2>
          <div className="w-20 sm:w-44 h-[2px] bg-[#faa701] mt-3 mx-auto md:mx-0"></div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-gray-600 text-base sm:text-lg ">
            At IBMR, shape your future with an innovative, industry-tailored
            curriculum designed with real-world learning and global exposure.
            Build skills and deepen your industry insights to lead and succeed.
          </p>

          <button className="mt-5 bg-white border border-[#002147] text-black px-6 py-3  w-full sm:w-auto">
            Know More
          </button>
        </div>

      </div>
    </section>
  );
}
