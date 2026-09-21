import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2b2c2f] text-gray-300 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
        {/* Logo dan kontak */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
          <img
            src="/GoodongLogo.png"
            alt="Nocturnity Logo"
            className="h-10 sm:h-12 object-contain"
          />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="mb-1 flex items-center gap-2">Hubungi Kami :</p>
            <p className="mb-1 flex items-center gap-2">WhatsApp :</p>
            <p className="mb-1 flex items-center gap-2">
              <FaWhatsapp className="w-7 h-7 sm:w-7 sm:h-7" />
              <a
                href="https://wa.me/6285950029053?text=Halo,%20saya%20ingin%20bertanya%20tentang%20penggunaan%20Goodong.id."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-green-600 transition-colors"
              >
                +62 814-0161-9378
              </a>{" "}
            </p>
            <p className="mb-1 flex items-center gap-2">Email : </p>
            <p className="mb-1 flex items-center gap-2">
              <FaEnvelope className="w-7 h-7 sm:w-7 sm:h-7" />
              <a
                href="mailto:galaktek.nusantara@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                galaktek.nusantara@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Sosial media */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-4 sm:gap-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://galakteknusantara.vercel.app/"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Instagram"
            >
              <FaGlobe className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/galaktek_nusantara/"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Instagram"
            >
              <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a
              href="#"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="TikTok"
            >
              <FaTiktok className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} by Galaksi Teknologi Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
