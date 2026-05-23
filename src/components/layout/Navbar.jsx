import LiveIndicator from "../dashboard/LiveIndicator";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-2">
      {/* Le quité bg-slate-50, shadow-sm y rounded-3xl para que 
        no parezca una tarjeta y se vea como en tu segunda imagen.
      */}
      <header className="flex justify-between items-start py-4">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-black text-slate-900">
            Análisis de Operaciones
          </h2>

          <p className="text-slate-500 mt-1">
            Visión analítica del rendimiento de vigilancia y patrones de incidentes.
          </p>
        </div>

        {/* RIGHT SIDE */}
        {/* CAMBIO CLAVE: items-start en lugar de items-end */}
        <div className="flex flex-col items-start gap-3">

          {/* FILTROS (ROW TOP) */}
          <div className="flex items-center gap-3">

            {/* FECHA */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
              <span className="text-blue-500 text-sm">📅</span>
              <select className="bg-transparent text-xs font-bold outline-none text-slate-700">
                <option>ÚLTIMOS 30 DÍAS</option>
                <option>ESTE MES</option>
                <option>AÑO ACTUAL</option>
              </select>
            </div>

            {/* CATEGORÍA */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
              <span className="text-blue-500 text-sm">🔽</span>
              <select className="bg-transparent text-xs font-bold outline-none text-slate-700">
                <option>TODAS LAS CATEGORÍAS</option>
                <option>SEGURIDAD</option>
                <option>MANTENIMIENTO</option>
              </select>
            </div>

          </div>

          {/* BOTÓN EXPORT (ROW BOTTOM) */}
          <button className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-bold tracking-widest hover:bg-slate-800 transition">
            EXPORTAR PDF
          </button>
        </div>
      </header>

      {/* EL INDICADOR (Si no lo necesitas en esta vista, puedes borrarlo) */}
      <div className="flex justify-end pr-4">
        <LiveIndicator />
      </div>
    </div>
  );
}