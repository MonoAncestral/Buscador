import React from "react";
import './styles.scss';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';

const Header:React.FC=()=>{
    return (
    <div className="HeaderFather">
    <div className="HeaderContent">
      <div><img className="Logo" src={logo} alt="logo Mercado Libre"></img>
    <input placeholder="Nunca dejes de buscar" type="text" className="BrowserInput"/>
    <button>
      <img src={search} alt='lupa'></img>
    </button></div>
    
    </div>
  </div>)

}

export default Header;