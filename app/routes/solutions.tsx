export default function Solutions() {
  const solutions = [
    { title: "Secure Messaging", description: "Encrypted and reliable telegraph-inspired communications." },
    { title: "Global Connectivity", description: "Bridging gaps with a modern approach to networking." },
    { title: "Easy Integration", description: "Seamless integration into existing workflows." },
  ];

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">Solutions</h2>
        <p className="mt-2 text-gray-600">Tailored solutions for modern communication needs.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-blue-600">{solution.title}</h3>
            <p className="mt-2 text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
