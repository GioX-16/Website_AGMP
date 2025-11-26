import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section
            id="aboutt"
            className="relative w-full bg-gradient-to-b from-emerald-50 via-white to-emerald-50/40 py-20 px-6 md:px-10 lg:px-16"
        >
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row lg:gap-16">
                {/* COLUMNA IZQUIERDA: TEXTO + BLOQUE VERDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative w-full md:w-1/2"
                >
                    {/* Bloque verde de fondo */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#1C5937] px-6 py-8 shadow-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                        {/* Detalle decorativo en diagonal, sin imagen de fondo */}
                        <div className="pointer-events-none absolute -left-24 -top-20 h-56 w-56 -rotate-12 bg-emerald-800/30" />
                        <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rotate-6 bg-emerald-900/20" />

                        <div className="relative">
                            <h2 className="mb-6 poppins-medium text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl lg:text-5xl">
                                Cultiva con <br /> datos, cosecha <br /> con éxito
                            </h2>

                            <p className="mb-8 max-w-xl poppins-regular text-sm text-emerald-50/90 sm:text-base">
                                Agromaps es la plataforma inteligente que analiza la fertilidad
                                de tu suelo y te brinda recomendaciones ecológicas con
                                inteligencia artificial para optimizar tu producción y cuidar el
                                medio ambiente.
                            </p>

                            <Link
                                to="/web2"
                                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-[#1C5937] shadow-md transition-colors duration-300 hover:bg-[#145BE5] hover:text-white"
                            >
                                CONOCER AGROMAPS
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* COLUMNA DERECHA: UI DEL CELULAR */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative flex w-full items-center justify-center md:w-1/2"
                >
                    {/* Panel de fondo detrás del celular */}
                    <div className="absolute inset-x-6 top-6 hidden h-64 rounded-3xl bg-emerald-100/80 shadow-inner md:block lg:h-72" />

                    {/* Mockup del celular */}
                    <div className="relative z-10">
                        <img
                            src="@/images/About/HomeScreenAgroMaps.svg"
                            alt="Interfaz de la app Agromaps"
                            className="w-40 drop-shadow-2xl sm:w-44 md:w-48 lg:w-56 xl:w-64"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
