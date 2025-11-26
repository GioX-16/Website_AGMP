import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

type NavItem = { name: string; id: string };

const desktopLinks: NavItem[] = [
    { name: "Nosotros", id: "aboutt" },
    { name: "Agromaps", id: "agromapss" },
    { name: "IA", id: "cultivo" },
    { name: "Departamentos", id: "Dep" },
    { name: "Equipo", id: "equipo" },
];

const mobileLinks: NavItem[] = [
    { name: "Inicio", id: "hero" },
    { name: "Nosotros", id: "aboutt" },
    { name: "Team", id: "team" },
    { name: "Agromaps", id: "agromaps" },
];

const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -80, opacity: 0 },
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const lastScrollY = useRef(0);

    // Scroll suave a secciones
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Detectar scroll: fondo + mostrar/ocultar navbar según dirección
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Cambiar fondo
            setScrolled(currentScroll > 20);

            // Evitar ocultar cuando está casi arriba del todo
            if (currentScroll < 10) {
                setShowNav(true);
            } else {
                const diff = currentScroll - lastScrollY.current;

                // Scroll hacia abajo (baja bastante) → ocultar
                if (diff > 5) {
                    setShowNav(false);
                }
                // Scroll hacia arriba (sube un poco) → mostrar
                else if (diff < -5) {
                    setShowNav(true);
                }
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            variants={navVariants}
            initial="visible"
            animate={showNav || isOpen ? "visible" : "hidden"}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-0 left-0 z-50 w-full border-b border-transparent backdrop-blur-sm transition-colors duration-300 ${scrolled ? "bg-white/95 border-slate-100 shadow-sm" : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* LOGO DESKTOP */}
                <div className="hidden items-center gap-2 md:flex">
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/images/AssetLogo.png"
                            alt="Agromaps Logo"
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* LOGO + HAMBURGER MOBILE */}
                <div className="flex w-full items-center justify-between md:hidden">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/icons/LogoSV.svg"
                            alt="Agromaps Logo"
                            className="h-10 w-auto"
                        />
                    </Link>

                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="text-[#1C5937] focus:outline-none"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* LINKS DESKTOP */}
                <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
                    {desktopLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-semibold text-[#1C5937] transition-colors hover:text-[#0140BA]"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* CTA DESKTOP */}
                <div className="hidden md:flex">
                    <button
                        onClick={() => scrollToSection("contacto")}
                        className="rounded-xl bg-[#1C5937] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#145BE5]"
                    >
                        Contáctanos
                    </button>
                </div>
            </div>

            {/* MENÚ MOBILE DESPLEGABLE */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-6 border-t border-slate-100 bg-white py-6 shadow-md md:hidden"
                >
                    {mobileLinks.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                scrollToSection(item.id);
                                setIsOpen(false);
                            }}
                            className="text-lg font-semibold text-[#1C5937] transition-colors hover:text-[#0140BA]"
                        >
                            {item.name}
                        </button>
                    ))}

                    <button
                        onClick={() => {
                            scrollToSection("contacto");
                            setIsOpen(false);
                        }}
                        className="rounded-xl bg-[#1C5937] px-8 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#145BE5]"
                    >
                        Contáctanos
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
