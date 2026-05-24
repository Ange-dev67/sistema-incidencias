import { useState, useMemo } from "react";

const ROWS_PER_PAGE = 10;

const typeColors = {
  "Seguridad Física": "bg-error/10 text-error",
  Robo: "bg-error/10 text-error",
  Sospecha: "bg-secondary-container/20 text-on-secondary-container",
  Accidente: "bg-surface-container-highest text-on-surface-variant",
  Mantenimiento: "bg-surface-variant/50 text-on-surface-variant",
  Credenciales: "bg-primary-fixed/30 text-on-primary-fixed-variant",
  Infraestructura: "bg-surface-container-high/50 text-on-surface-variant",
};

const estadoColors = {
  Pendiente: "bg-error-container text-on-error-container",
  "En Proceso": "bg-secondary-container/20 text-on-secondary-container",
  Resuelto: "bg-surface-container-highest text-on-surface-variant",
};

const priorityDot = {
  "Seguridad Física": "bg-error",
  Robo: "bg-error",
  Sospecha: "bg-secondary",
  Accidente: "bg-outline-variant",
  Mantenimiento: "bg-outline-variant",
  Credenciales: "bg-primary-fixed-dim",
  Infraestructura: "bg-outline-variant",
};

const filterTabs = [
  { label: "Todas", key: "all" },
  { label: "Críticas", key: "criticas" },
  { label: "Advertencias", key: "advertencias" },
];

function SortIcon({ columnKey, sortKey, sortDirection }) {
  if (sortKey !== columnKey) {
    return <span className="text-outline/30 ml-1">&#8597;</span>;
  }
  return (
    <span className="text-secondary ml-1">
      {sortDirection === "asc" ? "\u25B2" : "\u25BC"}
    </span>
  );
}

export default function IncidentTable({ data }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = useMemo(() => {
    let result = data;

    if (activeFilter === "criticas") {
      result = result.filter((r) =>
        ["Seguridad Física", "Robo", "Infraestructura"].includes(r.tipo)
      );
    } else if (activeFilter === "advertencias") {
      result = result.filter((r) =>
        ["Sospecha", "Mantenimiento", "Credenciales"].includes(r.tipo)
      );
    }

    if (!searchQuery.trim()) return result;
    const q = searchQuery.toLowerCase();
    return result.filter(
      (row) =>
        row.nombre.toLowerCase().includes(q) ||
        row.tipo.toLowerCase().includes(q) ||
        row.estado.toLowerCase().includes(q) ||
        row.supervisor.toLowerCase().includes(q) ||
        row.operador.toLowerCase().includes(q) ||
        row.camara.toLowerCase().includes(q) ||
        row.id.toLowerCase().includes(q) ||
        row.descripcion.toLowerCase().includes(q)
    );
  }, [data, searchQuery, activeFilter]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      let valA = a[sortKey];
      let valB = b[sortKey];
      if (sortKey === "fecha") {
        valA = `${a.fecha} ${a.hora}`;
        valB = `${b.fecha} ${b.hora}`;
      }
      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / ROWS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const start = (safePage - 1) * ROWS_PER_PAGE;
    return sortedData.slice(start, start + ROWS_PER_PAGE);
  }, [sortedData, safePage]);

  function handleSort(key) {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
    setCurrentPage(1);
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

  function renderPageButtons() {
    const buttons = [];
    const maxVisible = 5;
    let start = Math.max(1, safePage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    buttons.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
        disabled={safePage <= 1}
        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-all disabled:opacity-30 disabled:pointer-events-none"
      >
        <span className="material-symbols-outlined text-sm text-on-surface-variant">chevron_left</span>
      </button>
    );

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 rounded-lg text-xs transition-all duration-200 ${
            i === safePage
              ? "bg-primary text-white font-bold"
              : "font-semibold text-on-surface-variant hover:bg-surface-container-low"
          }`}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
        disabled={safePage >= totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container-low transition-all disabled:opacity-30 disabled:pointer-events-none"
      >
        <span className="material-symbols-outlined text-sm text-on-surface-variant">chevron_right</span>
      </button>
    );

    return buttons;
  }

  const from = sortedData.length === 0 ? 0 : (safePage - 1) * ROWS_PER_PAGE + 1;
  const to = Math.min(safePage * ROWS_PER_PAGE, sortedData.length);

  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 bg-surface-container-low/50 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveFilter(tab.key);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === tab.key
                  ? "bg-white shadow-sm text-primary"
                  : "text-on-surface-variant hover:bg-white/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="w-px h-6 bg-outline-variant/20 mx-1"></span>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40 text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-52 bg-surface-container-highest/40 border-none rounded-lg py-2 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all placeholder:text-on-surface-variant/40 text-on-surface"
            />
          </div>
        </div>
        <button className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant opacity-60 hover:opacity-100 transition-all">
          <span className="material-symbols-outlined text-sm">filter_list</span>
          Filtros Avanzados
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/30">
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant w-4"></th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                ID
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                Nombre
              </th>
              <th
                className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant cursor-pointer select-none hover:text-secondary transition-colors"
                onClick={() => handleSort("fecha")}
              >
                Fecha / Hora <SortIcon columnKey="fecha" sortKey={sortKey} sortDirection={sortDirection} />
              </th>
              <th
                className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant cursor-pointer select-none hover:text-secondary transition-colors"
                onClick={() => handleSort("tipo")}
              >
                Tipo <SortIcon columnKey="tipo" sortKey={sortKey} sortDirection={sortDirection} />
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                Supervisor
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                Operador
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                Cámara
              </th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant text-center">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-6 py-16 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl block mb-2 text-outline">search_off</span>
                  <span className="text-sm font-semibold">No se encontraron incidencias</span>
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => (
                <tr
                  key={row.id + row.fecha + row.hora}
                  className="hover:bg-surface-container-low transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className={`w-2 h-2 rounded-full ${priorityDot[row.tipo] || "bg-outline-variant"}`}></div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                      {row.id}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-primary">{row.nombre}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-primary">{row.fecha}</p>
                    <p className="text-[10px] text-on-surface-variant">{row.hora}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                        typeColors[row.tipo] || "bg-surface-container-highest text-on-surface-variant"
                      }`}
                    >
                      {row.tipo}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-on-surface">
                    {row.supervisor}
                  </td>
                  <td className="px-6 py-5 text-sm font-medium text-on-surface">
                    {row.operador}
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-mono font-semibold text-on-surface-variant uppercase">
                      {row.camara}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${
                        estadoColors[row.estado] || "bg-surface-container-highest text-on-surface-variant"
                      }`}
                    >
                      {row.estado}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 border-t border-outline-variant/10 flex items-center justify-between">
        <p className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
          {sortedData.length === 0
            ? "Sin resultados"
            : `Mostrando ${from}-${to} de ${sortedData.length} incidencias registradas`}
        </p>
        <div className="flex items-center gap-1">{renderPageButtons()}</div>
      </div>
    </div>
  );
}
