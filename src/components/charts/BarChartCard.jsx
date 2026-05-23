import { useState, useEffect } from "react";

const data = [
  { title: "Acceso No Aut.", value: "75%", height: "75%", color: "bg-slate-800", events: "963 EVENTOS" },
  { title: "Vandalismo", value: "42%", height: "42%", color: "bg-cyan-500", events: "540 EVENTOS" },
  { title: "Falla Técnica", value: "88%", height: "88%", color: "bg-slate-600", events: "1130 EVENTOS" },
  { title: "Mantenimiento", value: "15%", height: "15%", color: "bg-sky-300", events: "192 EVENTOS" },
  { title: "Otros", value: "28%", height: "28%", color: "bg-gray-400", events: "359 EVENTOS" },
];

export default function BarChartCard() {
  // Estado para controlar si las barras deben estar llenas o vacías
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Cuando el componente se monta, esperamos un breve instante para activar la animación
    const timer = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-md">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Incidencias por Tipo</h2>
          <p className="text-slate-500 text-sm">Distribución porcentual</p>
        </div>
        {/* ... botones ... */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-end h-80">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-full h-64 bg-slate-100 rounded-t-2xl overflow-hidden flex items-end">
              <div
                className={`${item.color} w-full rounded-t-2xl transition-all duration-1000 ease-out`}
                style={{ 
                  // Si 'mounted' es falso, altura 0. Si es verdadero, altura real.
                  height: mounted ? item.height : "0%" 
                }}
              ></div>

              <span className={`absolute top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-600 transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
                {item.value}
              </span>
            </div>

            <div className="mt-4 text-center">
              <p className="font-bold text-sm text-slate-800">{item.title}</p>
              <p className="text-xs text-slate-400 mt-1">{item.events}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}