import React from "react";
import { withRouter } from 'react-router-dom'
import logo from './../assets/Logo_ML@2x.png.png';
import search from './../assets/ic_Search@2x.png.png';

class NavBar extends React.Component {

  render() {
    const { history } = this.props;
    const querySearchRef = React.createRef();

    const getQuerySearch = () => {
      const query = querySearchRef.current.value;
      history.push(`/items?search=${query}`);
    }
    return (
      <div className="navbar">
        <div className="row center-content align-item-center">
          <div className="l-col-1 m-col-2 s-col-12 text-align-center">
            <img src={logo} className="img-logo-navbar" id="img-logo-ml" alt="logo mercado libre" />
          </div>
          <div className="l-col-9 m-col-8 s-col-10">
            <div className="row wrap-nowrap">
              <input ref={querySearchRef} type="text" className="" placeholder="Nunca dejes de buscar" />
              <button onClick={getQuerySearch} type="button"><img src={search} className="button-search-navbar" id="img-search" alt="Botón de busqueda" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);