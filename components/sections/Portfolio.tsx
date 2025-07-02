'use client';

import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce ModaStyle',
      description: 'Plataforma de comercio electrónico completa con panel de administración, pasarela de pagos y gestión de inventarios.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'App Fitness Tracker',
      description: 'Aplicación móvil para seguimiento de rutinas de ejercicio, nutrición y progreso personal con sincronización en la nube.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Sistema de Gestión Hospitalaria',
      description: 'Software integral para gestión de pacientes, citas médicas, historial clínico y facturación hospitalaria.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'software',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portal Inmobiliario',
      description: 'Plataforma web para búsqueda y publicación de propiedades con mapas interactivos y tours virtuales.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Mapbox'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'App de Delivery',
      description: 'Aplicación móvil para pedidos de comida con tracking en tiempo real, múltiples métodos de pago y calificaciones.',
      image: 'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'mobile',
      technologies: ['Flutter', 'Node.js', 'Socket.io', 'PayPal'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'ERP Empresarial',
      description: 'Sistema de planificación de recursos empresariales con módulos de contabilidad, inventarios y recursos humanos.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'software',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Angular'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'mobile', label: 'Apps Móviles' },
    { id: 'software', label: 'Software a Medida' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tupla-dark mb-6">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados y la innovación 
            que aportamos a cada solución tecnológica.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-tupla-primary hover:bg-tupla-accent text-white'
                  : 'border-tupla-primary text-tupla-primary hover:bg-tupla-primary hover:text-white'
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tupla-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-tupla-primary hover:bg-tupla-accent text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 hover:bg-white text-tupla-dark border-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-tupla-dark group-hover:text-tupla-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-tupla-light text-tupla-dark text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="pt-2">
                  <Badge
                    className={`${
                      project.category === 'web'
                        ? 'bg-blue-100 text-blue-800'
                        : project.category === 'mobile'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {project.category === 'web' && 'Desarrollo Web'}
                    {project.category === 'mobile' && 'App Móvil'}
                    {project.category === 'software' && 'Software a Medida'}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-tupla-primary to-tupla-accent rounded-2xl text-white animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Trabajemos juntos para convertir tu idea en realidad digital
          </p>
          <Button
            onClick={() => {
              const element = document.querySelector('#contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg"
            className="bg-white text-tupla-primary hover:bg-gray-100 font-semibold px-8 py-4"
          >
            Iniciar Proyecto
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;