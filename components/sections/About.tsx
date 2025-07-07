'use client';

import { Users, Target, Eye, Award, Code, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Excelencia Técnica',
      description: 'Utilizamos las últimas tecnologías y mejores prácticas para garantizar soluciones de alta calidad.'
    },
    {
      icon: Users,
      title: 'Enfoque Humano',
      description: 'Priorizamos la comunicación cercana y entendemos las necesidades específicas de cada cliente.'
    },
    {
      icon: Award,
      title: 'Compromiso',
      description: 'Nos comprometemos con plazos de entrega y mantenemos la más alta calidad en cada proyecto.'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y eso se refleja en cada línea de código y cada solución que creamos.'
    }
  ];

  const team = [
    {
      name: 'Alexandra Torres',
      role: 'CEO & Full Stack Developer',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Especialista en arquitectura de software y liderazgo técnico con más de 8 años de experiencia.'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Experto en desarrollo móvil nativo y multiplataforma con enfoque en UX/UI.'
    },
    {
      name: 'María González',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Diseñadora creativa especializada en experiencias digitales intuitivas y atractivas.'
    },
    {
      name: 'Diego Ramírez',
      role: 'Backend Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Arquitecto de sistemas backend escalables y especialista en bases de datos.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Proyectos Completados' },
    { number: '10+', label: 'Clientes Satisfechos' },
    { number: '2+', label: 'Años de Experiencia' },
    { number: '94%', label: 'Tasa de Satisfacción' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-tupla-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-tupla-dark mb-6">
            Conoce a TUPLΛ CORE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo apasionado por la tecnología, comprometido con transformar 
            ideas innovadoras en soluciones digitales que impulsan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-lg text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-tupla-dark">Nuestra Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Democratizar la tecnología para pequeñas y medianas empresas, proporcionando 
                soluciones digitales accesibles, innovadoras y de alta calidad que les permitan 
                competir en el mercado digital actual con herramientas de clase mundial.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-tupla-accent to-tupla-primary rounded-lg text-white">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-tupla-dark">Nuestra Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Convertirnos en el aliado tecnológico de referencia para empresas que buscan 
                innovar y crecer, siendo reconocidos por nuestra excelencia técnica, 
                compromiso con el cliente y capacidad de transformar ideas en realidades digitales exitosas.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-tupla-dark text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="inline-flex p-3 bg-gradient-to-br from-tupla-primary to-tupla-accent rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-tupla-dark mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-tupla-dark text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tupla-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-tupla-dark mb-1">
                    {member.name}
                  </h4>
                  <p className="text-tupla-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-tupla-dark text-center mb-12">
            Nuestros Logros
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-tupla-primary mb-2 group-hover:text-tupla-accent transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;