// app/components/Hero.tsx
export default function Hero() {
    return (
        <section className=" overflow-hidden bg-gradient-to-b from-emerald-50 to-emerald-100">
            <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center px-4 py-10 sm:py-16 lg:py-20 md:flex-row md:gap-12">
                {/* COLUMNA IZQUIERDA: TEXTO */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                        Agricultura inteligente · Datos de suelo accionables
                    </span>

                    <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Convierte tus{" "}
                        <span className="text-emerald-700">suelos en datos</span>
                        {" "}y tus datos en rendimiento.
                    </h1>

                    <p className="mx-auto max-w-xl text-sm text-slate-600 sm:text-base">
                        AGROMAPS centraliza análisis de suelo, mapas productivos y
                        recomendaciones de fertilización para que productores, cooperativas
                        y técnicos tomen decisiones con evidencia y no solo con intuición.
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
                        <button className="inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-emerald-800 sm:w-auto">
                            Probar demo gratuita
                        </button>
                        <button className="inline-flex w-full items-center justify-center rounded-full border border-emerald-700 bg-white/80 px-6 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-white sm:w-auto">
                            Agendar una llamada
                        </button>
                    </div>

                    {/* PEQUEÑAS MÉTRICAS */}
                    <div className="mx-auto grid max-w-md grid-cols-2 gap-4 pt-4 sm:pt-6">
                        <div>
                            <p className="text-lg font-semibold text-slate-900">5×</p>
                            <p className="text-xs text-slate-500">
                                Retorno anual promedio al ajustar fertilización según análisis
                                de suelo.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-slate-900">60 %</p>
                            <p className="text-xs text-slate-500">
                                De productores aún trabajan de forma empírica. AGROMAPS cierra
                                esa brecha.
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: VISUAL */}
                <div className="mt-10 flex-1 md:mt-0">
                    <div className="relative mx-auto max-w-md">
                        {/* Tarjeta principal con imagen de fondo */}
                        <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-xl ring-1 ring-black/5">
                            <img
                                src="/images/Hero/hero-cultivos.png" // cámbialo por tu imagen
                                alt="Productor revisando cultivos con datos en pantalla"
                                className="h-full w-full object-cover"
                            />
                            {/* Degradado para que se lean los datos */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-900/55 via-transparent to-transparent" />

                            {/* Tarjetita principal de indicadores */}
                            <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-3 text-xs sm:text-sm">
                                <div className="flex items-center justify-between rounded-2xl bg-white/95 px-3 py-2 backdrop-blur-sm">
                                    <div>
                                        <p className="font-medium text-slate-900">
                                            Lote 3 · Maíz de primera
                                        </p>
                                        <p className="text-[11px] text-slate-500">
                                            Suelo franco arenoso · 4 ha monitoreadas
                                        </p>
                                    </div>
                                    <p className="text-right text-sm font-semibold text-emerald-700">
                                        +27 % rendimiento
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <div className="flex-1 rounded-2xl bg-emerald-900/95 px-3 py-2 text-white backdrop-blur-sm">
                                        <p className="text-[11px] uppercase tracking-wide text-emerald-200">
                                            Recomendación de fertilización
                                        </p>
                                        <p className="text-xs font-medium">
                                            Aplicar 140 kg/ha N · 60 kg/ha P₂O₅ · 40 kg/ha K₂O
                                        </p>
                                    </div>

                                    <div className="hidden flex-col gap-1 rounded-2xl bg-white/90 px-3 py-2 text-[11px] text-slate-600 backdrop-blur-sm sm:flex">
                                        <p>pH: 6.4</p>
                                        <p>MO: 2.1 %</p>
                                        <p>Textura: franco</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Badge flotante arriba a la derecha (solo desktop) */}
                        <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-2xl bg-white px-3 py-2 text-xs text-slate-700 shadow-lg md:flex">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Mapa actualizado hace 2 horas
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
