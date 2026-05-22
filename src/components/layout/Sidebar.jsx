export default function Sidebar() {

  return (
    <aside
      className="
        w-64
        bg-slate-900
        text-white
        min-h-screen
        p-6
        hidden
        md:block
      "
    >

      <div className="mb-10">

        <h1 className="text-3xl font-black">
          Sentinel
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Panel de monitoreo
        </p>

      </div>

      <nav className="space-y-3">

        <button className="w-full text-left p-4 rounded-2xl bg-sky-500 font-bold hover:bg-sky-400 transition-all">
          Dashboard
        </button>

        <button className="w-full text-left p-4 rounded-2xl hover:bg-slate-800 transition-all">
          Incidencias
        </button>

        <button className="w-full text-left p-4 rounded-2xl hover:bg-slate-800 transition-all">
          Reportes
        </button>

        <button className="w-full text-left p-4 rounded-2xl hover:bg-slate-800 transition-all">
          Cámaras
        </button>

      </nav>

    </aside>
  );
}