// menú sidebar
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaUsers, FaUserPlus } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/user-male.png';
import '../styles/components/Sidebar.css';

export default function Sidebar(){
    const { goBack } = useHistory();
    return(
        <aside className="app-sidebar">
        <Link to={'/login'}><img src={mapMarkerImg} alt="App" /></Link>
        <footer>
        <Link to={'/contact/contacts/'}><button type="button">
            <FaUsers size={24} color="#FFF" />
          </button></Link>
          <Link to={'/contact/create/'}><button type="button">
          <FaUserPlus size={24} color="#FFF" />
          </button></Link>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    );
}