import React from 'react';
import { motion } from 'framer-motion'; // Si planeas agregar animaciones

const IArecom: React.FC = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between py-20 px-5 lg:px-20">
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Recomendaciones con IA
                </h2>
                <p className="text-lg text-gray-700">
                    Después del diagnóstico del suelo, la app activa la función de Recomendaciones inteligentes.
                    Con ayuda de la inteligencia artificial, el sistema sugiere qué cultivos son los más adecuados
                    para esas condiciones específicas, qué nutrientes pueden incorporarse y hasta prácticas sostenibles
                    para mejorar el rendimiento. De esta manera, cada agricultor no solo recibe un consejo, sino que aprende
                    por qué esa recomendación es la más efectiva para su terreno.
                </p>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
                <motion.img
                    src="/images/iamckoup.png"
                    alt="Imagen 3D del diseño de la app"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}

export default IArecom;
