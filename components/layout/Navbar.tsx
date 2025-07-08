'use client'; // Habilita el uso de funcionalidades del cliente en Next.js (como useState y useEffect)

// Importa hooks y componentes necesarios
import { useState, useEffect } from 'react'; // Hooks de React
import { Menu, X, Code2 } from 'lucide-react'; // Iconos
import { Button } from '@/components/ui/button'; // Componente personalizado de botón

// Componente principal
const Navbar = () => {
  // Estado para el menú móvil (abierto o cerrado)
  const [isOpen, setIsOpen] = useState(false);
  // Estado para saber si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Si scrollY > 50, se considera scrolleado
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll); // Escucha el scroll
    return () => window.removeEventListener('scroll', handleScroll); // Limpieza
  }, []);

  const [activeItem, setActiveItem] = useState<string | null>(null);



  // Lista de secciones del menú
  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  // Función para hacer scroll suave a la sección correspondiente
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
      setIsOpen(false); // Cierra el menú móvil si está abierto
    }
  };

  return (
    // Navbar fijo en la parte superior
    <nav
     className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-700 ease-out 
    ${scrolled 
      ? 'bg-gradient-to-r from-white via-[#f5f5f5] to-white backdrop-blur-xl border-b shadow-[0_0_20px_rgba(30,144,255,0.3)] animate-reveal-tech glow-tech hologram before:content-[""] before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:bg-gradient-to-r before:from-transparent before:via-[#1E90FF] before:to-transparent before:animate-scan-line border-[#1E90FF]'
      : 'bg-transparent border-transparent before:content-none'
    }`}
    >

      {/* Contenedor centralizado del contenido del navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo con ícono y texto */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-tupla-primary" /> {/* Icono de código */}
            <span className={`text-xl font-bold ${scrolled ? 'text-black' : 'text-white'}`}>
              TUPL<span className="text-tupla-accent">Λ</span> CORE
            </span>
          </div>

          {/* Navegación en escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Mapea los items del menú */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:text-tupla-primary px-3 py-2 text-sm font-medium transition-colors duration-200`}

                >
                  {item.name}
                </button>
              ))}
              {/* Botón de llamada a la acción */}
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="bg-tupla-primary hover:bg-tupla-accent text-white ml-4"
              >
                Cotizar Proyecto
              </Button>
            </div>
          </div>

          {/* Botón para abrir/cerrar menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? 'text-black' : 'text-white'
              } hover:text-tupla-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              {/* Alterna entre icono de cerrar y abrir */}
              
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/10 backdrop-blur-xl rounded-md mt-2 shadow-lg">
              {/* Ítems del menú móvil */}
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setActiveItem(item.name);
                  }}
                  className={`bg-white relative group block w-full px-4 py-3 text-left text-base font-semibold rounded-md transition-all duration-300
                    ${
                      activeItem === item.name
                        ? 'text-tupla-primary bg-white border border-transparent'
                        : 'text-tupla-dark bg-white border border-transparent'
                    }`}
                >
                  {item.name}
                  {/* Línea azul bajo el ítem activo */}
                  {activeItem === item.name && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-tupla-primary rounded-full transition-all duration-300"></span>
                  )}
                </button>
              ))}

              {/* Botón de contacto en móvil */}
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="bg-tupla-primary hover:bg-tupla-accent text-white w-full mt-2"
              >
                Cotizar Proyecto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
