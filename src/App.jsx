import React, { useState } from 'react';
import asistenteCuy from './assets/img/asistenteCuy.png';
import axios from 'axios';
import './App.css'; // Asegúrate de importar tu archivo CSS

function Chat() {

  
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
            <button className="orange-button" type="submit">Continuar</button>
          </form><br />
      {/* USO DE CHAT GPT */}
          <h1>Preguntale algo a Cui! Cui!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter a prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>

      {/* Display the response */}
      <div className="response">
        <h2>Cui dice:</h2>
        <p>{response}</p>
      </div>
      
      </div>
      <img
          src={asistenteCuy}
          className="asistenteCuy"
        />
    </div>

  );
}

export default Chat;
