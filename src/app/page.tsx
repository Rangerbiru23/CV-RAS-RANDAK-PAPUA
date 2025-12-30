'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Shield,
  CheckCircle,
  ArrowRight,
  HardHat,
  FileText,
  Wrench
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('tentang')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">CV RAS RANDAK PAPUA</h1>
                <p className="text-xs text-slate-600">Konstruksi Gedung Pendidikan</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('tentang')}
                className={`text-sm font-medium transition-colors ${activeTab === 'tentang' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Tentang
              </button>
              <button 
                onClick={() => setActiveTab('layanan')}
                className={`text-sm font-medium transition-colors ${activeTab === 'layanan' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Layanan
              </button>
              <button 
                onClick={() => setActiveTab('kontak')}
                className={`text-sm font-medium transition-colors ${activeTab === 'kontak' ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Kontak
              </button>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500 text-white">
                <Award className="w-4 h-4 mr-2" />
                Terpercaya di Papua
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                CV RAS RANDAK PAPUA
              </h1>
              <h2 className="text-xl lg:text-2xl font-light mb-6 text-blue-100">
                Spesialis Konstruksi Gedung Pendidikan Profesional
              </h2>
              <p className="text-lg mb-8 text-blue-50 leading-relaxed">
                Kami adalah mitra terpercaya untuk pembangunan fasilitas pendidikan berkualitas 
                di Jayapura, Papua. Dengan pengalaman bertahun-tahun, kami menghadirkan bangunan 
                yang aman, fungsional, dan berkelanjutan untuk masa depan pendidikan Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="w-5 h-5 mr-2" />
                  0852-8570-3582
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Lihat Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-3xl transform rotate-6"></div>
              <img 
                src="/company-logo.png" 
                alt="CV RAS RANDAK PAPUA Logo"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {activeTab === 'tentang' && (
          <div className="space-y-16">
            {/* About Section */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Mengapa Memilih CV RAS RANDAK PAPUA?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Kami menghadirkan solusi konstruksi terintegrasi dengan standar kualitas tertinggi 
                  untuk setiap proyek gedung pendidikan
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Kualitas Terjamin</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Standar kualitas bangunan yang tinggi dengan material terbaik dan 
                      pengawasan ketat di setiap tahap pembangunan.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Tepat Waktu</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Komitmen untuk menyelesaikan proyek sesuai jadwal yang telah ditetapkan 
                      tanpa mengorbankan kualitas.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Tim Profesional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      Tenaga ahli berpengalaman dalam konstruksi gedung pendidikan dengan 
                      sertifikasi dan kompetensi terbaik.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl p-8 lg:p-12 text-white">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Kepuasan Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Dukungan Teknis</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'layanan' && (
          <div className="space-y-16">
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Layanan Kami
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Solusi konstruksi komprehensif untuk berbagai jenis gedung pendidikan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Building2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Sekolah Dasar & Menengah</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Pembangunan gedung sekolah dari tingkat dasar hingga menengah dengan 
                      desain yang sesuai standar pendidikan nasional.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Ruang kelas yang nyaman
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Laboratorium dan perpustakaan
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Fasilitas olahraga
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <HardHat className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Universitas & Perguruan Tinggi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Konstruksi gedung kampus modern dengan fasilitas pendukung pembelajaran 
                      yang komprehensif dan teknologi terkini.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Auditorium dan aula
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Pusat penelitian
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Asrama mahasiswa
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Paud & Tk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Gedung pendidikan anak usia dini yang aman, nyaman, dan 
                      dirancang khusus untuk mendukung perkembangan anak.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Area bermain aman
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Ruang kreatif
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Taman belajar
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Wrench className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Renovasi & Perbaikan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Layanan renovasi dan perbaikan gedung pendidikan untuk meningkatkan 
                      fungsionalitas dan keamanan bangunan.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Upgrade fasilitas
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Perbaikan struktural
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Modernisasi gedung
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl">Konsultasi & Desain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Konsultasi profesional dan desain arsitektur untuk gedung pendidikan 
                      yang efisien dan estetis.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Feasibility study
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Desain arsitektur
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Perizinan bangunan
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl">Fasilitas Pendukung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      Pembangunan fasilitas pendukung pendidikan seperti kantin, 
                      perpustakaan, dan area rekreasi.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Kantin sehat
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Perpustakaan modern
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        Area olahraga
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'kontak' && (
          <div className="space-y-16">
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Siap untuk memulai proyek konstruksi gedung pendidikan Anda? 
                  Tim kami siap membantu mewujudkan visi Anda.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Informasi Kontak</CardTitle>
                    <CardDescription>
                      Jangan ragu untuk menghubungi kami untuk konsultasi gratis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Nama Perusahaan</h3>
                        <p className="text-slate-600 font-medium">CV RAS RANDAK PAPUA</p>
                        <Badge className="mt-2 bg-blue-100 text-blue-700 border-blue-200">
                          Konstruksi Gedung Pendidikan
                        </Badge>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Alamat</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Jalan Alternative Skyline Perum Villa Megapura, 
                          Desa/Kelurahan Entrop, Kec. Jayapura Selatan, 
                          Kota Jayapura, Provinsi Papua
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Telepon</h3>
                        <p className="text-slate-600 font-medium">0852-8570-3582</p>
                        <p className="text-sm text-slate-500 mt-1">Senin - Sabtu, 08:00 - 17:00 WIT</p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600">info@rasrandakpapua.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                    <CardDescription>
                      Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Subjek
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Subjek pesan Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Pesan
                        </label>
                        <textarea
                          rows={4}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Jelaskan kebutuhan proyek Anda..."
                        ></textarea>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Mail className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CV RAS RANDAK PAPUA</h3>
                  <p className="text-sm text-slate-400">Konstruksi Gedung Pendidikan</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Mitra terpercaya untuk pembangunan fasilitas pendidikan berkualitas 
                di Jayapura, Papua. Kami berkomitmen untuk mewujudkan bangunan 
                pendidikan yang aman, nyaman, dan berkelanjutan.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-slate-700 text-white hover:bg-slate-800">
                  <Phone className="w-4 h-4 mr-2" />
                  0852-8570-3582
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Sekolah & Universitas</li>
                <li className="hover:text-white cursor-pointer">Renovasi Gedung</li>
                <li className="hover:text-white cursor-pointer">Konsultasi Desain</li>
                <li className="hover:text-white cursor-pointer">Fasilitas Pendukung</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer">Tentang Kami</li>
                <li className="hover:text-white cursor-pointer">Portfolio</li>
                <li className="hover:text-white cursor-pointer">Karir</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-slate-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 CV RAS RANDAK PAPUA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}