export default function Solutions() {
  const solutions = [
    { title: "Secure Messaging", description: "End-to-end encrypted communication for reliability." },
    { title: "Global Connectivity", description: "Seamless connections for modern networking needs." },
    { title: "Easy Integration", description: "Adaptable solutions to fit into existing workflows." },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Solutions</h2>
        <p className="mt-4 text-gray-600">Designed for efficiency and scalability.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800">{solution.title}</h3>
            <p className="mt-2 text-gray-600">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
