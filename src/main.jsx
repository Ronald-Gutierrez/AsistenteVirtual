import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chat from './Chat.jsx'
import './index.css'
import './App.css'; // Asegúrate de importar tu archivo CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)