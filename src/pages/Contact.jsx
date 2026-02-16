import { MapPin, Phone, Mail, BookOpen } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="pt-[50px] pb-[40px] px-3 sm:px-0">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#002147]">
              Contact Us
            </h2>
            <div className="w-16 h-[2px] bg-[#002147] mt-2"></div>
          </div>

          {/* CONTACT INFO */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6">

            <Info icon={<MapPin size={20} />} >
              IPS Academy, AB Road,<br />
              Rajendra Nagar, Indore (M.P)
            </Info>

            <Info icon={<Phone size={20} />} >
              +91 92294 98055 <br />
              +91 99778 35161
            </Info>

            <Info icon={<Mail size={20} />} >
              <a href="mailto:info@ipsacademy.org" className="underline">
                info@ipsacademy.org
              </a>
            </Info>

            <Info icon={<BookOpen size={20} />} >
              <a href="#" className="underline">
                Telephone Directory
              </a>
            </Info>

          </div>

          {/* CONTACT CARD */}
          <div className="bg-[#F0EEEF] p-5 sm:p-10">

            <h5 className="text-[28px] sm:text-[40px] font-normal text-[#002147] mb-4">
              Get in Touch
            </h5>

            <form className="space-y-3">

              <input
                type="text"
                placeholder="Enter Name"
                className="w-full bg-white px-6 py-2 text-sm placeholder-[#8F8F8F] focus:outline-none"
              />

              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full bg-white px-6 py-2 text-sm placeholder-[#8F8F8F] focus:outline-none"
              />

              {/* PHONE INPUT */}
              <div className="flex items-center bg-white px-6 py-2">

                <select className="bg-transparent outline-none font-medium pr-2">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                  <option>+61</option>
                </select>

                <span className="mx-2 text-gray-400">|</span>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 outline-none text-sm placeholder-[#8F8F8F]"
                />

              </div>

              {/* STATE CITY */}
              <div className="grid md:grid-cols-2 gap-3">

                <select className="bg-white px-6 py-2 text-sm text-gray-500 outline-none h-[45px]">
                  <option>Select State</option>
                </select>

                <select className="bg-white px-6 py-2 text-sm text-gray-500 outline-none h-[45px]">
                  <option>Select City</option>
                </select>

              </div>

              <textarea
                rows="4"
                placeholder="Type Your Enquiry Here"
                className="w-full bg-white px-6 py-4 text-sm placeholder-[#8F8F8F] outline-none"
              />

              <button
                type="submit"
                className="bg-[#002147] text-white px-8 py-2 text-sm hover:bg-[#081f36] transition"
              >
                Submit
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="w-full">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789!2d75.857123!3d22.719567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e4a8abcd1234%3A0x1234567890abcdef!2sRP%20Education%20%26%20Bridge!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        allowfullscreen="" loading="lazy" width="100%" height="600px">
    </iframe>
      </div>
    </>
  );
}

/* HELPER */
function Info({ icon, children }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="text-[#FF7373] pt-1">{icon}</div>
      <p className="text-[16px] text-[#002147] font-medium leading-5">
        {children}
      </p>
    </div>
  );
}
