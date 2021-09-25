import React from "react";
import image from "./../assets/audifonos.png"

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Product</p>
        <div className="row margin-top-small">
          <div className="l-col-3 m-col-3 s-col-12 margin-small text-align-center">
            <img src={image} className="img-product" id="img-product" alt="imagen producto mercado libre" />
          </div>
          <div className="l-col-8 m-col-8 s-col-12">
            <div className="row">
              <div className="l-col-8 m-col-7 s-col-7 font-size-24">Precio</div>
              <div className="l-col-4 m-col-3 s-col-4 font-size-12">Ciudad</div>
            </div>
            <div className="row margin-top-large">
              <div className="l-col-12 m-col-12 s-col-12 font-size-18">Titulo</div>
            </div>
            <div className="row">
              <div className="l-col-12 m-col-12 s-col-12 font-size-18">Estado</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
