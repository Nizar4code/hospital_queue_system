export default function AdminPage() {
    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard Admin Loket</h1>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-slate-600 border-b">
                                <th className="p-4">No. Antrean</th>
                                <th className="p-4">Waktu Daftar</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Dummy Data Row */}
                            <tr className="border-b hover:bg-slate-50">
                                <td className="p-4 font-bold text-lg">JKN-001</td>
                                <td className="p-4 text-gray-500">10:30 WIB</td>
                                <td className="p-4">
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Menunggu</span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow text-sm font-medium">
                                        Panggil
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}