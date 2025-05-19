import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg bg-gray-700 relative overflow-hidden">
              {/* Profile picture placeholder */}
              <div className="absolute inset-50 flex justify-center items-center bg-gray-700">
                <img src="/images/muslich.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500"></div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 inline-block relative">
              Tentang Saya
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500"></span>
            </h2>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
            Nama saya Muslich Wahyu Romadhon, lulusan Teknologi Pendidikan dengan IPK 3.78 dari Universitas Negeri Surabaya. Saya sangat tertarik pada pengembangan web dan pendidikan IT, serta memiliki pengalaman mengajar Administrasi Sistem Jaringan dan IT Dasar di SMK Negeri 1 Kediri.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Saya memiliki keterampilan dalam pengembangan plugin Moodle yang digunakan untuk mendukung sistem pembelajaran, serta pengembangan web full stack.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-2"><span className="text-indigo-400">Nama:</span> Muslich Wahyu Romadhon</p>
                <p className="mb-2"><span className="text-indigo-400">Usia:</span> 23 Tahun</p>
                <p className="mb-2"><span className="text-indigo-400">Kebangsaan:</span> Indonesia</p>
              </div>
              <div>
                <p className="mb-2"><span className="text-indigo-400">Lokasi:</span> Kediri, Indonesia</p>
                <p className="mb-2"><span className="text-indigo-400">Email:</span> muslichwahyuromadhon@gmail.com</p>
                <p className="mb-2"><span className="text-indigo-400">Status:</span> Tersedia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;