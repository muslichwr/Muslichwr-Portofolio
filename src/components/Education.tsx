import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar, Building } from 'lucide-react';

const Education: React.FC = () => {
  const educations = [
    {
      degree: 'S1 Teknologi Pendidikan Informatika',
      institution: 'Universitas Negeri Surabaya',
      duration: '2020 - 2025',
      dpa: '3.78',
    },
  ];

  const courses = [
    {
      name: 'Full Stack Laravel & Flutter',
      issuer: 'BuildWithAngga',
      year: '2025',
      description: 'Membangun aplikasi e-commerce dan chat dengan Laravel dan Flutter',
      url: 'https://buildwithangga.com/kelas/certificate/full-stack-laravel-flutter-2021-building-e-commerce-and-chat-apps'
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Pendidikan dan Pelatihan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center relative">
              <GraduationCap size={22} className="mr-2 text-indigo-400" />
              Pendidikan Formal
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500"></span>
            </h3>
            
            <div className="space-y-6">
              {educations.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 p-6 rounded-md border-l-4 border-indigo-500 hover:shadow-lg transition-all duration-300 hover:translate-x-1"
                >
                  <h4 className="text-lg font-medium text-white mb-3">{edu.degree}</h4>
                  
                  <div className="flex items-center mb-2">
                    <Building size={16} className="text-gray-400 mr-2" />
                    <p className="text-indigo-400 text-sm">{edu.institution}</p>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                  </div>
                  
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">IPK</span>
                      <span className="text-white font-bold bg-indigo-600 px-3 py-1 rounded-md">{edu.dpa}/4.0</span>
                    </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center relative">
              <BookOpen size={22} className="mr-2 text-indigo-400" />
              Pelatihan Online
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500"></span>
            </h3>
            
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 p-6 rounded-md border-l-4 border-indigo-500 transition-all duration-300 hover:shadow-lg hover:translate-x-1"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-medium text-white flex-1">{course.name}</h4>
                    <span className="text-xs font-medium bg-indigo-600 text-white px-2 py-1 rounded-md">
                      {course.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Award size={16} className="text-indigo-400 mr-2" />
                    <p className="text-indigo-400 text-sm">{course.issuer}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 border-l-2 border-gray-700 pl-3">{course.description}</p>
                  
                  {course.url && (
                    <a 
                      href={course.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm bg-gray-800 px-3 py-2 rounded-md transition-colors"
                    >
                      <Award size={16} className="mr-2" />
                      Lihat Sertifikat
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;