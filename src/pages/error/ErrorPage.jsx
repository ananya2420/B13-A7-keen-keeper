import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full p-10 text-center bg-white rounded-2xl shadow-xl border">

        {/* Icon */}
        <div className="text-6xl mb-4">🚫</div>

        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-black">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-3 text-black">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;