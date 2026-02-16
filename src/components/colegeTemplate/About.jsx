export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-[#002147] text-3xl md:text-5xl font-medium">
            About IBMR
          </h2>
          <div className="w-24 h-[2px] bg-[#002147] mt-3"></div>
        </div>

        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            At IBMR, shape your future with an innovative, industry-tailored
            curriculum designed with real-world learning and global exposure.
            Build skills and deepen your industry insights to lead and succeed.
          </p>

          <button className="mt-5 bg-[#002147] text-white px-6 py-3 rounded hover:bg-[#001530]">
            Know More
          </button>
        </div>

      </div>
    </section>
  );
}
