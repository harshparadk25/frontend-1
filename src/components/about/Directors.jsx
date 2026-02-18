import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function Directors(){

  const card = (title, color, items) => (
    <div className="bg-[#f7f4f4] h-full">

      {/* Header */}
      <div className={`px-6 py-2 font-medium text-[#002147] text-[18px] ${color}`}>
        {title}
      </div>

      {/* Items */}
      {items.map((t,i)=>(
        <div
          key={i}
          className="bg-[#F0EEEF] px-6 py-5 mb-[3px]"
        >
          <p className="text-[#3A3A3A] text-[18px] leading-[22px] font-normal whitespace-pre-line">
            {t}
          </p>
        </div>
      ))}

    </div>
  )

  return(
    <section className="py-16">

      <div className="max-w-6xl mx-auto px-3">

        {/* Heading */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl md:text-[60px] font-medium text-[#002147]"
        >
          Institute Directors
        </motion.h3>

        <div className="h-[2px] w-60 bg-[#FF7373] my-3 mb-8"/>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {[0, 1, 2].map((colIdx) => {
            const cols = [
              { title: "College / Institute", color: "bg-[#0CC2FE]", items: ["IPS Academy Institute of Business Management & Research","IPS Academy Indore\n(Affiliated to DAVV)","School of Computers","College of Law","Institute of Hotel Management","Institute of Fashion Technology","School of Education"] },
              { title: "Courses", color: "bg-[#FF7373]", items: ["BBA (Plain/FT), BBA (Hospital Administration) MBA, BA Economics\nPh.D. (Management & Economics)","Institute of Science & Research\nB.Sc., M.Sc., B.Lib. MSW Ph.D. (Chemistry & Physics)","Department of Computer Science\nBCA","College of Commerce\nB.Com., M.Com.","School of Travel & Tourism\nBA Travel & Tourism","Department of Fashion Technology\nPG Diploma in Fashion Designing and Marketing","MCA, MCA (Integrated)","B.A.LL.B, B.B.A.LL.B\nLL.B, LL.M","BHM, BBAHM","B. Design","B.Ed."] },
              { title: "Principal / Director", color: "bg-[#FFC73E]", items: ["Dr. Vivek Singh Kushwaha\nDirector","Dr. Premlata Gupta\nPrincipal","Dr. Manish Pundlik\nHOD","Dr. Rupali Sharma\nPrincipal","Prof. J.K. Gupta\nDirector","Mrs. Preity Sarva\nPrincipal","Dr. Sunita Sharma\nPrincipal"] }
            ];
            const col = cols[colIdx];
            return (
              <motion.div
                key={colIdx}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                custom={colIdx}
                viewport={{ once: true, amount: 0.1 }}
              >
                {card(col.title, col.color, col.items)}
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  )
}
