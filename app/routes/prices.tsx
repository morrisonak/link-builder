export default function Prices() {
  const tiers = [
    { name: "Basic", price: "$10/mo", features: ["Feature A", "Feature B"], highlighted: false },
    { name: "Pro", price: "$30/mo", features: ["Feature A", "Feature B", "Feature C"], highlighted: true },
    { name: "Enterprise", price: "$100/mo", features: ["All Features"], highlighted: false },
  ];

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-neutral-800">Prices</h2>
        <p className="mt-4 text-gray-600">Affordable plans for all your communication needs.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`p-6 bg-white shadow-lg rounded-lg border ${
              tier.highlighted ? "border-blue-600" : "border-gray-200"
            }`}
          >
            <h3 className="text-xl font-bold text-blue-600">{tier.name}</h3>
            <p className="mt-2 text-4xl font-extrabold text-neutral-800">{tier.price}</p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i} className="text-gray-600">• {feature}</li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full px-4 py-2 rounded-lg shadow-lg ${
                tier.highlighted
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
