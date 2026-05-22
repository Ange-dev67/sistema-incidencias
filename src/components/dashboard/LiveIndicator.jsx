export default function LiveIndicator() {
  return (
    <div className="flex items-center gap-2">

      <div
        className="
          w-3
          h-3
          rounded-full
          bg-green-500
          animate-pulse
        "
      ></div>

      <span className="text-sm font-bold uppercase">
        EN VIVO
      </span>

    </div>
  );
}