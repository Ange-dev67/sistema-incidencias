export default function ResponseCard() {
  return (
    <div className="bg-slate-800 text-white rounded-3xl p-8 relative overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-sm uppercase tracking-widest text-sky-400 font-bold">
          Total Mes
        </h4>

        <div className="text-6xl font-black mt-4">
          1,284
        </div>

        <div className="mt-6 flex items-center gap-2 text-sky-300">
          <span>📈</span>

          <span className="text-sm font-bold">
            +12.5% vs mes anterior
          </span>
        </div>
      </div>

      <div className="absolute -right-10 -bottom-10 text-[10rem] opacity-10">
        🛡️
      </div>
    </div>
  );
}