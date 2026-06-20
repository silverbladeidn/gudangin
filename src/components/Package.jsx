import React, { useState } from "react";
import { Palette, Video, MonitorPlay, Megaphone } from "lucide-react";
import "./animation.css"; // tambahkan file CSS ini (lihat bawah)

const servicesData = [
  {
    id: 1,
    icon: <Palette size={48} />,
    title: "Gratis",
    price: "Rp 0",
    desc: "Cocok untuk tim kecil yang ingin mulai mengelola pengajuan barang secara rapi tanpa biaya.",
    features: [
      "Purchase Request (PR)",
      "Form PR terstruktur",
      "Catatan kebutuhan barang",
      "1 alur persetujuan",
      "Unlimited request",
    ],
    image:
      "https://plus.unsplash.com/premium_photo-1661439623518-f151930152ec?w=600&h=400&fit=crop",
    cta: "Mulai Gratis",
  },
  {
    id: 2,
    icon: <Megaphone size={48} />,
    title: "Basic",
    oldPrice: "Rp 150.000 / user / bulan",
    price: "Rp 110.000 / user / bulan",
    badge: "Hemat 25%",
    desc: "Kontrol pengadaan yang lebih rapi dan transparan untuk perusahaan berkembang.",
    features: [
      "Semua fitur Gratis",
      "Approval oleh Superadmin",
      "Riwayat pengajuan & persetujuan",
      "Tracking status PR",
      "Export PDF & Excel",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    cta: "Beli Sekarang",
    highlight: true,
  },
  {
    id: 3,
    icon: <MonitorPlay size={48} />,
    title: "Enterprise",
    oldPrice: "Rp 250.000 / user / bulan",
    price: "Harga Spesial",
    badge: "Custom Deal",
    desc: "Solusi pengadaan end-to-end dengan kontrol penuh, siap audit dan skala besar.",
    features: [
      "Semua fitur Basic",
      "Konversi PR ke Purchase Order (PO)",
      "Audit trail lengkap",
      "Multi role & multi departemen",
      "Custom workflow approval",
      "Integrasi API",
      "Priority support",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    cta: "Hubungi Sales",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(1);
  const active = servicesData.find((srv) => srv.id === activeService);
  const isEven = active.id % 2 === 0;

  return (
    <section
      id="packages"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            Paket Gudangin
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Anda bisa pilih mau paket apa untuk Gudangin.
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
          className="grid md:grid-cols-2 gap-12 items-center transition-all duration-700 animate-fadeSlideUp"
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-green-400">{active.icon}</div>
                  <h3 className="text-4xl font-bold relative pb-2 inline-block">
                    {active.title}
                    <span className="absolute left-0 bottom-0 w-16 h-[3px] bg-green-500 rounded-full"></span>
                  </h3>
                </div>

                {/* Badge */}
                {active.badge && (
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                    {active.badge}
                  </span>
                )}

                {/* Harga lama */}
                {active.oldPrice && (
                  <p className="text-gray-400 line-through text-sm mb-1">
                    {active.oldPrice}
                  </p>
                )}

                {/* Harga promo */}
                {active.price && (
                  <p className="text-green-400 text-2xl font-bold mb-4">
                    {active.price}
                  </p>
                )}

                {/* Deskripsi */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {active.desc}
                </p>

                {/* Features */}
                {active.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-gray-200">
                    {active.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  {active.cta || "Pelajari Lebih Lanjut"}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Teks kiri */}
              <div className="text-right order-2 md:order-1">
                <div className="flex items-center justify-end gap-4 mb-4">
                  <h3 className="text-4xl font-bold relative pb-2 inline-block">
                    {active.title}
                    <span className="absolute right-0 bottom-0 w-16 h-[3px] bg-green-500 rounded-full"></span>
                  </h3>
                  <div className="text-green-400">{active.icon}</div>
                </div>

                {/* Badge */}
                {active.badge && (
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                    {active.badge}
                  </span>
                )}

                {/* Harga lama */}
                {active.oldPrice && (
                  <p className="text-gray-400 line-through text-sm mb-1">
                    {active.oldPrice}
                  </p>
                )}

                {/* Harga promo */}
                {active.price && (
                  <p className="text-green-400 text-2xl font-bold mb-4">
                    {active.price}
                  </p>
                )}

                {/* Deskripsi */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {active.desc}
                </p>

                {/* Features */}
                {active.features && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-gray-200 text-right">
                    {active.features.map((feature, idx) => (
                      <li key={idx} className="flex justify-end gap-2">
                        <span>{feature}</span>
                        <span className="text-green-500 mt-1">✔</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  {active.cta || "Pelajari Lebih Lanjut"}
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
