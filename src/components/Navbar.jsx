import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Tutup menu mobile setelah klik
    }
    if (location.pathname !== "/") {
      // kalau bukan di halaman home, pindah dulu ke home
      navigate("/");

      // kasih jeda sedikit agar halaman home sempat render dulu
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      // kalau sudah di home, langsung scroll
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        <button
          onClick={() => handleScrollTo("#hero")}
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <img
              src="/GoodongLogo.png" // ganti dengan logo di public/
              alt="Nocturnity Logo"
              className="h-10 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-green-300 group-hover:text-green-200 transition">
            Gudangin
          </h1>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-medium items-center">
          <li>
            <button
              onClick={() => handleScrollTo("#services")}
              className="hover:text-green-400 transition focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Tentang Gudangin
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("#packages")}
              className="hover:text-green-400 transition focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Paket
            </button>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-green-400 transition focus:outline-none focus:ring-0 focus-visible:ring-0 ring-0 outline-none"
            >
              Kontak Kami
            </Link>
          </li>
          <li>
            <a
              href="https://admin.goodong.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 lg:px-8 py-2 lg:py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 hover:text-white transition-colors focus:outline-none"
            >
              Login
            </a>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col space-y-1 px-4 py-4 font-medium">
            <li>
              <button
                onClick={() => handleScrollTo("#services")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 hover:text-green-400 transition focus:outline-none"
              >
                Tentang Gudangin
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollTo("#packages")}
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 hover:text-green-400 transition focus:outline-none"
              >
                Paket
              </button>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="block w-full text-left px-4 py-3 rounded-lg hover:bg-white/10 hover:text-green-400 transition focus:outline-none"
              >
                Kontak Kami
              </Link>
            </li>
            <li className="mt-2">
              <a
                href="https://admin.goodong.id/"
                className="flex items-center justify-center w-full px-4 py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700  hover:text-white transition-colors focus:outline-none text-center"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
