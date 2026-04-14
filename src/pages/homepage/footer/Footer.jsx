import React from "react";
import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white px-6 py-10">

      {/* Top Section */}
      <div className="text-center max-w-2xl mx-auto">

        {/* Brand */}
        <h1 className="text-3xl font-bold mb-3">KeenKeeper</h1>

        {/* Description */}
        <p className="text-sm text-green-100 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Section */}
        <div className="mt-6 flex flex-col items-center gap-3">

          {/* Label ABOVE icons */}
          <p className="text-sm font-medium text-green-100">
            Social Links
          </p>

          {/* Icons */}
          <div className="flex items-center gap-6">

            <a href="#" className="hover:scale-110 transition">
              <img src={instagram} alt="instagram" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src={facebook} alt="facebook" className="w-6 h-6" />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img src={twitter} alt="twitter" className="w-6 h-6" />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-green-500 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <p className="text-green-100 text-center md:text-left">
          © 2026 KeenKeeper. All rights reserved.
        </p>

        <div className="flex gap-6 text-green-100">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;