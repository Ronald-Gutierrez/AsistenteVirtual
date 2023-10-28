import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Ventana_principal from "./pages/Ventana_principal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Ventana_principal" element={<Ventana_principal />} />
      </Routes>
    </BrowserRouter>
  );
}
