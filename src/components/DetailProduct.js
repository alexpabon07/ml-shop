import React from "react";
import image from "./../assets/audifonos.png"

export default class DetailProduct extends React.Component {
  render() {
    const { available_quantity, title, price } = this.props.resultSearchById;
    const resume = this.props.resumeSearchById;
    return (
      <div className="detail-product">
        <div className="row">
          <div className="l-col-6 m-col-6 s-col-12">
            <img src={image} className="img-detail-product" alt="imagen producto mercado libre" />
          </div>
          <div className="l-col-4 m-col-6 s-col-12 margin-top-large">
            <div className="font-size-14 margin-bottom-small">{available_quantity}</div>
            <div className="font-size-24 margin-bottom-large">{title}</div>
            <div className="font-size-46 margin-bottom-large">$ {price}</div>
            <button type="submit" className="font-size-16">Comprar</button>
          </div>
        </div>
        <div className="row margin-left-large margin-bottom-large">
          <div className="l-col-12 m-col-12 s-col-12 font-size-28">Descripción del producto</div>
        </div>
        <div className="row margin-left-large margin-bottom-large">
          <div className="l-col-12 m-col-12 s-col-12 font-size-16">{resume}</div>
        </div>
      </div>
    );
  }
}
