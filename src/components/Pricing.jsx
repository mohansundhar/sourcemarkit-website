export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Simple Pricing</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

        {/* Starter */}
        <div className="border p-8 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-500 mb-4">For small suppliers</p>
          <h2 className="text-3xl font-bold mb-6">₹15,000/mo</h2>

          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Catalog Management</li>
            <li>✔ RFQ Automation</li>
          </ul>

          <a
            href="https://sourcemarkit.in/catalog/login"
            target="_blank"
            className="bg-secondary px-6 py-2 rounded-xl inline-block"
          >
            Get Started
          </a>
        </div>

        {/* Pro */}
        <div className="border p-8 rounded-2xl shadow-lg scale-105">
          <h3 className="text-xl font-semibold mb-2">Professional</h3>
          <p className="text-gray-500 mb-4">Best for growing teams</p>
          <h2 className="text-3xl font-bold mb-6">₹25,000/mo</h2>

          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ Everything in Starter</li>
            <li>✔ Vendor Management</li>
            <li>✔ Analytics</li>
          </ul>

          <a
            href="https://sourcemarkit.in/catalog/login"
            target="_blank"
            className="bg-secondary px-6 py-2 rounded-xl inline-block"
          >
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="border p-8 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-gray-500 mb-4">For large organizations</p>
          <h2 className="text-3xl font-bold mb-6">Custom</h2>

          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✔ All features</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
          </ul>

          <a
            href="https://sourcemarkit.in/catalog/login"
            target="_blank"
            className="bg-secondary px-6 py-2 rounded-xl inline-block"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}