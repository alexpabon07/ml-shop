import React from "react";
import Product from "./Product";

export default class ListProducts extends React.Component {
  render() {
    const products = this.props.resultSearch;
    return (
      <div className="list-product margin-top-small">
        <div>
          {
            products && products.map(product => <Product key={product.id} product={product} />)
          }
        </div>
      </div>
    );
  }
}
