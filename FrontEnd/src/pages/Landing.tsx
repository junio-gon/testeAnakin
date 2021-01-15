import React from 'react';
// import './styles/global.css';
import '../styles/Pages/landing.css';
import logoImg from '../images/user-male.png';
import { FiArrowRight } from 'react-icons/fi'; 
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <Link to={'/login'}><img src={logoImg} alt="App"></img></Link>
                <main>
                <h1>Agenda de Contatos</h1>
                <p>Adicione Nome, nascimento e e-mail</p>
                </main>
                <div className="location">
                <strong>Sorocaba</strong>
                <span>São Paulo</span>
                </div>
                <Link to="/login" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" /> 
                </Link>
            </div>
        </div>
    );
}

export default Landing;