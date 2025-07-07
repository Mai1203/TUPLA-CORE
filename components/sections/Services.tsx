'use client';

import { useState } from 'react';
import { Globe, Smartphone, Settings, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados para SEO que impulsan tu presencia digital.',
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Panel de administración',
        'Integración con redes sociales',
        'Analytics y métricas'
      ],
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Node.js'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma que conectan con tus usuarios de manera efectiva.',
      features: [
        'iOS y Android',
        'UI/UX intuitivo',
        'Notificaciones push',
        'Integración con APIs',
        'Soporte offline'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: 'Software a Medida',
      description: 'Soluciones personalizadas que se adaptan perfectamente a los procesos de tu empresa.',
      features: [
        'Análisis de requerimientos',
        'Arquitectura escalable',
        'Integración con sistemas',
        'Automatización de procesos',
        'Soporte técnico'
      ],
      technologies: ['Python', 'Java', 'C#', '.NET'],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-tupla-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tupla-dark mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales que transforman la manera 
            en que tu empresa opera en el mundo digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer group ${
                  hoveredCard === index
                    ? 'transform -translate-y-2 shadow-2xl'
                    : 'hover:shadow-lg'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-tupla-dark">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-tupla-dark">Características:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-tupla-accent" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-tupla-dark">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-tupla-dark text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-tupla-primary hover:bg-tupla-accent text-white transition-colors duration-300"
                  >
                    Solicitar Información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg animate-slide-up">
          <h3 className="text-3xl font-bold text-tupla-dark text-center mb-12">
            Nuestro Proceso de Trabajo
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', desc: 'Entendemos tus necesidades y objetivos' },
              { step: '02', title: 'Diseño', desc: 'Creamos prototipos y wireframes' },
              { step: '03', title: 'Desarrollo', desc: 'Programamos con las mejores prácticas' },
              { step: '04', title: 'Entrega', desc: 'Desplegamos y brindamos soporte' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-tupla-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-16 h-0.5 bg-tupla-primary"></div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-tupla-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;