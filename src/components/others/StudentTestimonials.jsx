import React from "react";
import { motion } from "framer-motion";

const StudentTestimonials = () => {

  // ---------------- TEXT TESTIMONIALS (same as yours) ----------------
  const textTestimonials = [
    {
      name: "Ajitesh Patel",
      text: "The faculty at IPS Academy didn't just teach us accounting; they taught us how to think critically. The placement cell worked tirelessly to align our skills with the right opportunities. I’m thrilled to start my corporate journey!"
    },
    {
      name: "Bramha Nand Sharma",
      text: "IPS Academy gave me the perfect blend of academic knowledge and practical exposure. The industrial visits and seminars organized here gave me the confidence to ace my interviews."
    },
    {
      name: "Shivika Bhardwaj",
      text: "From the very first year, the focus was on holistic development. The mock interview sessions were a game-changer for me. Thank you, IPS, for shaping my career!"
    },
    {
      name: "Ujjawal Gour",
      text: "The vibrant campus life and supportive mentors at IPS Academy allowed me to grow beyond textbooks. Getting placed in a top firm feels amazing, and I owe this success to the constant encouragement from my professors."
    },
    {
      name: "Stuti Sharma",
      text: "IPS Academy isn't just a college; it's a foundation for a successful career. The rigorous curriculum combined with soft skills training prepared me for the real corporate world."
    },
    {
      name: "Anvit Kour Rajpal",
      text: "I always dreamt of working in a multinational company, and IPS Academy made it a reality. The placement team helped me recognize my strengths and guided me toward the right career path."
    },
    {
      name: "Riya Chhabadia",
      text: "The case studies and interactive sessions in the B.Com department made learning incredibly engaging. I feel fully equipped to handle the challenges of my new role."
    },
    {
      name: "Arihant Jain",
      text: "What I loved most about IPS Academy was the focus on industry readiness. The curriculum is updated with the latest trends, which gave me an edge during placements."
    },
    {
      name: "Devang Neema",
      text: "IPS Academy provided me with an excellent platform to kickstart my career. The exposure to different industries while studying made the transition to work seamless."
    },
    {
      name: "Kuldeep Singh Chundawat",
      text: "The supportive environment at IPS Academy pushed me to step out of my comfort zone. Thanks to the dedicated placement cell, I secured a position that perfectly aligns with my career goals."
    }
  ];

  // ---------------- VIDEO TESTIMONIALS ----------------
  // 🔥 Dynamic-ready: later replace with API response
  const videoTestimonials = [
    { id: "V1NyINVieAY" },
    { id: "bndYQRNLk68" },
    { id: "WjVLXmhT7UI" },
    { id: "r04pEQRxB3w" },
    { id: "wRAtQrUjTOw" },
    { id: "7sa6o9PuD0k" }
  ];

  // animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">

      {/* ---------------- HEADING ---------------- */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold">
          Department of Commerce, IPS Academy, Indore
        </h2>
      </div>

      {/* ================= TEXT SECTION ================= */}
      <div className="max-w-6xl mx-auto text-center mb-6">
        <p className="text-lg font-semibold">Placement Student Testimonial</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {textTestimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md p-6 border"
          >
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              “{t.text}”
            </p>

            <div className="mt-4 font-semibold text-[#002147]">
              — {t.name}
            </div>
          </motion.div>
        ))}
      </motion.div>


      {/* ================= VIDEO SECTION ================= */}
      <div className="max-w-6xl mx-auto text-center mt-16 mb-6">
        <p className="text-lg font-semibold">Alumni Video Testimonials</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {videoTestimonials.map((video, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md border overflow-hidden"
          >

            {/* Responsive YouTube iframe */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="Alumni testimonial"
                allowFullScreen
              />
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default StudentTestimonials;