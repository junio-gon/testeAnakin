// Página de Login: Requerido: email e senha
import React, { FormEvent, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import api from "../../services/api";
import logoImg from '../../images/user-male.png';
import '../../styles/Pages/page-contacts.css';
import '../../styles/Pages/login.css';
import '../../styles/Pages/form.css';


export default function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const data = {
            'email': email,
            'password': password,
        };
        
        const erro = 'O email informado e/ou a senha estão incorretos';
        await api.post('api/Auth/signin', data)
            .then(async response => {
                if (!response.data) {
                    alert(erro);
                    //loggererror.error(`${erro} ' | User: ${email} | on ${module.filename}`);
                    console.error(`${erro} ==> EMAIL: ${email}`);
                    return Promise.reject(`${erro} EMAIL: ${email}`);//salvar no arquivo de log
                    sessionStorage.removeItem('user');
                    sessionStorage.removeItem('token');
                }
                else { 
                    sessionStorage.setItem('user', email);
                    sessionStorage.setItem('token', JSON.stringify(response.data['token']));
                    console.log(`${response.data['message']} TOKEN: ${response.data['token']}`);
                    console.log(sessionStorage.getItem('user'), sessionStorage.getItem('token'));//salvar no arquivo de log
                    history.push('/contact/contacts');
                }
            })
            .catch(error => {
                alert(erro);
                console.error(`${error} ==> ${erro}`);//salvar no arquivo de log
                sessionStorage.removeItem('user');
                sessionStorage.removeItem('token');
            });
    }

    return (
        <div id="page-login">
            <div className="content-wrapper">
                <main>
                    <div id="text">
                        <h1>Entrar</h1>
                        <p>Agenda de Contatos</p>
                    </div>
                    <div id="logo">
                        <img src={logoImg} alt="App"></img>
                    </div>
                    <form onSubmit={handleSubmit} className="login-form">
                        <fieldset>
                            <legend>Login</legend>
                            <div className="input-block">
                                <label htmlFor="username">E-mail</label>
                                <input id="email" type="email"
                                    value={email}
                                    onChange={
                                        event =>
                                            setEmail(event.target.value)
                                    }
                                />
                            </div>
                            <div className="input-block">
                                <label htmlFor="password">Senha</label>
                                <input id="password" type="password"
                                    value={password}
                                    onChange={
                                        event =>
                                            setPassword(event.target.value)
                                    }
                                />
                            </div>
                        </fieldset>
                        <button className="confirm-button" type="submit">
                            Confirmar
                        </button>
                        <Link to="/register" className="register">
                            <button className="register-button">
                                Cadastrar-se
                            </button>
                        </Link>
                    </form>
                </main>
            </div>
        </div>
    );
}