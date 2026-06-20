import React, { useState } from "react";
import { Palette, Video, MonitorPlay, Megaphone } from "lucide-react";
import "./animation.css"; // tambahkan file CSS ini (lihat bawah)

const servicesData = [
  {
    id: 1,
    icon: <Palette size={48} />,
    title: "Permintaan Barang (PR)",
    desc: "User dapat mengajukan permintaan barang secara terstruktur melalui Purchase Request (PR), lengkap dengan detail kebutuhan dan catatan, tanpa harus komunikasi manual.",
    image:
      "https://plus.unsplash.com/premium_photo-1661439623518-f151930152ec?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    icon: <Megaphone size={48} />,
    title: "Kontrol Persetujuan Terpusat",
    desc: "Seluruh persetujuan pembelian dikontrol langsung oleh Superadmin, memastikan tidak ada pembelian tanpa izin dan semua keputusan tercatat dengan jelas.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    icon: <MonitorPlay size={48} />,
    title: "Konversi PR ke PO",
    desc: "Purchase Request yang disetujui dapat langsung dikonversi menjadi Purchase Order (PO) oleh Superadmin, sehingga proses pengadaan lebih cepat, rapi, dan terkontrol.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    icon: <Video size={48} />,
    title: "Audit & Riwayat Transaksi",
    desc: "Semua aktivitas pengadaan tersimpan dalam riwayat sistem, mulai dari pengajuan, persetujuan, hingga PO, sehingga mudah diaudit dan dipertanggungjawabkan.",
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=600&h=400&fit=crop",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const active = servicesData.find((srv) => srv.id === activeService);
  const isEven = active.id % 2 === 0;

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            Kenapa Gudangin?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gudangin membantu mengontrol permintaan dan pembelian barang dengan
            alur yang rapi, terpusat, dan mudah diaudit.
          </p>
        </div>

        {/* Tombol Tab */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {servicesData.map((srv) => (
            <button
              key={srv.id}
              onClick={() => setActiveService(srv.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeService === srv.id
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {srv.icon}
              <span>{srv.title}</span>
            </button>
          ))}
        </div>

        {/* Content (satu service saja ditampilkan) */}
        <div
          key={active.id}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 animate-fadeSlideUp`}
        >
          {!isEven ? (
            <>
              {/* Gambar kiri */}
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-out">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Teks kanan */}
              <div className="text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-green-400">{active.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold relative pb-2 inline-block">
                      {active.title}
                      <span className="absolute left-0 bottom-0 w-16 h-[3px] bg-green-500 rounded-full"></span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {active.desc}
                </p>
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Teks kiri */}
              <div className="text-right order-2 md:order-1">
                <div className="flex items-center justify-end gap-4 mb-6">
                  <div>
                    <h3 className="text-4xl font-bold relative pb-2 inline-block">
                      {active.title}
                      <span className="absolute right-0 bottom-0 w-16 h-[3px] bg-green-500 rounded-full"></span>
                    </h3>
                  </div>
                  <div className="text-green-400">{active.icon}</div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {active.desc}
                </p>
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Pelajari Lebih Lanjut
                </button>
              </div>

              {/* Gambar kanan */}
              <div className="rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2 transform transition-all duration-700 ease-out">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
