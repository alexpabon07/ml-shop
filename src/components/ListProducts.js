import React from "react";
import { withRouter } from "react-router";
import Product from "./Product";

class ListProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      products: []
    });
  }
  searchProducts = null;
  currentQuery = '';

  render() {
    let searchProductById = this.props.searchProductById;
    let searchResumeProductById = this.props.searchResumeProductById;
    let searchProducts = this.props.searchProducts;
    var currentContext = this;
    var paramQuery = this.props.location.search.split('=')[1];

    if (this.currentQuery !== paramQuery) {
      this.currentQuery = paramQuery;
      searchProducts(paramQuery, function (results) {
        if (currentContext.products !== results) {
          currentContext.setState({ products: results });
        }
      })
    }
    return (
      <div className="list-product margin-top-small">
        <div>
          {
            this.state.products && this.state.products.map(product => <Product key={product.id} product={product} searchProductById={searchProductById} searchResumeProductById={searchResumeProductById} />)
          }
        </div>
      </div>
    );
  }
}

export default withRouter(ListProducts)