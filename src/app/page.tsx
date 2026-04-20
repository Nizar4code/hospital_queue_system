import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Portal Sistem Antrean RS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        
        <Link href="/kiosk" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-green-500 text-center flex flex-col items-center">
          <span className="text-4xl mb-4">🖥️</span>
          <h2 className="text-xl font-bold text-gray-800">Layar Kiosk</h2>
          <p className="text-sm text-gray-500 mt-2">Untuk pasien mendaftar</p>
        </Link>

        <Link href="/admin" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-blue-500 text-center flex flex-col items-center">
          <span className="text-4xl mb-4">👨‍💻</span>
          <h2 className="text-xl font-bold text-gray-800">Layar Admin</h2>
          <p className="text-sm text-gray-500 mt-2">Untuk petugas loket</p>
        </Link>

        <Link href="/monitor" className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-emerald-700 text-center flex flex-col items-center">
          <span className="text-4xl mb-4">📺</span>
          <h2 className="text-xl font-bold text-gray-800">Layar Monitor</h2>
          <p className="text-sm text-gray-500 mt-2">Untuk antrean publik</p>
        </Link>

      </div>
    </div>
  );
}