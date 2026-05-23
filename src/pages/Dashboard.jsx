import { useEffect, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/dashboard/Loader";

import IncidenciasPorFecha from "../components/charts/IncidenciasPorFecha";
import BarChartCard from "../components/charts/BarChartCard";
import FeaturedReport from "../components/dashboard/FeaturedReport";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [incidencias, setIncidencias] = useState(1284);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncidencias((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />

      <main className="flex-1 p-8 flex flex-col gap-8">
        <Navbar />

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* ===== GRAFICO PRINCIPAL + PANEL DERECHO ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* INCIDENCIAS POR FECHA */}
              <div className="lg:col-span-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 rounded-3xl">
                <IncidenciasPorFecha />
              </div>

              {/* PANEL DERECHO */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* TOTAL MES */}
                <div className="bg-[#1e293b] text-white rounded-[32px] p-8 relative overflow-hidden flex-1 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/50 cursor-default group">
                  <h4 className="text-[#38bdf8] text-xs font-bold tracking-widest mb-2 uppercase">Total Mes</h4>
                  <div className="text-7xl font-black mb-4">{incidencias.toLocaleString()}</div>
                  <p className="text-[#38bdf8] text-sm font-bold flex items-center gap-1">
                    <span className="text-lg">📈</span> +12.5% vs mes anterior
                  </p>
                  <div className="absolute -right-8 -bottom-8 opacity-10 text-[150px] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    📊
                  </div>
                </div>

                {/* TIEMPO RESPUESTA */}
                <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200 cursor-default">
                  <h4 className="text-slate-500 text-xs font-bold tracking-widest mb-1 uppercase">Tiempo de Respuesta</h4>
                  <div className="text-4xl font-black text-slate-900 mt-1">4.2m</div>
                  <p className="text-slate-400 text-sm mt-2">Promedio de atención actual</p>
                </div>
              </div>
            </div>

            {/* ===== BAR CHART ===== */}
            <div className="transition-all duration-500 ease-out hover:-translate-y-1">
              <BarChartCard />
            </div>

            {/* ===== FEATURED REPORT ===== */}
            <div>
              <FeaturedReport />
            </div>
          </>
        )}
      </main>
    </div>
  );
}