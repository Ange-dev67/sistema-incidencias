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

      setIncidencias(prev => prev + 1);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="flex bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">

        <Navbar />

        <div className="mt-8">

          {
            loading
            ?
            <Loader />
            :
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
          }

        </div>

      </main>

    </div>
  );
}