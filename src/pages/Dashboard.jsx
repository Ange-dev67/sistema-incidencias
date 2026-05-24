import { useEffect, useState } from "react";

import MetricCard from "../components/dashboard/MetricCard";
import Loader from "../components/dashboard/Loader";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [incidencias, setIncidencias] = useState(1284);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIncidencias((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-surface min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
        <div className="px-8 py-4">
          <Navbar />
        </div>
        <div className="px-8 pb-8 flex-1">
          <div className="mt-4">
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-black tracking-tight text-primary">
                    Panel de Monitoreo
                  </h2>
                  <p className="text-on-surface-variant mt-1">
                    Resumen del estado del sistema en tiempo real
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <MetricCard
                    title="Incidencias"
                    value={incidencias}
                    description="Incidencias registradas este mes"
                  />
                  <MetricCard
                    title="Alertas"
                    value={542}
                    description="Alertas críticas activas"
                  />
                  <MetricCard
                    title="Cámaras"
                    value={128}
                    description="Cámaras operativas"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
