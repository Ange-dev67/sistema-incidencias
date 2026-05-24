import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Incidencias from "./pages/Incidencias";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/incidencias" element={<Incidencias />} />
      </Routes>
    </BrowserRouter>
  );
}
