import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { day: "01", incidencias: 120 },
  { day: "05", incidencias: 210 },
  { day: "10", incidencias: 180 },
  { day: "15", incidencias: 300 },
  { day: "20", incidencias: 250 },
  { day: "25", incidencias: 420 },
  { day: "30", incidencias: 390 },
];

export default function LineChartCard() {

  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg">

      <div className="mb-6">

        <h2 className="text-2xl font-black text-slate-800">
          Incidencias por Fecha
        </h2>

        <p className="text-slate-400 mt-1">
          Actividad del último mes
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="incidencias"
              stroke="#0ea5e9"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}