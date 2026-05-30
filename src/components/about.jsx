import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* 🔷 LEFT SIDE – CORE OBJECTIVE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold mb-3">
            OUR CORE OBJECTIVE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Digital & Fair Procurement for SMEs
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are transforming the way businesses handle indirect procurement by bringing
            fairness, speed, and transparency into every transaction.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            SourceMarkit acts as a trusted intermediary between clients and suppliers,
            ensuring the right supplier selection, competitive pricing, and smooth procurement execution.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to replace manual, unclear workflows with structured,
            transparent, and digital procurement processes that create value for both buyers and suppliers.
          </p>

          {/* 🔥 Manual → Digital Indicator */}
          <div className="mt-8 bg-gray-50 p-6 rounded-2xl shadow-soft">
            <p className="text-sm text-gray-500 mb-2">
              Manual procurement is slow, inconsistent, and lacks visibility.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-red-500 font-medium">Manual</span>
              <span className="mx-2">→</span>
              <span className="text-primary font-semibold">
                Digital with SourceMarkit
              </span>
            </div>
          </div>
        </motion.div>

        {/* 🔷 RIGHT SIDE – PLATFORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 to-secondary/20 p-10 rounded-3xl shadow-soft"
        >
          <h3 className="text-2xl font-bold mb-4">
            The SourceMarkit Platform
          </h3>

          <p className="text-gray-600 mb-6">
            A smarter way to connect buyers and suppliers through fair and efficient procurement.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Smart supplier matching</li>
            <li>✔ Transparent RFQ process</li>
            <li>✔ Faster procurement cycles</li>
            <li>✔ Data-driven decision making</li>
          </ul>

          {/* CTA */}
          <a
            href="https://sourcemarkit.in/catalog/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Explore Platform
          </a>
        </motion.div>

      </div>
    </section>
  );
}