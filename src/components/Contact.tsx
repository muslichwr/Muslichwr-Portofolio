import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    
    try {
      
      await emailjs.sendForm(
        'service_6eg4wgj', 
        'template_ejykxmi',
        formRef.current as HTMLFormElement, 
        'qzlzCMbnbXmAL32m7'
      );
      
      setSuccess(true);
      setLoading(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Gagal mengirim pesan:', err);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Kontak
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center relative">
              <Mail size={22} className="mr-2 text-indigo-400" />
              Informasi Kontak
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500"></span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-md flex items-center justify-center">
                  <MapPin size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-md font-medium mb-1">Lokasi</h4>
                  <p className="text-gray-400 text-sm">Kediri, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-md flex items-center justify-center">
                  <Mail size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-md font-medium mb-1">Email</h4>
                  <a href="mailto:muslichwahyuromadhon@gmail.com" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                    muslichwahyuromadhon@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-gray-800 p-3 rounded-md flex items-center justify-center">
                  <Phone size={20} className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-md font-medium mb-1">Telepon</h4>
                  <a href="tel:+6285156239294" className="text-gray-400 text-sm hover:text-indigo-400 transition-colors">
                    +62 851 5623 9294
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 inline-flex items-center relative">
              <Send size={22} className="mr-2 text-indigo-400" />
              Kirim Pesan
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-500"></span>
            </h3>
            
            {success && (
              <div className="mb-4 bg-green-900/40 border border-green-500 text-green-100 p-4 rounded-md flex items-center">
                <Check className="mr-2 text-green-400" size={18} />
                <span>Pesan berhasil terkirim! Terima kasih telah menghubungi saya.</span>
              </div>
            )}
            
            {error && (
              <div className="mb-4 bg-red-900/40 border border-red-500 text-red-100 p-4 rounded-md flex items-center">
                <AlertCircle className="mr-2 text-red-400" size={18} />
                <span>Gagal mengirim pesan. Silakan coba lagi nanti.</span>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subjek"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Pesan"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span>Mengirim...</span>
                      <div className="ml-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;