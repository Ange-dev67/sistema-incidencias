import useCounter from "../../hooks/useCounter";

export default function MetricCard({ title, value, description }) {
  const animatedValue = useCounter(value);

  return (
    <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
        {title}
      </h3>
      <div className="text-4xl font-black mt-4 text-primary">
        {animatedValue}
      </div>
      <p className="mt-4 text-sm text-on-surface-variant/60">{description}</p>
    </div>
  );
}
