import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function Login() {

  
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/chat', { prompt })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    <div className="Chat">
        <div className="image-container">
          <img
            className="image"
          />
          <img
            src="https://loginunico.viabcp.com/assets/img/logo.svg" 
            className="logo" 
          />

        </div>
        <div className="form-container">
          <h1>Banca por Internet</h1><br />
          <form >
            
            <div>
              <label>
              <select
                  name="selectedDocument"

                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                  <option value="PAS">PAS</option>
                
                </select>
                
                <input
                  type="text"
                  name="identification"

                />
              </label>
            </div><br />
            <div>
              <label>
                Número de tarjeta:
                <input
                  type="text"
                  name="cardNumber"

                />
              </label>
            </div><br />
            <div>
              <label>
                <input
                  type="checkbox"
                  name="rememberData"

                />
                Recordar datos
              </label>
            </div><br />
            <div>
              <label>
                Clave de Internet (6 dígitos):
                <input
                  type="password"
                  name="password"
                />
              </label>
            </div>
            <Link to={"/Ventana_principal"}>
              <button className="orange-button" type="submit">Continuar</button>
            </Link>
          </form><br />
      {/* USO DE CHAT GPT */}
          <h1>Preguntale algo a Cui! Cui!</h1>

    

      {/* Display the response */}
      
      
      </div>

    </div>

  );
}

export default Login;
