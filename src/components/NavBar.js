import React from "react";
import logo from './../assets/Logo_ML@2x.png.png';
import search from './../assets/ic_Search@2x.png.png';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="row center-content align-item-center">
          <div className="col-1 text-align-center">
            <img src={logo} className="img-logo-navbar" id="img-logo-ml" alt="logo mercado libre" />
          </div>
          <div className="col-9">
            <div className="row center-content">
              <input type="text" className="" placeholder="Nunca dejes de buscar" />
              <button type="submit"><img src={search} className="button-search-navbar" id="img-search" alt="Botón de busqueda" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
