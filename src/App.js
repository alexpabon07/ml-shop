import React from 'react';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
import DetailProduct from './components/DetailProduct';
import ListProducts from './components/ListProducts';
import NavBar from './components/NavBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      resultSearch: [],
      resultSearchById: {},
      resumeSearchById: ''
    }
  }

  searchProducts = async (query, functionCallback) => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLA/search?q=' + query;
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resultSearch: data.results }, () => {
          if (typeof (functionCallback) != 'undefined') {
            functionCallback(this.state.resultSearch);
          }
        }
      )
    });
  }

  searchProductById = async (id, functionCallback) => {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resultSearchById: data }, () => {
          if (typeof (functionCallback) != 'undefined') {
            functionCallback(this.state.resultSearchById);
          }
        }
      )
    });
  }

  searchResumeProductById = async (id, functionCallback) => {
    const endpoint = `https://api.mercadolibre.com/items/${id}/description`;
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resumeSearchById: data.plain_text }, () => {
          if (typeof (functionCallback) != 'undefined') {
            functionCallback(this.state.resumeSearchById);
          }
        }
      )
    });
  }

  render() {
    return (
      <div className="container">
        <NavBar searchProducts={this.searchProducts} />
        <Switch>
          <Route exact path="/items" >
            <ListProducts searchProducts={this.searchProducts} searchProductById={this.searchProductById} searchResumeProductById={this.searchResumeProductById} />
          </Route>
          <Route exact path="/items/:id">
            <DetailProduct searchProductById={this.searchProductById} searchResumeProductById={this.searchResumeProductById} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
