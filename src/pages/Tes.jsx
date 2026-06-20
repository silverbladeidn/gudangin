import React from "react";

export default function Tes() {
  return (
    <section
      id="portfolio"
      className="relative py-64 text-white overflow-hidden"
    >
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-90 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000"></div>
      </div>

      {/* Title Section */}
      <div className="relative text-center mb-14 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Galeri Kegiatan
        </h2>
        <p className="text-gray-100 mt-2">
          Dokumentasi segala aktivitas Galaksi Teknologi Nusantara
        </p>
      </div>
    </section>
  );
}
