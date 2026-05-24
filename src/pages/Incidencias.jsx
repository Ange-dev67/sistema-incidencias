import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import IncidentTable from "../components/incidencias/IncidentTable";
import { incidencias } from "../data/incidencias";

export default function Incidencias() {
  return (
    <div className="flex bg-surface min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
        <div className="px-8 py-4">
          <Navbar />
        </div>
        <div className="px-8 pb-8 space-y-8 flex-1">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-headline font-bold tracking-tight text-primary">
                Listado de Incidencias
              </h2>
              <p className="text-on-surface-variant mt-2 font-body max-w-2xl">
                Gestión y monitoreo en tiempo real de brechas de seguridad y anomalías detectadas por el sistema Digital Sentinel.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 outline outline-1 outline-outline-variant/20 rounded-xl text-secondary font-semibold text-sm hover:bg-secondary/5 transition-all">
                Exportar Reporte
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container rounded-xl text-on-primary font-semibold text-sm shadow-lg shadow-primary/10 hover:scale-95 duration-150 flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">add</span>
                Nueva Incidencia
              </button>
            </div>
          </div>

          <IncidentTable data={incidencias} />
        </div>
      </main>
    </div>
  );
}
