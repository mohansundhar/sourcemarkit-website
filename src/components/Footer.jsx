export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            SourceMarkit
          </h2>
          <p className="text-sm">
            Automating procurement processes with smart RFQ and supplier management solutions.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get Started</h3>
          <p className="text-sm mb-4">
            Start using SourceMarkit today
          </p>

          <a
            href="https://sourcemarkit.in/catalog/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full inline-block"
          >
            Launch App
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} SourceMarkit. All rights reserved.
      </div>
    </footer>
  );
}