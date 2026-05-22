import LiveIndicator from "../dashboard/LiveIndicator";

export default function Navbar() {

  return (
    <header
      className="
        bg-white
        shadow-sm
        rounded-3xl
        p-6
        flex
        justify-between
        items-center
      "
    >

      <div>

        <h2 className="text-3xl font-black text-slate-800">
          Digital Sentinel
        </h2>

        <p className="text-slate-400 mt-1">
          Sistema de monitoreo inteligente
        </p>

      </div>

      <LiveIndicator />

    </header>
  );
}