import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa'; // Usaremos un ícono de "check" de React Icons

const IABenefits: React.FC = () => {
    return (
        <section
            className="bg-cover bg-center py-20 px-5 lg:px-20"
            style={{ backgroundImage: "url('/images/bgbeneficios2.png')" }}
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Beneficios de la App</h2>
                <p className="text-lg text-white">
                    Con nuestra aplicación, los agricultores pueden aprovechar los siguientes beneficios para mejorar su rendimiento y eficiencia.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Beneficio 1 */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <FaCheckCircle className="text-green-500 text-4xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recomendaciones Personalizadas</h3>
                    <p className="text-gray-700">
                        La app proporciona recomendaciones adaptadas a las condiciones específicas de tu terreno y cultivo.
                    </p>
                </motion.div>

                {/* Beneficio 2 */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <FaCheckCircle className="text-blue-500 text-4xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Mejora del Rendimiento</h3>
                    <p className="text-gray-700">
                        Optimiza el uso de recursos y aumenta la producción, mejorando la rentabilidad de tus cultivos.
                    </p>
                </motion.div>

                {/* Beneficio 3 */}
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="flex items-center justify-center mb-6">
                        <FaCheckCircle className="text-red-500 text-4xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Asesoramiento Sostenible</h3>
                    <p className="text-gray-700">
                        Aprenderás prácticas agrícolas sostenibles que no solo mejoran los cultivos, sino también el medio ambiente.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default IABenefits;
