import React from "react";
import image from "./../assets/audifonos.png"

export default class DetailProduct extends React.Component {
  render() {
    return (
      <div className="detail-product">
        <p>Detail</p>
        <div className="row">
          <div className="l-col-6 m-col-6 s-col-12">
            <img src={image} className="img-detail-product" alt="imagen producto mercado libre" />
          </div>
          <div className="l-col-4 m-col-6 s-col-12 margin-top-large">
            <div className="font-size-14 margin-bottom-small">Cantidad</div>
            <div className="font-size-24 margin-bottom-large">Titulo</div>
            <div className="font-size-46 margin-bottom-large">Precio</div>
            <button type="submit" className="font-size-16">Comprar</button>
          </div>
        </div>
        <div className="row margin-left-large margin-bottom-large">
          <div className="l-col-12 m-col-12 s-col-12 font-size-28">Descripcion</div>
        </div>
        <div className="row margin-left-large margin-bottom-large">
          <div className="l-col-12 m-col-12 s-col-12 font-size-16">Resumen</div>
        </div>
      </div>
    );
  }
}
