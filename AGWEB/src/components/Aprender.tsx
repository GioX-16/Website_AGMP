import { motion } from "framer-motion";

export default function Aprender() {
    return (
        <section
            id="apren"
            className="w-full bg-white py-12 sm:py-16 lg:py-20"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Título principal */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#003222] uppercase"
                >
                    APRENDE CON AGROMAPS
                </motion.h2>

                {/* Contenido: iPhone + texto */}
                <div className="mt-10 lg:mt-14 flex flex-col items-center gap-10 lg:flex-row lg:items-start">
                    {/* Columna de texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="order-1 w-full lg:order-2 lg:w-1/2 text-center lg:text-left space-y-4"
                    >
                        <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                            Tipos de Suelos
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                            El usuario puede explorar la función de Tipos de suelos.
                            Ahí la aplicación analiza el terreno seleccionado y muestra si el suelo es
                            fértil para sembrar, si necesita abonarse o si está en buenas condiciones
                            para mantener cultivos actuales. A través de gráficos sencillos y explicaciones
                            claras, el usuario aprende a diferenciar los distintos niveles de fertilidad
                            y a comprender cómo influyen en el crecimiento de sus plantas.
                        </p>
                    </motion.div>

                    {/* Columna iPhone */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="order-2 w-full lg:order-1 lg:w-1/2 flex justify-center"
                    >
                        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
                            {/* Usa aquí tu PNG del iPhone con la pantalla del dashboard */}
                            <img
                                src="/images/aprende.png"
                                alt="Pantalla de Tipos de Suelos en la app Agromaps"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
