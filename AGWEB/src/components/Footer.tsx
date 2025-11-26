import { Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
    siteName?: string;
    logo?: React.ReactNode;
}

export default function Footer({ siteName = "Agromaps", logo }: FooterProps) {
    return (
        <footer className="bg-green-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    {/* Columna del Logo y Descripción */}
                    <div className="col-span-1 lg:col-span-2">
                        {logo ? (
                            <div className="mb-4">{logo}</div>
                        ) : (
                            <img
                                src="/icons/lgo_footer.svg"
                                alt="Agromaps Logo"
                                className="w-48 mb-4"
                            />
                        )}
                        <p className="text-sm mb-4">
                            Con nuestra App, puedes monitorear y gestionar tus cultivos de manera eficiente, optimizando recursos y maximizando rendimientos.
                        </p>
                    </div>


                    {/* Columnas de Enlaces */}

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Descargar App próximamente</h3>
                            <ul>
                                <li className="mb-2"><a href="/careers" className="hover:text-white">Plataformas</a></li>
                                <div className="flex space-x-3">
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Contacto</h3>
                            <ul>
                                <li className="mb-2"><a href="/features" className="hover:text-white">contacto@agromapsnic.com</a></li>
                                <li className="mb-2"><a href="/features" className="hover:text-white">Managua - Nicaragua</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white uppercase mb-4">Legal</h3>
                            <ul>
                                <li className="mb-2"><a href="/privacy" className="hover:text-white">Política de Privacidad</a></li>
                                <li className="mb-2"><a href="/terms" className="hover:text-white">Términos de Servicio</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Barra inferior */}

                <div className="mt-12 pt-8 border-t border-white-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} {siteName}. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-4">
                        <a target="noopener" href="https://www.facebook.com/profile.php?id=61566781988062" className="hover:text-white" aria-label="Facebook"><Facebook size={20} /></a>
                        <a target="noopener" href="https://www.instagram.com/agromapas_nic/" className="hover:text-white" aria-label="Instagram"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
