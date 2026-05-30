import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_aoxtkzv",     // 🔁 replace
      "template_5dz2l2v",    // 🔁 replace
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "h0PNUpOr2oapXloVV"      // 🔁 replace
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((error) => {
      console.error("Email error:", error);
      setLoading(false);
      alert("Something went wrong. Try again.");
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Have questions about SourceMarkit? Our team is here to help you automate your procurement process.
          </p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span>📧</span>
              <span>mohan@sourcemarkit.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📧</span>
              <span>pavithran@sourcemarkit.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📞</span>
              <span>+91 9980705186</span>
            </div>

            <div className="flex items-center gap-3">
              <span>📍</span>
              <span>Madurai & Bangalore</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-soft space-y-4"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            rows="4"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>

          {/* BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold shadow-soft disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p className="text-green-600 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
}