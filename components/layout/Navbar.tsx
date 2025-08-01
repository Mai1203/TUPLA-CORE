"use client"; // Habilita el uso de funcionalidades del cliente en Next.js (como useState y useEffect)

// Importa hooks y componentes necesarios
import { useState, useEffect } from "react"; // Hooks de React
import { Menu, X, Code2 } from "lucide-react"; // Iconos
import { Button } from "@/components/ui/button"; // Componente personalizado de botón
import { motion, AnimatePresence } from "framer-motion";
import { Button as MantineButton, Paper, Stack } from "@mantine/core";

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

    window.addEventListener("scroll", handleScroll); // Escucha el scroll
    return () => window.removeEventListener("scroll", handleScroll); // Limpieza
  }, []);
  

  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Lista de secciones del menú
  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  // Función para hacer scroll suave a la sección correspondiente
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Scroll suave
      setIsOpen(false); // Cierra el menú móvil si está abierto
    }
  };

  return (
    // Navbar fijo en la parte superior
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-700 ease-out 
      ${
        scrolled
          ? `bg-white border-b-2 border-tupla-primary 
     shadow-[0_4px_30px_rgba(30,144,255,0.2)]
     before:content-[""] before:absolute before:bottom-0 before:left-0 
     before:h-0.5 before:w-full before:bg-gradient-to-r 
     before:from-transparent before:via-tupla-primary before:to-transparent 
     before:animate-pulse before:blur-sm`
          : "bg-transparent border-transparent before:content-none"
      }`}
    >
      {/* Contenedor centralizado del contenido del navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo con ícono y texto */}
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-tupla-primary" />{" "}
            {/* Icono de código */}
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
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
                    scrolled ? "text-black" : "text-white"
                  } hover:text-tupla-primary px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </button>
              ))}
              {/* Botón de llamada a la acción */}
              <Button
                onClick={() => scrollToSection("#contacto")}
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
                scrolled ? "text-black" : "text-white"
              } hover:text-tupla-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              {/* Alterna entre icono de cerrar y abrir */}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden"
            >
              <Paper
                shadow="lg"
                radius="lg"
                p="md"
                mt="md"
                withBorder
                style={{
                  background: "rgba(240, 240, 240, 0.8)",
                  backdropFilter: "blur(12px)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                }}
              >
                <Stack gap="sm">
                  {/* Ítems del menú móvil */}
                  {navItems.map((item) => (
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.02 }}
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.href);
                        setActiveItem(item.name);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        fontWeight: 600,
                        fontSize: "16px",
                        position: "relative",
                        backgroundColor: "white",
                        color:
                          activeItem === item.name
                            ? "#1E90FF"
                            : "rgba(30, 30, 30, 0.85)",
                        border:
                          activeItem === item.name
                            ? "1.5px solid rgba(30, 144, 255, 0.4)"
                            : "1.5px solid transparent",
                        transition: "all 0.3s ease",
                        boxShadow:
                          activeItem === item.name
                            ? "0 0 0 2px rgba(30,144,255,0.1)"
                            : "none",
                      }}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <motion.span
                          layoutId="underline"
                          style={{
                            position: "absolute",
                            bottom: 8,
                            left: 20,
                            right: 20,
                            height: 3,
                            backgroundColor: "#1E90FF",
                            borderRadius: 999,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.button>
                  ))}

                  {/* Botón de contacto en móvil */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <MantineButton
                      fullWidth
                      radius="lg"
                      size="md"
                      color="blue"
                      variant="filled"
                      onClick={() => scrollToSection("#contacto")}
                      styles={{
                        root: {
                          fontWeight: 600,
                          fontSize: "16px",
                          backgroundColor: "#1E90FF",
                          paddingTop: "14px",
                          paddingBottom: "14px",
                          transition: "background-color 0.3s ease",
                        },
                      }}
                    >
                      Cotizar Proyecto
                    </MantineButton>
                  </motion.div>
                </Stack>
              </Paper>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
