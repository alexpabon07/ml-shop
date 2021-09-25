import React from "react";
import Product from "./Product";

export default class ListProducts extends React.Component {
  render() {
    return (
      <div className="list-product">
        <p>List Products</p>
        <Product />
      </div>
    );
  }
}
