import { Component, useState } from 'react'
import './Ventana_principal.css'

function Navbar() {
    return (
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    );
  }
  

class Ventana_principal extends Component{
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
    
    render(){
        return (
            
            <div class="contenedor">
                <div className="barra-navegacion">
                    <div className="logo">
                        <img src="./src/assets/img/bcp_logo.png" alt="Logo" />
                    </div>
                    <div className="opciones">
                        <span>Inicio</span>
                        <span>Operaciones</span>
                        <span>Explora</span>
                    </div>
                </div>
                <div class="columna columna1">
                    <h2>¿Qué vamos hacer hoy?</h2>
                    <div class= "matriz">
                        <div class="recuadro">
                            <img src= './src/assets/img/transferir.png' className='transferirDinero' alt="Transferir Dinero"></img>
                            <p>Transferir dinero</p>
                        </div>
                        <div class="recuadro">
                            <img src= './src/assets/img/tarjeta-de-credito.png' className='pagarTarjetas' alt="Pagar Tarjetas"></img>
                            <p>Pagar tarjetas</p>
                        </div>
                        <div class="recuadro">
                            <img src= './src/assets/img/gota-de-agua.png' className='pagarServicios' alt="Pagar Servicios"></img>
                            <p>Pagar Servicios</p>
                        </div>
                        <div class="recuadro">
                            <img src='./src/assets/img/documento.png' className='estado' alt="Ver Estados"></img>
                            <p>Ver Estados de Cuentas</p>
                        </div>
                    </div>
                    <h2>Conoce tu cronograma</h2>
                </div>
                <div class="columna columna2">
                    <h2>Revisa tus gastos e ingresos</h2>
                    
                </div>
                <div class="columna columna3">
                    <h2>Mis productos</h2>
                    <div class= "matriz_producto">
                        <div class="recuadro">
                            <img src= './src/assets/img/bcp.png' className='bcp'></img>
                            <h2 className='cuentaAhorro'>Cuenta de Ahorro</h2>
                            <h2 className='soles'>s/**</h2>
                            <p className='cuenta'>*****2332</p>
                            <p className='saldo'>Saldo disponible</p>
                        </div>
                        <div class="recuadro">
                            <img src= './src/assets/img/bcp.png' className='bcp'></img>
                            <h2 className='cuentaAhorro'>Cuenta de Ahorro</h2>
                            <h2 className='soles'>s/**</h2>
                            <p className='cuenta'>*****3355</p>
                            <p className='saldo'>Saldo disponible</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ventana_principal;
