import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chat from "./pages/Login";
import Ventana_principal from "./pages/Ventana_principal";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);