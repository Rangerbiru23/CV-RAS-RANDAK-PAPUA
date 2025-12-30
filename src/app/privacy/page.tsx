import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, ArrowLeft, Home, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">CV RAS RANDAK PAPUA</h1>
                <p className="text-xs text-slate-600">Kebijakan Privasi</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Beranda
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Syarat & Ketentuan
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
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              CV RAS RANDAK PAPUA berkomitmen untuk melindungi privasi dan keamanan data 
              pribadi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, 
              menggunakan, dan melindungi informasi Anda.
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Terakhir diperbarui: 1 Januari 2024
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Informasi yang Kami Kumpulkan */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi Pribadi</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kami dapat mengumpulkan informasi pribadi yang Anda berikan secara sukarela, 
                  termasuk namun tidak terbatas pada:
                </p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Nama lengkap dan informasi kontak (email, telepon, alamat)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Informasi perusahaan atau organisasi
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Detail proyek dan kebutuhan konstruksi
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Informasi pembayaran dan faktur
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi Teknis</h3>
                <p className="text-slate-600 leading-relaxed">
                  Kami secara otomatis mengumpulkan informasi teknis ketika Anda mengunjungi website kami:
                </p>
                <ul className="mt-3 space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Alamat IP dan informasi lokasi
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Jenis browser dan perangkat
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Waktu akses dan durasi kunjungan
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Halaman yang dikunjungi dan tindakan yang dilakukan
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Penggunaan Informasi */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong>Menyediakan Layanan:</strong> Memproses permintaan Anda, 
                    mengirim penawaran, dan melaksanakan proyek konstruksi.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong>Komunikasi:</strong> Menghubungi Anda mengenai layanan, 
                    pembaruan proyek, dan informasi relevan lainnya.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk 
                    meningkatkan kualitas layanan dan pengalaman pengguna.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong>Keamanan:</strong> Melindungi keamanan website dan 
                    mencegah aktivitas ilegal atau penyalahgunaan.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan 
                    peraturan yang berlaku.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Berbagi Informasi */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                Berbagi Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Kami tidak menjual, menyewakan, atau memperjualbelikan informasi pribadi Anda. 
                Kami hanya akan berbagi informasi Anda dalam keadaan berikut:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan 
                  persetujuan eksplisit untuk berbagi informasi.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Penyedia Layanan:</strong> Dengan pihak ketiga yang membantu 
                  kami menyediakan layanan (kontraktor, arsitek, supplier).
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau 
                  perintah pengadilan.
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, 
                  atau keselamatan kami atau pihak lain.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Keamanan Data */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-orange-600" />
                </div>
                Keamanan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Kami mengimplementasikan berbagai langkah keamanan untuk melindungi 
                informasi pribadi Anda:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Enkripsi data selama transmisi dan penyimpanan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Akses terbatas kepada personel yang berwenang
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Sistem monitoring keamanan 24/7
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Backup data teratur dan pemulihan bencana
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Audit keamanan berkala
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Hak Anda */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-teal-600" />
                </div>
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Anda memiliki hak-hak berikut mengenai data pribadi Anda:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Pembatasan:</strong> Membatasi pengolahan data pribadi Anda
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Penolakan:</strong> Menolak pengolahan data untuk tujuan tertentu
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Kontak */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-red-600" />
                </div>
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Jika Anda memiliki pertanyaan, keluhan, atau permintaan mengenai 
                kebijakan privasi ini, silakan hubungi kami:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <div>
                  <strong className="text-slate-900">Email:</strong>
                  <span className="text-slate-600 ml-2">privacy@rasrandakpapua.com</span>
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
              <p className="text-sm text-slate-500">
                Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
              </p>
            </CardContent>
          </Card>

          {/* Pembaruan Kebijakan */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-4 h-4 text-indigo-600" />
                </div>
                Pembaruan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diberitahukan melalui website atau email. 
                Penggunaan lanjutan dari layanan kami setelah perubahan menunjukkan 
                penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
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
            <Link href="/terms">
              <Button variant="outline">
                Lihat Syarat & Ketentuan
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}