export default function Contact() {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-24">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-gray-600">We’d love to hear from you. Reach out for any inquiries.</p>
      </div>
      <form className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-lg"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
