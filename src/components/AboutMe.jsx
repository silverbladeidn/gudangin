import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="relative py-20 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 -z-10"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div
          className="absolute top-10 left-4 md:top-20 md:left-10 w-64 h-64 md:w-96 md:h-96 
                        bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob"
        ></div>
        <div
          className="absolute top-10 right-10 md:top-20 md:right-40 w-64 h-64 md:w-96 md:h-96 
                        bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        ></div>
        <div
          className="absolute -bottom-8 left-8 md:-bottom-8 md:left-20 w-64 h-64 md:w-96 md:h-96 
                        bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-80 animate-blob animation-delay-4000"
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black drop-shadow-lg mb-6">
          Tentang Goodong.id
        </h2>

        <p className="text-black leading-relaxed">
          <strong>Goodong.id</strong> adalah aplikasi manajemen inventori dan
          pengadaan barang yang dirancang untuk membantu bisnis, kantor, dan
          organisasi mengontrol proses permintaan hingga pembelian barang secara
          rapi dan terpusat.
          <br />
          <br />
          Kami percaya bahwa pengelolaan inventaris bukan sekadar mencatat stok,
          tetapi memastikan setiap permintaan barang tercatat, disetujui, dan
          dapat dipertanggungjawabkan. Karena itu, Goodong.id menghadirkan alur
          pengadaan yang jelas mulai dari <strong>
            Purchase Request (PR)
          </strong>{" "}
          hingga
          <strong> Purchase Order (PO)</strong> dengan kontrol penuh di tangan
          Superadmin.
          <br />
          <br />
          Melalui Goodong.id, kamu bisa:
          <br />
          <br />
          ✅ Mengajukan permintaan barang secara terstruktur (PR)
          <br />
          ✅ Mengontrol persetujuan pembelian langsung oleh Superadmin
          <br />
          ✅ Mengonversi PR menjadi PO dengan alur yang jelas & tercatat
          <br />
          ✅ Mencegah pembelian tidak terkontrol dengan sistem audit yang rapi
          <br />
          <br />
          Goodong.id cocok digunakan oleh UMKM, sekolah, yayasan, hingga
          perusahaan skala kecil–menengah yang membutuhkan sistem pengadaan
          sederhana namun tetap profesional.
          <br />
          <br />
          Goodong.id terus berkembang sebagai solusi kontrol inventaris dan
          pengadaan yang praktis, transparan, dan mudah digunakan.
          <br />
          Siap mengelola inventori & pembelian dengan lebih tertib? Mulai
          bersama Goodong.id sekarang.
          <br />
          <br />
          <span className="text-black font-semibold">
            #Goodong.id #ManajemenInventori #PurchaseRequest #PurchaseOrder
            #ProcurementSystem #InventoryManagement
          </span>
        </p>
      </div>
    </section>
  );
}
