export default function FeaturedReport() {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

      <div className="lg:w-1/3 h-72">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-2/3 p-10">

        <h3 className="text-xs font-bold text-cyan-600 uppercase">
          Reporte destacado
        </h3>

        <h2 className="text-3xl font-black mt-3 text-slate-800">
          Optimización de respuesta en el sector noroeste
        </h2>

        <p className="text-slate-500 mt-4">
          Mejora del 24% en tiempos de respuesta gracias a nuevas unidades
          de monitoreo y automatización del sistema.
        </p>

        <button className="mt-6 font-bold text-slate-800 hover:translate-x-2 transition">
          Leer reporte →
        </button>

      </div>
    </div>
  );
}