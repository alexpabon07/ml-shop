import React from "react";
import image from "./../assets/audifonos.png"

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <p>Product</p>
        <div className="row margin-top-small">
          <div className="col-3 margin-small text-align-center">
            <img src={image} className="img-product" id="img-product" alt="imagen producto mercado libre" />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-8 font-size-16">Precio</div>
              <div className="col-4 font-size-12">Ciudad</div>
            </div>
            <div className="row margin-top-large">
              <div className="col-12 font-size-18">Titulo</div>
            </div>
            <div className="row">
              <div className="col-12 font-size-18">Estado</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
