//Página criar usuarios do sistema
/**
 * Campos E-mail  e senha obrigatórios
 * Tipo será usado para tratar as Claims
 */
import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import api from "../../services/api";
import '../../styles/Pages/page-contacts.css';

export default function CreateUser() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  async function handleSubmit(event: FormEvent){
    event.preventDefault();
    if (email != '' && password != '' && confirmpassword != '') {
      if (password.length < 6) {
        alert('A senha precisa ter pelo menos 6 caracteres');
        return;
      }
      if(password === confirmpassword){
        const data = {
          'email': email,
          'password': password,
          'tipo': 1
        };
        try {
          var resp = await api.post('api/Auth/register', data);
          if (resp.status === 201) {
            console.log(resp);//implementar arquivo de log
            alert('cadastro realizado com sucesso');
            history.push('/login');
          }
          else{
            alert('Ocorreu um erro no cadastro, caso o erro persista, procure o administrador');
          }
        } catch (error) {
          alert('Erro de validação. A senha precisar ter ao menos uma letra Maiúscula, Miníscula, Número e Caractere especial (! @ # $ % & * ...)');
          console.log(error)
          return
        }
      }
      else{
        alert('Os valores de senha e confirmação de senha não são iguais');
        return;
      }
    }
    else{
      alert('Os campos e-mail, Senha e Confirme a Senha são obrigatórios');
      return;
    }
  }

  return (
    <div id="page-contacts">
      <Sidebar/>

      <main>
        <form onSubmit={handleSubmit} className="page-contatcs-form">
          <fieldset>
            <legend>Criar Usuário</legend>
            <div className="input-block">
              <label htmlFor="username">E-mail</label>
              <input id="email" type="email" required
                value={email} 
                onChange={ 
                  event => 
                  setEmail(event.target.value)
                } 
              />
            </div>
            <div className="input-block">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" required
                value={password} 
                onChange={ 
                  event => 
                  setPassword(event.target.value)
                } 
              />
            </div>
            <div className="input-block">
              <label htmlFor="confirmPassword">Confirme a Senha</label>
              <input id="confirmPassword" type="password" required
                value={confirmpassword} 
                onChange={ 
                  event => 
                  setConfirmPassword(event.target.value)
                } 
              />
            </div>
          </fieldset>
          <div id="progress"></div>
          <button className="confirm-button" type="submit">
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}