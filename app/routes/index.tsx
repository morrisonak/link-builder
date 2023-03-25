// src/routes/index.tsx
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 flex flex-col items-center justify-center text-white">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          CyberGuard Security
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto font-sans">
          Your Digital Fortress. CyberGuard Security is a leading cybersecurity firm that provides advanced threat detection, protection, and remediation services for businesses of all sizes. Our team of experts works diligently to safeguard your digital assets and ensure the confidentiality, integrity, and availability of your data.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/services"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-blue-400"
        >
          Our Services
        </Link>
        <Link
          to="/about"
          className="text-white border-2 border-white px-6 py-3 rounded-md hover:bg-opacity-30"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="text-white border-2 border-white px-6 py-3 rounded-md hover:bg-opacity-30"
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-16 text-sm opacity-70">
        <p className="text-center">
          Need cybersecurity advice?{" "}
          <Link to="/resources" className="underline hover:text-white">
            Explore Our Resources
          </Link>
        </p>
      </div>
    </div>
  );
}
