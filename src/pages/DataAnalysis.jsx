export default function DataAnalysis() {
  const analytics = [
    {
      title: "Procurement Spend Analysis",
      desc: "Track supplier spending, cost trends, and procurement savings opportunities.",
      value: "₹ 12.5L Savings",
    },
    {
      title: "Supplier Performance",
      desc: "Monitor supplier quality, delivery timelines, and vendor ratings.",
      value: "92% On-Time Delivery",
    },
    {
      title: "Inventory Analytics",
      desc: "Analyze stock levels, dead stock, and inventory turnover.",
      value: "18% Stock Optimization",
    },
    {
      title: "Production Analytics",
      desc: "Monitor machine efficiency, downtime, rejection rates, and production output.",
      value: "85% Production Efficiency",
    },
    {
      title: "Sales Analytics",
      desc: "Analyze sales performance, customer trends, revenue growth, and top-selling products.",
      value: "₹ 4.2 Cr Revenue",
    },
    {
      title: "Business Intelligence",
      desc: "Interactive dashboards with real-time KPIs, trends, and operational insights.",
      value: "100+ KPIs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Data Analysis & Business Intelligence
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Transform procurement, supplier, sales, inventory, and production data
            into actionable insights using AI-powered dashboards and analytics.
          </p>
        </div>
      </div>

      {/* ANALYTICS CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {analytics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-500 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="text-blue-600 font-bold text-xl">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KPI DASHBOARD */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Real-Time Business Dashboard
            </h2>

            <p className="text-gray-500 text-lg">
              Monitor procurement, production, sales, and operations with live dashboards.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">
                Total Sales
              </h3>

              <p className="text-4xl font-bold text-blue-600">
                ₹ 4.2 Cr
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">
                Production Output
              </h3>

              <p className="text-4xl font-bold text-green-600">
                12,480 Units
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">
                Active Suppliers
              </h3>

              <p className="text-4xl font-bold text-yellow-600">
                148
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4">
                Procurement Savings
              </h3>

              <p className="text-4xl font-bold text-purple-600">
                ₹ 18L
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SALES & PRODUCTION SECTION */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* SALES ANALYTICS */}
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">
                Sales Analytics
              </h2>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Monthly Revenue Growth</span>
                    <span className="font-bold">+24%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Customer Retention</span>
                    <span className="font-bold">88%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Order Fulfillment</span>
                    <span className="font-bold">91%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full w-5/6"></div>
                  </div>
                </div>

              </div>
            </div>

            {/* PRODUCTION ANALYTICS */}
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <h2 className="text-3xl font-bold mb-6 text-green-600">
                Production Analytics
              </h2>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Machine Utilization</span>
                    <span className="font-bold">82%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Production Efficiency</span>
                    <span className="font-bold">85%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-5/6"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span>Rejection Rate</span>
                    <span className="font-bold">4%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full w-1/4"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose SourceMarkit Analytics
            </h2>

            <p className="text-gray-500 text-lg">
              Built for MSMEs, procurement teams, and manufacturing companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Real-Time Insights
              </h3>

              <p className="text-gray-500">
                Monitor procurement, sales, and production KPIs instantly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                AI-Powered Analytics
              </h3>

              <p className="text-gray-500">
                Identify savings opportunities and operational bottlenecks automatically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                ERP Integration
              </h3>

              <p className="text-gray-500">
                Connect with SAP, Zoho, Tally, Excel, and cloud systems easily.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}