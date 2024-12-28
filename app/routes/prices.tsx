export default function Prices() {
  const tiers = [
    { name: "Basic", price: "$10/mo", features: ["Feature A", "Feature B"] },
    { name: "Pro", price: "$30/mo", features: ["Feature A", "Feature B", "Feature C"] },
    { name: "Enterprise", price: "$100/mo", features: ["All Features"] },
  ];

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">Prices</h2>
        <p className="mt-2 text-gray-600">Affordable plans for all your communication needs.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">{tier.name}</h3>
            <p className="text-3xl font-bold text-neutral-800">{tier.price}</p>
            <ul className="mt-4 space-y-2">
              {tier.features.map((feature, i) => (
                <li key={i} className="text-gray-600">• {feature}</li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
