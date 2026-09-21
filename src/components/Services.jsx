import React, { useState } from "react";
import { HandHelping, Logs, Package, Handshake, BadgeDollarSign, ChartColumnIncreasing } from "lucide-react";
import "./animation.css"; // tambahkan file CSS ini (lihat bawah)

const servicesData = [
  {
    id: 1,
    icon: <Package size={48} />,
    title: "Pendataan Barang ke Sistem",
    desc: "Hanya dengan mengisi formulir pendataan barang, data dapat tersimpan secara sistematis di Goodong.id.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    link: "https://admin.goodong.id",
  },
  {
    id: 2,
    icon: <Logs size={48} />,
    title: "Stock Opname & Riwayat",
    desc: "Segala aktivitas pemasukan dan pengeluaran barang tercatat secara sistematis, sehingga memudahkan audit dan pelacakan.",
    image:
      "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=600&h=400&fit=crop",
    link: "https://admin.goodong.id",
  },
  {
    id: 3,
    icon: <HandHelping size={48} />,
    title: "Permintaan Barang (PR)",
    desc: "Dapat mengajukan permintaan barang secara terstruktur melalui Purchase Request (PR), lengkap dengan detail kebutuhan dan catatan.",
    image:
      "https://plus.unsplash.com/premium_photo-1661439623518-f151930152ec?w=600&h=400&fit=crop",
    link: "https://admin.goodong.id",
  },
  {
    id: 4,
    icon: <Handshake size={48} />,
    title: "Konversi PR ke PO",
    desc: "Purchase Request yang disetujui dapat langsung dikonversi menjadi Purchase Order (PO) oleh Superadmin, sehingga proses pengadaan lebih cepat, rapi, dan terkontrol.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    link: "https://admin.goodong.id",
  },
  {
    id: 5,
    icon: <BadgeDollarSign size={48} />,
    title: "Point Of Sale (POS)",
    desc: "Proses penjualan dapat dilakukan secara digital dan dilengkapi dengan fitur pembayaran dan tampilan barang secara interaktif.",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop",
    link: "https://pos.goodong.id",
  },
  {
    id: 6,
    icon: <ChartColumnIncreasing size={48} />,
    title: "Sistem Dashboard yang Interaktif dan Informatif",
    desc: "Dengan disajikan dalam bentuk grafik dan log aktivitas, dashboard menjadi sumber informasi yang mudah dipahami oleh para pengguna.",
    image:
      "https://plus.unsplash.com/premium_photo-1682309553075-c84ea8d9d49a?w=600&h=400&fit=crop",
    link: "https://admin.goodong.id",
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
            Kenapa Goodong.id?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Goodong.id membantu mengontrol permintaan dan pembelian barang dengan
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
                <button onClick={() => window.open(active.link, "_blank")} className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
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
                <button onClick={() => window.open(active.link, "_blank")} className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
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
