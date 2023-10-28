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
                <input
                  type="radio"
                  name="userType"
                  value="Persona"
                  checked={this.state.userType === 'Persona'}
                  onChange={this.handleUserTypeChange}
                />
                Persona
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Empresa"
                  checked={this.state.userType === 'Empresa'}
                  onChange={this.handleUserTypeChange}
                />
                Empresa
              </label>
            </div><br />
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
        <img src={asistenteCuy} className="asistenteCuy" alt="Logo" />

      </div>
    );
  }
}

export default Login;
