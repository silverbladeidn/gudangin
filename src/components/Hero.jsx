import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Array gambar untuk slideshow (ganti dengan URL gambar Anda)
  const images = [
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200",
  ];

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleScroll = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-start overflow-hidden pt-20 pb-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Images dengan Fading */}
      <div className="absolute inset-0 -z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Overlay Gradient untuk readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/75 to-transparent -z-5"></div>
      <div className="absolute inset-0 bg-black/30 -z-5"></div>

      {/* Konten Utama dengan animasi fadeSlideUp */}
      <div className="relative z-10 lg:pl-16 xl:pl-[200px] max-w-3xl w-full mb-8 md:mb-0 animate-fadeSlideUp">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl">
          Gudangin
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
          Solusi penyimpanan online yang aman, praktis, dan terpercaya untuk
          mendukung kebutuhan perusahaan, institusi pendidikan, dan bisnis.{" "}
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          <button
            onClick={() => handleScrollTo("#services")}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Mulai Sekarang
          </button>

          <button
            onClick={() => handleScrollTo("#packages")}
            className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        aria-label="Scroll ke bawah"
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white z-10"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
