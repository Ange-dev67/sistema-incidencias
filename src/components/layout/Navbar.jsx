export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full bg-surface bg-gradient-to-b from-surface-container-low to-transparent sticky top-0 z-40">
      <div className="flex-1"></div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-surface-container-highest/50 transition-colors relative">
          <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <button className="p-2 rounded-full hover:bg-surface-container-highest/50 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">settings</span>
        </button>
        <button className="p-2 rounded-full hover:bg-surface-container-highest/50 transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
        </button>
      </div>
    </header>
  );
}
