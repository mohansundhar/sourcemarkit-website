export default function WhyChoose() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">
        Why Choose SourceMarkit?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

        <div>
          <h3 className="text-blue-600 text-4xl font-bold">80%</h3>
          <p>Workload Reduction</p>
        </div>

        <div>
          <h3 className="text-blue-600 text-4xl font-bold">5x</h3>
          <p>Faster Quotes</p>
        </div>

        <div>
          <h3 className="text-blue-600 text-4xl font-bold">100%</h3>
          <p>Pricing Accuracy</p>
        </div>

      </div>
    </section>
  );
}