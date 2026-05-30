import {
  FileText,
  Zap,
  Users,
  FileCheck,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Catalog Management",
      desc: "Manage product catalogs with dynamic pricing",
      icon: <FileText className="text-primary" size={32} />,
      link: "/catalog-management",
    },
    {
      title: "Procure to Pay",
      desc: "Automate request to pay process",
      icon: <Zap className="text-yellow-500" size={32} />,
      link: "/procure-to-pay",
    },
    {
      title: "Vendor Management",
      desc: "Track supplier performance & compliance",
      icon: <Users className="text-green-500" size={32} />,
      link: "/vendor-management",
    },
    {
      title: "Contract Management",
      desc: "Manage contracts & renewals easily",
      icon: <FileCheck className="text-purple-500" size={32} />,
      link: "/contract-management",
    },
    {
      title: "Data Analysis",
      desc: "Analyze procurement, inventory, and business data with interactive dashboards",
      icon: <BarChart3 className="text-blue-500" size={32} />,
      link: "/data-analysis",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 text-center pt-24"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 mb-12">
          Streamline your procurement with our powerful platform
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.05 }}
            onClick={() => navigate(s.link)}
            className="bg-white p-8 rounded-2xl shadow-soft cursor-pointer group hover:shadow-2xl transition-all duration-300"
          >
            {/* ICON */}
            <motion.div
              className="mb-4 flex justify-center"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {s.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition">
              {s.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}