import useCounter from "../../hooks/useCounter";

export default function MetricCard({
  title,
  value,
  description
}) {

  const animatedValue = useCounter(value);

  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      "
    >

      <h3 className="text-slate-500 uppercase text-sm font-bold">
        {title}
      </h3>

      <div className="text-5xl font-black mt-4 text-slate-800">
        {animatedValue}
      </div>

      <p className="mt-4 text-sm text-slate-400">
        {description}
      </p>

    </div>
  );
}