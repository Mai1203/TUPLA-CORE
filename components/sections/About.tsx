"use client";

import { Users, Target, Eye, Award, Code, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Excelencia Técnica",
      description:
        "Aplicamos tecnologías de vanguardia y buenas prácticas de desarrollo para crear soluciones robustas, escalables y eficientes.",
    },
    {
      icon: Users,
      title: "Colaboración Humana",
      description:
        "Construimos relaciones cercanas con nuestros clientes, entendiendo sus retos y trabajando juntos como un solo equipo.",
    },
    {
      icon: Award,
      title: "Compromiso y Responsabilidad",
      description:
        "Asumimos cada proyecto con seriedad, cumpliendo los plazos acordados y garantizando resultados de alto impacto.",
    },
    {
      icon: Heart,
      title: "Pasión por la Innovación",
      description:
        "Nos mueve el entusiasmo por la tecnología, la creatividad y el deseo constante de superar expectativas.",
    },
  ];

  const team = [
    
    {
      name: "Sergio Muñoz",
      role: "Full Stack Developer & AI Enthusiast",
      image:
      "/img/team/perfilsergio.webp",
      description:
        "Desarrollador full stack con experiencia en proyectos freelance, especializado en Python, JavaScript y visión por computador, apasionado por la innovación tecnológica y la creación de soluciones inteligentes orientadas al usuario.",
    },
    {
      name: "Michael Coral",
      role: "Full stack Developer & Web and Mobile Frontend Developer",
      image:
      "/img/team/perfilmichael.webp",
      description:
        "Experiencia sólida en tecnologías frontend modernas dominas React, Next.js, React Native, HTML, CSS y JavaScript, que son tecnologías clave para la creación de interfaces web y móviles modernas.",
    }
  ];

  const stats = [
    { number: "10+", label: "Proyectos Completados" },
    { number: "10+", label: "Clientes Satisfechos" },
    { number: "2+", label: "Años de Experiencia" },
    { number: "94%", label: "Tasa de Satisfacción" },
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
            Somos un equipo apasionado por la tecnología y la innovación,
            comprometido con transformar tus ideas en soluciones digitales
            sólidas, funcionales y escalables, acompañamos a tu negocio en su
            evolución digital, impulsando su crecimiento y competitividad a
            través de la colaboración, el diseño centrado en el usuario y el uso
            estratégico de la tecnología.
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
                <h3 className="text-2xl font-bold text-tupla-dark">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nuestra misión es empoderar a pequeñas y medianas empresas a
                través del acceso democrático a la tecnología, ofreciendo
                soluciones digitales de vanguardia, accesibles y de alta
                calidad, nos comprometemos a impulsar su transformación digital
                con herramientas innovadoras y profesionales, que les permitan
                competir con confianza, adaptarse al cambio y destacar en un
                mercado global cada vez más exigente.
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
                <h3 className="text-2xl font-bold text-tupla-dark">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Nuestra visión es convertirnos en el aliado tecnológico de
                confianza para las empresas que buscan innovar, crecer y liderar
                en el entorno digital y Aspiramos a ser reconocidos por nuestra
                excelencia técnica, nuestro compromiso genuino con el cliente y
                nuestra capacidad para transformar ideas en soluciones digitales
                exitosas, sostenibles y con impacto real.
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
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white w-full max-w-sm shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={member.image}
                    width={400}
                    height={200}
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
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
