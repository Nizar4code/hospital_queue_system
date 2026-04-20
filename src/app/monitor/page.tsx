export default function MonitorPage() {
    return (
        // Menggunakan warna hijau gelap yang elegan khas BPJS
        <div className="min-h-screen bg-emerald-900 flex flex-col items-center justify-center p-8">
        
            {/* Indikator Loket */}
            <div className="bg-emerald-800 px-8 py-3 rounded-full mb-12 shadow-inner">
                <h2 className="text-4xl font-semibold text-emerald-100 tracking-wide">
                    LOKET 1
                </h2>
            </div>

            <div className="text-center">
                <p className="text-2xl text-emerald-200 font-medium mb-6 uppercase tracking-widest">
                    Nomor Antrean Dipanggil
                </p>
                
                {/* Kotak Nomor Antrean */}
                <div className="bg-white px-24 py-16 rounded-[3rem] shadow-[0_0_50px_rgba(16,185,129,0.3)] mb-8 border-b-8 border-emerald-500 transform transition-all">
                    <h1 className="text-9xl font-black text-emerald-700 tracking-tighter">
                        JKN-001
                    </h1>
                </div>
                
                <p className="text-2xl text-white font-light animate-pulse mt-8">
                    Silakan menuju ke loket untuk pelayanan...
                </p>
            </div>
        </div>
    );
}