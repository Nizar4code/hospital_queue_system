"use client";

import { useState } from "react";

export default function KioskPage() {
    // State untuk melacak apakah pasien sudah klik tombol ambil antrean
    const [showPreview, setShowPreview] = useState(false);

    // Fungsi simulasi untuk cetak tiket
    const handlePrint = () => {
        // Di Milestone 2, ini akan diganti dengan window.print() dan simpan ke database
        alert("Tiket sedang dicetak...");
        
        // Simulasi kembali ke layar awal setelah 3 detik
        setTimeout(() => {
        setShowPreview(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-4 font-sans">
        {/* Header Logo BPJS (Simulasi) */}
        <div className="absolute top-8 left-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-full"></div>
            <h1 className="text-xl font-bold text-green-800">Rumah Sakit Sehat</h1>
        </div>

        {!showPreview ? (
            // --- LAYAR 1: TOMBOL UTAMA ---
            <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Selamat Datang</h2>
            <p className="text-green-600 mb-10 text-lg">Silakan sentuh tombol di bawah untuk mendaftar</p>
            <button 
                onClick={() => setShowPreview(true)}
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold py-8 px-12 rounded-2xl text-3xl shadow-xl transition-all transform hover:scale-105"
            >
                Ambil Antrean BPJS
            </button>
            </div>
        ) : (
            // --- LAYAR 2: PREVIEW TIKET & CETAK ---
            <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md w-full animate-fade-in">
            <h2 className="text-2xl font-bold text-green-800 border-b-2 border-green-100 pb-4 mb-6">Preview Tiket</h2>
            
            <div className="py-8">
                <p className="text-gray-500 mb-2 font-medium">Nomor Antrean Anda</p>
                <h1 className="text-6xl font-black text-green-600 mb-4 tracking-wider">JKN-001</h1>
                <p className="text-sm text-gray-400">Pendaftaran Layanan BPJS Kesehatan</p>
                <p className="text-sm text-gray-400 mt-1">Tanggal: 20 April 2026</p>
            </div>

            <div className="mt-8 flex gap-4">
                <button 
                onClick={() => setShowPreview(false)}
                className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 rounded-xl transition-all"
                >
                Batal
                </button>
                <button 
                onClick={handlePrint}
                className="w-2/3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl text-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                🖨️ Cetak Tiket
                </button>
            </div>
            </div>
        )}
        </div>
    );
}