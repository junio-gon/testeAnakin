//Página editar contato
/**
 * Campos Nome e E-mail obrigatórios
 * id do jseon deve ser tipo numérico
 */
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FaUserEdit, FaUserMinus } from 'react-icons/fa';
import { Contato } from "../../Interfaces/IContact";
import Sidebar from "../../components/sidebar";
import api from "../../services/api";
import '../../styles/Pages/page-contatcs-list.css';
import { config } from "process";

export default function Contacts() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [id, setId] = useState('');
  const history = useHistory();
  
   useEffect(() => {
    api.get('contatos').then(response => {
       setContatos(response.data);
    });
  }, [id]);

  //função para exclusão do usuário
  async function deleteContato(contato: string) {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      await api.delete(`contatos/${contato}`);
      console.log('Excluido contato: ' + contato); //criar arquivo de log
      setId(contato);
    }
    return;
  }

  if(!contatos){
    return <progress>CARREGANDO CONTATO</progress>
  }
  
  return (
    <div id="page-contacts">
      <Sidebar />
      <main>
        <form className="page-contatcs-form-list">
          <fieldset>
            <legend>Contatos</legend>
            <table>
              <thead>
                <tr>
                  <th className="id">ID</th>
                  <th className="nome">Nome</th>
                  <th className="nascimento">Nascimento</th>
                  <th className="email">Email</th>
                  <th className="acoes">Ações</th>
                </tr>
              </thead>
              <tbody>
                {console.log(contatos)}
                {contatos.map(contato => {
                  return (
                    <tr key={contato.id}>
                      <td>{contato.id}</td>
                      <td>{contato.nome}</td>
                      <td>{
                        contato.nascimento.substring(8, 10) + '/' + contato.nascimento.substring(5, 7) + '/' + contato.nascimento.substring(0, 4)
                      }</td>
                      <td>{contato.email}</td>
                      <td><Link to={`/contact/create/${contato.id}`}>
                        <button id="edit-contact"><FaUserEdit size={20} color="blue" /></button>
                      </Link>
                        <button id="delete-contact" onClick={() => deleteContato(contato.id)} value={contato.id}><FaUserMinus size={20} color="red" /></button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </fieldset>
        </form>
      </main>
    </div>
  );
}