export default function Sidebar() {
  return (
    <aside className="
      w-64
      bg-[#f0f4f8]
      text-[#091426]
      min-h-screen
      p-6
      hidden
      md:block
      border-r border-[#1e293b]/10
    ">
      
      <div className="mb-10">
        <h1 className="text-3xl font-black tracking-tight">
          Operational Commmand
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          Panel de monitoreo
        </p>
      </div>

      <nav className="space-y-2">

        <button className="w-full text-left p-3 rounded-xl bg-white shadow-sm font-semibold text-slate-900 hover:bg-slate-50 transition">
          Dashboard
        </button>

        <button className="w-full text-left p-3 rounded-xl text-slate-600 hover:bg-white hover:text-slate-900 transition">
          Incidencias
        </button>

        <button className="w-full text-left p-3 rounded-xl text-slate-600 hover:bg-white hover:text-slate-900 transition">
          Reportes
        </button>

        <button className="w-full text-left p-3 rounded-xl text-slate-600 hover:bg-white hover:text-slate-900 transition">
          Cámaras
        </button>

      </nav>

    </aside>
  );
}