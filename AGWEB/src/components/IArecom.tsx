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
                    Al solicitar un diagnostico inteligente, la aplicación activa le recomendará de forma inteligente,
                    los cultivos que sean más adecuados para la condición de su tierra, qué nutrientes pueden incorporarse
                    y prácticas sostenibles para mejorar el rendimiento y cuidar mejor al medio ambiente.
                    De esta manera, cada agricultor no solo recibe un consejo, sino que tiene a la mano un plan de acción completo
                    para poder cuidar de sus cultivos y mejorar su productividad.
                </p>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
                <motion.img
                    src="/images/recomendaciones.png"
                    alt="Imagen 3D del diseño de la app"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}

export default IArecom;
