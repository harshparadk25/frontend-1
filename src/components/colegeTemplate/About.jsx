import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.07, ease: "easeOut" } }),
};

export default function About({ about, features }) {
  const title = about?.title || "About";
  const content = about?.content || "";
  const featuresTitle = features?.title || "";
  const featuresSubtitle = features?.subtitle || "";
  const featureItems = features?.items || [];

  return (
    <section id="about" className="py-12 sm:py-14 md:py-10">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2 items-center">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-[#002147] text-2xl sm:text-3xl md:text-5xl font-medium mr-5">
            {title}
          </h2>
          <div className="w-20 sm:w-44 h-[2px] bg-[#faa701] mt-3 mx-auto md:mx-0"></div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-600 text-base sm:text-lg ">
            {content}
          </p>

          <button className="mt-5 bg-white border border-[#002147] text-black px-6 py-3  w-full sm:w-auto">
            Know More
          </button>
        </motion.div>

      </div>

      {featureItems.length > 0 && (
        <div className="bg-[#F0EEEF] mt-20 py-12 sm:py-14 md:py-16">
          <div className="max-w-6xl mx-auto px-4">

            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="text-[#0B2C4D] text-3xl md:text-4xl font-semibold"
            >
              {featuresTitle}
            </motion.h2>

            {/* UNDERLINE */}
            <div className="w-40 h-[3px] bg-red-400 mt-3 mb-6"></div>

            {/* SUBTITLE */}
            <h3 className="text-[#0B2C4D] text-xl md:text-2xl mb-6">
              {featuresSubtitle}
            </h3>

            {/* LIST */}
            <ul className="space-y-5 text-gray-800">
              {featureItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: true, amount: 0.1 }}
                  className="border-b border-gray-300 pb-4 flex gap-3"
                >
                  <span className="mt-2 w-2 h-2 bg-gray-700 rounded-full"></span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

          </div>
        </div>
      )}

    </section>
  );
}
