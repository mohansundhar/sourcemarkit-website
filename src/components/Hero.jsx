import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-primary/10 via-white to-secondary/20 py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect. Compare. Procure
            <br />
            <span className="text-primary">The Fair Way</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            We act as your trusted intermediary—connecting you with verified
            suppliers, managing RFQs, and ensuring you always get the best value.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 items-center">
            <motion.a
              href="https://sourcemarkit.in/catalog/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl shadow-soft font-semibold"
            >
              Launch App
            </motion.a>

            <a
              href="#services"
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>

          {/* STATS (ONE LINE) */}
          <div className="flex items-center gap-6 mt-10 text-gray-700 whitespace-nowrap overflow-x-auto">

            <span>⚡ 70% Faster Sourcing</span>

            <span className="text-gray-300">|</span>

            <span>⚖️ 100% Transparent Pricing</span>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow */}
          <div className="absolute w-[90%] h-[90%] bg-primary/20 rounded-3xl blur-3xl opacity-40"></div>

          {/* Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            alt="dashboard"
            className="relative w-full max-w-xl rounded-2xl shadow-soft"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

      </div>
    </section>
  );
}