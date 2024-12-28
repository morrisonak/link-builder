export default function Contact() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-neutral-800">Contact Us</h2>
        <p className="mt-4 text-gray-600">We’d love to hear from you. Reach out for any inquiries.</p>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
