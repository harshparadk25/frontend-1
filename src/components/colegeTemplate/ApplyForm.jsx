import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitInquiry, fetchCollegeCourseNames } from "../../services/api";

const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ApplyForm({ collegeSlug }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    course_interested: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [courseNames, setCourseNames] = useState([]);

  useEffect(() => {
    if (!collegeSlug) return;
    fetchCollegeCourseNames(collegeSlug)
      .then((names) => setCourseNames(names || []))
      .catch((err) => console.error("Failed to fetch course names:", err));
  }, [collegeSlug]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!collegeSlug) return;
    try {
      setSubmitting(true);
      await submitInquiry(collegeSlug, form);
      setForm({ name: "", email: "", phone_number: "", course_interested: "", message: "" });
      setShowDialog(true);
    } catch (err) {
      console.error("Inquiry submission failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section id="applyform" className="bg-gradient-to-br from-[#060e22] to-[#0f2b5b] py-12 sm:py-14 md:py-16 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* LEFT */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              Apply for Admission 2026
              <br />
              and Shape Your Future
            </h2>

            <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
              Start your journey with world-class faculty, industry-focused curriculum,
              and excellent placement opportunities.
            </p>

            <ul className="mt-6 space-y-2 inline-block text-left">
              {[
                "Industry Oriented Programs",
                "100% Placement Assistance",
                "Modern Infrastructure",
                "Scholarship Options Available",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-yellow-400 font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8"
          >

            <h4 className="font-bold text-lg sm:text-xl mb-5 text-center lg:text-left">Apply Now</h4>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full"
                placeholder="Full Name"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full"
                placeholder="Email"
              />

              <input
                name="phone_number"
                value={form.phone_number}
                onChange={handleChange}
                required
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full"
                placeholder="Mobile Number"
              />

              <select
                name="course_interested"
                value={form.course_interested}
                onChange={handleChange}
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 w-full text-white"
              >
                <option value="" className="text-black">Select Course</option>
                {courseNames.map((name, i) => (
                  <option key={i} value={name} className="text-black">{name}</option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="md:col-span-2 bg-white/10 border border-white/30 rounded-lg px-4 py-3 placeholder-gray-300 w-full"
                placeholder="Message (Optional)"
              />

              <button
                type="submit"
                disabled={submitting}
                className="md:col-span-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#002147] font-bold py-3 rounded-lg hover:opacity-90 transition w-full disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* SUCCESS DIALOG */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#002147] mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Thanks for contacting us. Our team will reach you soon.
              </p>
              <button
                onClick={() => setShowDialog(false)}
                className="bg-[#002147] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#003366] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
