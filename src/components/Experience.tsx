import React from 'react';
import { Briefcase, Calendar, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: '2024 - Sekarang',
      description: 'Mengembangkan solusi web untuk menyelesaikan masalah klien.',
      icon: <Briefcase size={14} className="mr-1" />
    },
    {
      position: 'Guru Teknologi Informasi',
      company: 'Magang | SMK Negeri 1 Kediri',
      duration: 'Agustus 2023 - Desember 2023',
      description: 'Mengajar Administrasi Sistem Jaringan dan Dasar-Dasar IT kepada 50 siswa. Berkolaborasi dengan guru lain dalam perencanaan kegiatan semesteran dan evaluasi pembelajaran.',
      icon: <Briefcase size={14} className="mr-1" />
    },
    {
      position: 'Web Developer Full Stack',
      company: 'Magang | Dinas Komunikasi dan Informatika Kota Kediri',
      duration: 'Maret 2023 - Juli 2023',
      description: 'Migrasi sistem dari CodeIgniter 3 ke Laravel 9, memperbarui data, dan mendesain ulang tampilan untuk pengalaman pengguna yang lebih baik.',
      icon: <Briefcase size={14} className="mr-1" />
    },
    {
      position: 'Pembelajaran Aktif',
      company: 'Pengembangan Skill Pribadi',
      duration: 'Terus Berlangsung',
      description: 'Mempelajari teknologi terbaru melalui kursus online dan proyek praktik.',
      icon: <BookOpen size={14} className="mr-1" />
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Pengalaman & Perkembangan
        </h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gray-700"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute top-0 w-4 h-4 rounded-full bg-indigo-500 ${
                  index % 2 === 0 ? 'left-0 md:-left-2' : 'left-0 md:-left-2 md:left-auto md:-right-2'
                }`}
              ></div>
              
              <div className="bg-gray-800 p-5 rounded-sm shadow-md">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
                <div className="flex items-center text-indigo-400 text-sm mb-2">
                  {exp.icon}
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{exp.duration}</span>
                </div>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;