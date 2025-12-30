import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft, Home, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">CV RAS RANDAK PAPUA</h1>
                <p className="text-xs text-slate-600">Syarat & Ketentuan</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Beranda
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="outline" size="sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Kebijakan Privasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Syarat & Ketentuan
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Syarat dan ketentuan ini mengatur penggunaan layanan CV RAS RANDAK PAPUA. 
              Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan ini.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Informasi Umum */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                Informasi Umum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                CV RAS RANDAK PAPUA adalah perusahaan konstruksi yang bergerak di bidang 
                pembangunan gedung pendidikan. Syarat dan ketentuan ini berlaku untuk 
                semua pengguna website dan layanan kami.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <p className="text-blue-800 font-medium">
                  Dengan mengakses atau menggunakan website dan layanan CV RAS RANDAK PAPUA, 
                  Anda menyatakan telah membaca, memahami, dan menyetujui syarat dan ketentuan ini.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Layanan Kami */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                CV RAS RANDAK PAPUA menyediakan layanan-layanan berikut:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Konstruksi Gedung Pendidikan:</strong> Pembangunan sekolah, universitas, 
                  dan fasilitas pendidikan lainnya.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Renovasi dan Perbaikan:</strong> Layanan renovasi gedung pendidikan 
                  yang sudah ada.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Konsultasi Desain:</strong> Konsultasi arsitektur dan desain 
                  untuk gedung pendidikan.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Manajemen Proyek:</strong> Koordinasi dan pengawasan proyek 
                  konstruksi dari awal hingga selesai.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kewajiban Pengguna */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                Kewajiban Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Sebagai pengguna layanan kami, Anda setuju untuk:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Informasi Akurat:</strong> Memberikan informasi yang benar, 
                    akurat, dan lengkap saat menghubungi kami atau menggunakan layanan.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Kepatuhan Hukum:</strong> Mematuhi semua hukum dan peraturan 
                    yang berlaku terkait penggunaan layanan kami.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Pembayaran Tepat Waktu:</strong> Melakukan pembayaran sesuai 
                    dengan kesepakatan yang telah ditetapkan.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Kerjasama:</strong> Bekerjasama dengan tim kami untuk 
                    kelancaran pelaksanaan proyek.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Respect:</strong> Menghormati hak milik intelektual dan 
                    hak milik lainnya dari CV RAS RANDAK PAPUA.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kewajiban Kami */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-orange-600" />
                </div>
                Kewajiban Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                CV RAS RANDAK PAPUA berkomitmen untuk:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Kualitas Terbaik:</strong> Menyediakan layanan konstruksi 
                    dengan standar kualitas tertinggi.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Profesionalisme:</strong> Menangani setiap proyek dengan 
                    pendekatan profesional dan etika kerja yang tinggi.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Transparansi:</strong> Memberikan informasi yang jelas 
                    mengenai biaya, jadwal, dan progres proyek.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Keamanan:</strong> Memastikan keselamatan kerja dan 
                    keamanan bangunan sesuai standar.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Garansi:</strong> Memberikan garansi untuk pekerjaan 
                    yang telah selesai sesuai kesepakatan.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pembayaran */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-teal-600" />
                </div>
                Pembayaran dan Biaya
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">Struktur Pembayaran</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Uang Muka:</strong> Minimal 30% dari total nilai kontrak
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Pembayaran Progresif:</strong> Sesuai dengan pencapaian milestone proyek
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Pelunasan:</strong> Sisa pembayaran setelah proyek selesai dan diterima
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Metode Pembayaran</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Transfer Bank (rekening perusahaan)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Tunai (dengan bukti kwitansi resmi)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Metode lain yang disepakati bersama
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded">
                <p className="text-amber-800 font-medium">
                  Semua pembayaran harus menggunakan rekening resmi CV RAS RANDAK PAPUA. 
                  Kami tidak bertanggung jawab atas pembayaran ke rekening pribadi atau 
                  rekening tidak resmi lainnya.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Jaminan dan Garansi */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-red-600" />
                </div>
                Jaminan dan Garansi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Kami memberikan jaminan untuk semua pekerjaan konstruksi:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Garansi Struktural:</strong> 1 tahun untuk struktur bangunan utama
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Garansi Pekerjaan:</strong> 6 bulan untuk finishing dan instalasi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Garansi Material:</strong> Sesuai dengan garansi dari produsen
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Layanan Purnajual:</strong> Support teknis selama 3 bulan setelah serah terima
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pembatalan dan Pengembalian */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-indigo-600" />
                </div>
                Pembatalan dan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-3">Kebijakan Pembatalan</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Pembatalan oleh Klien:</strong> Uang muka tidak dapat dikembalikan 
                    jika pembatalan dilakukan setelah pekerjaan dimulai
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Pembatalan oleh Perusahaan:</strong> Pengembalian penuh jika 
                    pembatalan dilakukan oleh pihak kami
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>Force Majeure:</strong> Kedua belah pihak dibebaskan dari 
                    kewajiban jika terjadi hal di luar kendali
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Hak Kekayaan Intelektual */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-pink-600" />
                </div>
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Semua konten, desain, gambar, dan materi di website ini merupakan 
                hak milik CV RAS RANDAK PAPUA dan dilindungi oleh hukum hak cipta. 
                Dilarang keras menyalin, mendistribusikan, atau menggunakan materi 
                tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Penyelesaian Sengketa */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-yellow-600" />
                </div>
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Setiap sengketa yang timbul dari penggunaan layanan kami akan 
                diselesaikan melalui:
              </p>
              <ol className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Musyawarah:</strong> Upaya penyelesaian secara damah 
                    melalui diskusi dan negosiasi.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Mediasi:</strong> Melibatkan pihak ketiga yang netral 
                    sebagai mediator.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Peradilan:</strong> Penyelesaian melalui pengadilan 
                    di wilayah hukum Jayapura, Papua.
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Kontak */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Jika Anda memiliki pertanyaan mengenai syarat dan ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <div>
                  <strong className="text-slate-900">Email:</strong>
                  <span className="text-slate-600 ml-2">info@rasrandakpapua.com</span>
                </div>
                <div>
                  <strong className="text-slate-900">Telepon:</strong>
                  <span className="text-slate-600 ml-2">0852-8570-3582</span>
                </div>
                <div>
                  <strong className="text-slate-900">Alamat:</strong>
                  <span className="text-slate-600 ml-2">
                    Jalan Alternative Skyline Perum Villa Megapura, Entrop, 
                    Jayapura Selatan, Kota Jayapura, Provinsi Papua
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Kembali ke Beranda
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="outline">
                Lihat Kebijakan Privasi
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}