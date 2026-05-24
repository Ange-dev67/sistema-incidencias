import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/", icon: "dashboard" },
  { name: "Incidencias", path: "/incidencias", icon: "warning" },
  { name: "Reportes", path: "/reportes", icon: "bar_chart" },
  { name: "Cámaras", path: "/camaras", icon: "videocam" },
  { name: "Soporte", path: "/soporte", icon: "support_agent" },
  { name: "Configuración", path: "/configuracion", icon: "settings" },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 z-50 bg-surface-container-low">
      <div className="flex flex-col h-full p-6 space-y-2">
        <div className="mb-10 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">Operational Command</h1>
              <p className="font-body font-semibold uppercase tracking-[0.05em] text-[11px] text-on-surface-variant/60">Level 4 Authorization</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1 flex-grow">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-all rounded-lg group ${
                  isActive
                    ? "bg-surface-container-highest text-secondary shadow-sm translate-x-0.5"
                    : "text-on-surface-variant/70 hover:text-primary hover:bg-surface-container"
                }`}
              >
                <span
                  className="material-symbols-outlined text-xl"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="font-body font-semibold uppercase tracking-[0.05em] text-[11px]">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-outline-variant/10">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-sm">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-primary truncate">John Doe</p>
              <p className="text-[10px] uppercase tracking-wider text-outline font-semibold">Lead Sentinel</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
