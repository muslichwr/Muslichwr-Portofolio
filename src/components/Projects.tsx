import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'HR-MANAGE',
      description: 'Sistem manajemen HR (Human Resource) yang dibangun dengan Laravel dan Filament.',
      image: '/src/images/hr-manage.png',
      tags: ['Laravel', 'PHP', 'Filament', 'Blade'],
      link: 'https://github.com/muslichwr/HR-MANAGE',
      features: [
        'Dashboard admin dengan Filament',
        'Manajemen data karyawan',
        'Pengelolaan gaji karyawan',
        'Cetak slip gaji PDF',
        'Laporan penggajian',
        'Logs aktivitas'
      ]
    },
    {
      title: 'AkuBakul',
      description: 'Aplikasi toko online mobile yang dibangun dengan Flutter dan API lokal.',
      image: '/src/images/akubakul.png',
      tags: ['Flutter', 'Dart', 'Laravel', 'REST API'],
      link: 'https://github.com/muslichwr/AkuBakul-Flutter',
      features: [
        'Autentikasi pengguna',
        'Katalog produk',
        'Keranjang belanja',
        'Wishlist',
        'Chat dengan penjual',
        'Checkout & pembayaran',
        'Profil pengguna'
      ]
    },
    {
      title: 'Sinawang',
      description: 'Plugin untuk memantau kompetensi siswa dalam rencana pembelajaran.',
      image: '/src/images/pjbl_sinawang.png',
      tags: ['PHP', 'JavaScript', 'CSS', 'Moodle'],
      link: 'https://github.com/muslichwr/sinawang',
      features : [
        'Memantau kompetensi siswa',
        'Rating chart course disetiap kompetensi',
        'Laporan kompetensi setiap rencana pembelajaran',
        'Rangkuman kompetensi setiap rencana pembelajaran', 
      ]
    },
    {
      title: 'BagusNovel',
      description: 'Template Front End untuk platform membaca novel online dengan berbagai genre dan fitur.',
      image: '/src/images/bagusnovel.png',
      tags: ['PHP', 'JavaScript', 'CSS'],
      link: 'https://github.com/muslichwr/BagusNovel',
      features: [
        'Tampilan responsif dengan dark mode',
        'Daftar novel berdasarkan kategori',
        'Sistem pencarian novel',
        'Autentikasi pengguna',
        'Penyimpanan novel favorit'
      ]
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Proyek
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-sm overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden bg-gray-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    aria-label={`Visit ${project.title} project`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {project.features && (
                  <ul className="list-disc list-inside text-sm text-gray-400 mb-4">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;