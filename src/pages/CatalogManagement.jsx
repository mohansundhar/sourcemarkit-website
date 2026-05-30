export default function CatalogManagement() {

  const catalogFeatures = [
    {
      title: "Static Catalog Management",
      desc: "Manage centralized supplier and customer maintained catalogs with fixed product information, pricing, and procurement standards.",
    },
    {
      title: "Customer Specific Catalogs",
      desc: "Create customized catalogs for customers with negotiated pricing, approved products, and personalized visibility.",
    },
    {
      title: "Supplier Maintained Catalogs",
      desc: "Allow suppliers to upload, manage, and update catalogs directly through the supplier portal.",
    },
    {
      title: "Live Stock Mapping",
      desc: "Track real-time inventory availability and synchronize stock levels across suppliers and warehouses.",
    },
    {
      title: "Dynamic Pricing",
      desc: "Enable automated pricing updates based on contracts, supplier quotations, and market fluctuations.",
    },
    {
      title: "Product Classification",
      desc: "Organize products using categories, commodity groups, UNSPSC codes, and business hierarchies.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl font-bold mb-6">
            Catalog Management System
          </h1>

          <p className="text-xl text-indigo-100 max-w-4xl mx-auto">
            Streamline supplier catalogs, customer-specific pricing,
            inventory visibility, and procurement operations using
            an intelligent catalog management platform designed for MSMEs,
            manufacturers, distributors, and enterprise procurement teams.
          </p>

        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold mb-4">
            Core Catalog Features
          </h2>

          <p className="text-gray-500 text-lg">
            Modern procurement catalog management for suppliers and buyers.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {catalogFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >

              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-500 leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* SUPPLIER NETWORK SECTION */}
      <div className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-4">
              Supplier Network Management
            </h2>

            <p className="text-gray-500 text-lg max-w-4xl mx-auto">
              Empower small-scale suppliers, medium enterprises,
              distributors, and large manufacturers with a unified
              catalog ecosystem for procurement collaboration and
              inventory visibility.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* SMALL SCALE */}
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

              <div className="mb-6">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Small Scale Suppliers
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Simplified Supplier Onboarding
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Enable local vendors and MSME suppliers to upload catalogs,
                manage pricing, and participate in procurement operations
                without requiring complex ERP systems.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Easy product uploads</li>
                <li>✔ Mobile-friendly supplier portal</li>
                <li>✔ Real-time stock updates</li>
                <li>✔ Simple pricing management</li>
                <li>✔ Faster customer onboarding</li>
              </ul>

            </div>

            {/* MEDIUM SCALE */}
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

              <div className="mb-6">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Medium Scale Suppliers
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Integrated Procurement Collaboration
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Medium enterprises can integrate inventory,
                pricing, and catalog operations directly with
                procurement workflows and customer-specific catalogs.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✔ ERP & Excel integration</li>
                <li>✔ Customer-specific pricing</li>
                <li>✔ Automated inventory sync</li>
                <li>✔ Approval workflow management</li>
                <li>✔ Analytics dashboards</li>
              </ul>

            </div>

            {/* ENTERPRISE */}
            <div className="bg-gray-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl transition">

              <div className="mb-6">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Enterprise Suppliers
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Enterprise Catalog Ecosystem
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Large suppliers and manufacturers can manage
                multi-location inventory, dynamic pricing,
                API integrations, and enterprise procurement
                operations from a centralized platform.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✔ Multi-location inventory mapping</li>
                <li>✔ API & ERP integrations</li>
                <li>✔ Dynamic pricing engine</li>
                <li>✔ Enterprise approval workflows</li>
                <li>✔ Advanced analytics reporting</li>
              </ul>

            </div>

          </div>
        </div>
      </div>

      {/* KPI SECTION */}
      <div className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-4">
              Business Impact
            </h2>

            <p className="text-gray-500 text-lg">
              Improve procurement efficiency and supplier collaboration.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-6">

            <div className="bg-blue-50 rounded-2xl p-8 text-center">

              <h3 className="text-lg font-semibold mb-4">
                Faster Procurement
              </h3>

              <p className="text-4xl font-bold text-blue-600">
                40%
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-8 text-center">

              <h3 className="text-lg font-semibold mb-4">
                Supplier Network
              </h3>

              <p className="text-4xl font-bold text-green-600">
                500+
              </p>

            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 text-center">

              <h3 className="text-lg font-semibold mb-4">
                Product Catalogs
              </h3>

              <p className="text-4xl font-bold text-yellow-600">
                25K+
              </p>

            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center">

              <h3 className="text-lg font-semibold mb-4">
                Inventory Visibility
              </h3>

              <p className="text-4xl font-bold text-purple-600">
                Real-Time
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* MODULES SECTION */}
      <div className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold mb-4">
              Catalog Management Modules
            </h2>

            <p className="text-gray-500 text-lg">
              Complete catalog lifecycle management for procurement operations.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Supplier Catalog Portal
              </h3>

              <p className="text-gray-500">
                Suppliers can upload catalogs, update pricing,
                maintain stock availability, and manage product information.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Customer Catalog Control
              </h3>

              <p className="text-gray-500">
                Configure customer-specific products, pricing agreements,
                approval workflows, and visibility restrictions.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Inventory Synchronization
              </h3>

              <p className="text-gray-500">
                Real-time stock synchronization between suppliers,
                warehouses, ERP systems, and procurement platforms.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Approval Workflow
              </h3>

              <p className="text-gray-500">
                Multi-level approval process for catalog updates,
                pricing changes, and supplier onboarding.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Analytics Dashboard
              </h3>

              <p className="text-gray-500">
                Monitor catalog usage, supplier performance,
                inventory movement, and procurement trends.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl shadow-lg p-8">

              <h3 className="text-2xl font-semibold mb-4">
                ERP Integration
              </h3>

              <p className="text-gray-500">
                Seamless integration with SAP, Oracle, Zoho,
                Tally, and other ERP systems.
              </p>

            </div>

          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 py-20 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Modernize Your Catalog Management
          </h2>

          <p className="text-xl text-indigo-100 mb-10">
            Centralize supplier catalogs, improve inventory visibility,
            and streamline procurement operations with SourceMarkit.
          </p>

          <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
            Request Free Demo
          </button>

        </div>
      </div>

    </div>
  );
}