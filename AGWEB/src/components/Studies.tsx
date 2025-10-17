import React from 'react';

const IAStudies: React.FC = () => {
    return (
        <section
            className="bg-cover bg-center py-20 px-5 lg:px-20"
            style={{ backgroundImage: "url('/images/agroooo.png')" }}
        >
            <div className="flex items-center justify-start h-full">
                <div className="text-left text-white w-full lg:w-1/2 max-w-xl">
                    <h2 className="text-4xl font-bold mb-6">Estudios De Suelos</h2>
                    <p className="text-lg mb-8">
                        Agromaps promueve el cuidado ecológico enseñando rotación de cultivos, uso responsable de recursos y prácticas sostenibles
                        que protegen el suelo y mejoran la cosecha.
                    </p>
                    <a
                        href="#download"
                        className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
                    >
                        Download App
                    </a>
                </div>
            </div>
        </section>
    );
}

export default IAStudies;
