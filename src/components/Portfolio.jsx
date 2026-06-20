import React from "react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-4 w-64 h-64 md:top-20 md:left-10 md:w-96 md:h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 md:top-20 md:right-40 md:w-96 md:h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 w-64 h-64 md:-bottom-8 md:left-20 md:w-96 md:h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-130 animate-blob animation-delay-4000"></div>
      </div>

      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg">
          Portfolio Kami
        </h2>
        <p className="text-black mt-2">
          Dokumentasi hasil karya & aktivitas Nocturnity Creative
        </p>
      </div>

      {/* Layout Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 px-6 auto-rows-[180px] md:auto-rows-[220px]">
        {/* Thumbnail Reels */}
        <div className="col-span-3 row-span-1 bg-white/10 rounded-xl flex flex-col items-center justify-center">
          <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            ▶
          </div>
          <p className="text-black text-lg">Tiktok Reels</p>
        </div>

        {/* Banner */}
        <div className="col-span-9 bg-white/10 text-black rounded-xl flex items-center justify-center text-lg">
          Banner B-Com
        </div>

        {/* Post Feed (di bawah Reels) */}
        <div className="col-span-3 row-span-2 bg-white/10 text-black rounded-xl flex items-center justify-center">
          Post Feed
        </div>

        {/* Video Long (kanan dari Post Feed) */}
        <div className="col-span-6 row-span-2 bg-white/10 text-black rounded-xl flex items-center justify-center text-lg">
          🎥 Video Long
        </div>

        {/* Story (paling kanan, sejajar Video Long dan memanjang ke bawah) */}
        <div className="col-span-3 row-span-2 bg-white/10 text-black rounded-xl flex items-center justify-center">
          Story
        </div>

        {/* Foto Produk (di bawah Video Long) */}
        <div className="col-span-7 bg-white/20 text-black rounded-xl flex items-center justify-center">
          Foto Produk
        </div>

        {/* Carousel (lebar penuh bawah) */}
        <div className="col-span-5 bg-white/20 text-black rounded-xl flex items-center justify-center">
          Carousel
        </div>
      </div>
    </section>
  );
}
