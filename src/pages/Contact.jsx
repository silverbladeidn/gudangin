import React from "react";
import { MapPin, Mail } from "lucide-react";
import "../components/animation.css"; // animasi blob & fade
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pt-20 pb-12 md:py-24 text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-500 -z-10"></div>

      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Informasi Kontak */}
        <div className="animate-fadeSlideUp w-full lg:w-1/2 lg:pl-8 xl:pl-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center lg:text-start font-bold mb-6 md:mb-8">
            Kontak Kami
          </h2>

          <div className="space-y-4 md:space-y-6 text-gray-100">
            <div className="flex items-start text-start  gap-3 md:gap-4">
              <MapPin
                size={24}
                className="text-green-300 mt-1 flex-shrink-0 w-6 h-6 md:w-7 md:h-7"
              />
              <p className="text-sm md:text-base">
                Apartemen Podomoro Golf View, Tower Dahoma, Unit 1503, Jalan
                Mochamad Thohir Cikudai, RT.32/RW.15, Bojong Nangka, Gunung
                Putri, Kabupaten Bogor, Jawa Barat 16963
              </p>
            </div>

            <div className="flex items-start text-start gap-3 md:gap-4">
              <FaWhatsapp
                size={20}
                className="text-green-300 mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
              />
              <div className="text-sm md:text-base">
                <a
                  href="https://wa.me/6285950029053?text=Halo,%20saya%20ingin%20bertanya%20terkait%20masalah%20Gudangin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-black transition-colors"
                >
                  +62 814-0161-9378
                </a>{" "}
              </div>
            </div>

            <div className="flex items-start text-start gap-3 md:gap-4">
              <Mail
                size={20}
                className="text-green-300 mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
              />
              <a
                href="mailto:nocturnity.creative@gmail.com"
                className="text-sm md:text-base hover:text-black transition-colors"
              >
                galaktek.nusantara@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <form className="w-full lg:w-[70%] ml-auto bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 animate-fadeSlideUp">
          {/* Kolom kiri: input */}
          <div className="space-y-5">
            <div>
              <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                Nama
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-black"
                placeholder="Tuliskan nama anda"
              />
            </div>

            <div>
              <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                Email
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-black"
                placeholder="Tuliskan Email anda"
              />
            </div>

            <div>
              <label className="block mb-2 text-black text-start font-semibold text-sm md:text-base">
                Keluhan
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 md:py-3 rounded-lg bg-white/20 border border-white/30 
                     focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-black"
                placeholder="Tuliskan apa keluhan anda"
              />
            </div>
          </div>

          {/* Tombol submit */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-green-300  text-black 
                 font-semibold rounded-full hover:bg-green-500
                 transition-all shadow-lg hover:shadow-green-400/40"
            >
              Kirim Data
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
