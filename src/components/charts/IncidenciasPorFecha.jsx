import { useState } from "react";

export default function IncidenciasPorFecha() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const data = [
    { fecha: "01 SEP", value: 30 },
    { fecha: "05 SEP", value: 45 },
    { fecha: "08 SEP", value: 40 },
    { fecha: "12 SEP", value: 80 },
    { fecha: "15 SEP", value: 70 },
    { fecha: "18 SEP", value: 95 },
    { fecha: "22 SEP", value: 60 },
    { fecha: "25 SEP", value: 85 },
    { fecha: "29 SEP", value: 75 },
  ];

  const max = 100;

  return (
    <div 
      className="bg-white rounded-3xl p-8 shadow-md group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      onMouseLeave={() => setHoverIndex(null)} // Limpiamos al salir de la tarjeta
    >

      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Incidencias por Fecha</h3>
          <p className="text-sm text-gray-500">
            Tendencia histórica de actividad detectada
          </p>
        </div>
     
        <span className="text-xs font-bold text-cyan-600">● VOLUMEN</span>
      </div>

      {/* CHART */}
      <div className="relative h-64">

        <svg viewBox="0 0 600 200" className="w-full h-full">

          {/* LINEA */}
<polyline
            fill="none"
            stroke="#06b6d4"
            className="
              transition-all duration-500 ease-out 
              group-hover:stroke-[6px] 
              group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]
            "
            strokeWidth="3"
            points={data
              .map((d, i) => `${(i * 600) / (data.length - 1)},${200 - (d.value / max) * 180}`)
              .join(" ")}
          />

          {/* AREA */}
          <polygon
            fill="rgba(6,182,212,0.15)"
            points={`
              0,200 
              ${data
                .map((d, i) => `${(i * 600) / (data.length - 1)},${200 - (d.value / max) * 180}`)
                .join(" ")}
              600,200
            `}
          />

          {/* PUNTOS */}
          {data.map((d, i) => {
            const x = (i * 600) / (data.length - 1);
            const y = 200 - (d.value / max) * 180;

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={hoverIndex === i ? 6 : 4}
                fill="#06b6d4"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className="transition-all duration-200 cursor-pointer"
              />
            );
          })}
        </svg>

        {/* HOVER LABEL */}
        {hoverIndex !== null && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-xs">
            {data[hoverIndex].fecha}: {data[hoverIndex].value}
          </div>
        )}
      </div>

      {/* FECHAS */}
      <div className="flex justify-between mt-4 text-[10px] text-gray-500 font-bold">
        {data.map((d, i) => (
          <span key={i}>{d.fecha}</span>
        ))}
      </div>

    </div>
  );
}