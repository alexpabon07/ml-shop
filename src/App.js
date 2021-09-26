import React from 'react';
import DetailProduct from './components/DetailProduct';
import ListProducts from './components/ListProducts';
import NavBar from './components/NavBar';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      search: false,
      resultSearch: [],
      resultSearchById: {},
      resumeSearchById: ''
    }
  }

  componentDidMount() {
    const query = 'diadema gamer';
    const idQuery = 'MLA909265824';
    this.searchProducts(query);
    this.searchProductById(idQuery);
    this.searchResumeProductById(idQuery);
  }

  searchProducts = async (query) => {
    const endpoint = `https://api.mercadolibre.com/sites/MLA/search?q=​${query}`;
    console.log(endpoint);
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resultSearch: data.results }
      )
    });
  }

  searchProductById = async (id) => {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    console.log(endpoint);
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resultSearchById: data }
      )
    });
  }

  searchResumeProductById = async (id) => {
    const endpoint = `https://api.mercadolibre.com/items/${id}/description`;
    console.log(endpoint);
    const headers = { 'Content-Type': 'application/json' };
    const method = 'GET';
    await fetch(endpoint, { headers, method }).then(
      response => response.json()
    ).then(data => {
      this.setState(
        { resumeSearchById: data.plain_text }
      )
    });
  }

  render() {
    const { resultSearch, resultSearchById, resumeSearchById } = this.state;
    return (
      <div className="container">
        <NavBar searchProducts={this.searchProducts} />
        <ListProducts resultSearch={resultSearch} />
        <DetailProduct resultSearchById={resultSearchById} resumeSearchById={resumeSearchById} />
      </div>
    );
  }
}

export default App;
