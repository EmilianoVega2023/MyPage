import React from 'react';
import { Github, Mail, MapPin, Linkedin } from 'lucide-react';
import { handleContactClick, handleGitHubClick } from './buttonHandlers.ts';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-green-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="/src/yo.jpg"
              alt="Profile placeholder"
              className="w-48 h-48 rounded-full object-cover border-4 border-black-000"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Emiliano Vega</h1>
              <p className="text-xl md:text-2xl text-green-400 mb-4">Desarrollador de Software</p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/emii.vvega/" className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full flex items-center gap-2">
                  <Mail size={20} />
                  Instagram
                </a>
                <a href="https://github.com/EmilianoVega2023" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-full flex items-center gap-2">
                  <Github size={20} />
                  GitHub
                </a>
                <div className="flex gap-4">
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-15 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg ">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sobre Mí</h2>
            <p className="text-gray-600 leading-relaxed">
              Soy un profesional con una sólida formación en tecnología y atención al cliente. 
              Actualmente estudio una tecnicatura en Inteligencia Artificial. Me destaco por 
              mis habilidades comunicativas, carisma y creatividad, desarrolladas en el sector 
              gastronómico y en diversos Proyectos Tecnológicos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Habilidades</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Tecnologías</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>JavaScript (JS)</li>
                  <li>Python</li>
                  <li>CSS y HTML</li>
                  <li>Git y GitHub</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Soft Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Comunicación clara</li>
                  <li>Trabajo en equipo</li>
                  <li>Resolución de problemas</li>
                  <li>Gestión del tiempo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Experiencia Laboral</h2>
          <div className="grid md:grid-cols-3 gap-8 bg-gray-100 p-4 rounded-lg">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">Runner</h3>
              <p className="text-gray-600 mb-4">Porter - 1992 (2023/2024)</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Productividad</li>
                <li>• Rapidez y Eficiencia</li>
                <li>• Coordinación y Organización</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">Bartender</h3>
              <p className="text-gray-600 mb-4">Anker (Agosto 2022)</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Resolución de Problemas Bajo Presión</li>
                <li>• Gestión del Tiempo</li>
                <li>• Habilidades Interpersonales</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-800 mb-2">Mozo</h3>
              <p className="text-gray-600 mb-4">King Beer (Junio 2022)</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Habilidades Comunicativas</li>
                <li>• Trabajo en Equipo</li>
                <li>• Servicio al Cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contacto</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={20} className="text-green-700" />
              <a href="mailto:vemiliano220@gmail.com" className="hover:text-green-700">
                vemiliano220@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin size={20} className="text-green-700" />
              <span>Cordoba y Bv Oroño (Ros)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Linkedin size={20} className="text-green-700" />
              <a href="https://www.linkedin.com/in/emiliano-vega-030120249/" target="_blank" rel="noopener noreferrer" className="hover:text-green-700">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Emiliano Vega. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;