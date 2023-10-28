import React, { Component } from 'react';

import asistenteCuy from './assets/img/asistenteCuy.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: 'Persona', // Valor predeterminado
      identification: '',
      cardNumber: '',
      rememberData: false,
      password: '',
      captcha: '',
    };
  }

  handleUserTypeChange = (e) => {
    this.setState({ userType: e.target.value });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleRememberDataChange = () => {
    this.setState({ rememberData: !this.state.rememberData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar los datos del formulario
  }

  //desenfoque
  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }
  render() {
    return (
      
      <div className="login-container">
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
          <form onSubmit={this.handleSubmit}>
            
            <div>
              <label>
              <select
                  name="selectedDocument"
                  value={this.state.selectedDocument}
                  onChange={this.handleDocumentChange}
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                  <option value="PAS">PAS</option>
                
                </select>
                
                <input
                  type="text"
                  name="identification"
                  value={this.state.identification}
                  onChange={this.handleInputChange}
                />
              </label>
            </div><br />
            <div>
              <label>
                Número de tarjeta:
                <input
                  type="text"
                  name="cardNumber"
                  value={this.state.cardNumber}
                  onChange={this.handleInputChange}
                />
              </label>
            </div><br />
            <div>
              <label>
                <input
                  type="checkbox"
                  name="rememberData"
                  checked={this.state.rememberData}
                  onChange={this.handleRememberDataChange}
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
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <button className="orange-button" type="submit">Continuar</button>
          </form>
          
          </div>
        <img
          src={asistenteCuy}
          className="asistenteCuy"
          alt="LogoAsistente"
          onClick={this.openModal}
        />

        {this.state.isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <ul>
                <li>¿Cómo puedo sacar una linea de credito?</li>
                <li>¿Cómo puedo ahorrar mejor mi dinero?</li>
                <li>¿Cuánto de dinero e gastado este mes?</li>
                <li>¿Cuánto de ingreso e tenido este mes?</li>
              </ul>
              <input className='inputModal'
                  type="text"
                  name="preguntaText"
                  placeholder="Escribe lo que quieres preguntarle a CUIA"
                  value={this.state.preguntaText}
                  onChange={this.handleInputChange}


                />
              <button className="blue-button" type="submit">Enviar</button>
              
            </div>
          </div>
        )}
      </div>
    );
  }
}
function App() {
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
    <div className="App">
      <h1>Chat with GPT-3</h1>

      {/* Form for entering a prompt */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter a prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Display the response */}
      <div className="response">
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default {Login, app};
