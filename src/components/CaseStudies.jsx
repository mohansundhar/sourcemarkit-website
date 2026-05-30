import { motion } from "framer-motion";

export default function CaseStudies() {
  const cases = [
    {
      title: "Mid-Size Supplier",
      desc: "Saved 150+ hours per month",
      result: "Efficiency Boost",
    },
    {
      title: "Small Supplier",
      desc: "Reduced quote time by 70%",
      result: "Faster RFQs",
    },
    {
      title: "Distributor",
      desc: "Improved order processing speed",
      result: "Operational Growth",
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50 text-center pt-24">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Proven Results with Case Studies
        </h2>

        <p className="text-gray-600 mb-12">
          Real businesses achieving real results using SourceMarkit
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.04 }}
            className="bg-white rounded-2xl shadow-soft p-8 text-left cursor-pointer"
          >
            <h3 className="font-bold text-xl mb-2">
              {c.title}
            </h3>

            <p className="text-gray-500 mb-4">
              {c.desc}
            </p>

            <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full mb-6">
              {c.result}
            </span>

            <div>
              <button className="text-primary font-semibold hover:underline">
                Read Case Study →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://sourcemarkit.in/catalog/login"
          target="_blank"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          See More Results
        </a>
      </motion.div>

    </section>
  );
}