import React from "react";
import { withRouter } from "react-router";
import image from "./../assets/audifonos.png"

class DetailProduct extends React.Component {
  currentId = '';
  constructor(props) {
    super(props);
    this.state = ({
      product: {},
      productdesc: ''
    });
  }

  render() {
    const { searchProductById, searchResumeProductById } = this.props;
    var currentContext = this;

    if (this.currentId !== this.props.match.params.id) {
      this.currentId = this.props.match.params.id;

      searchProductById(currentContext.currentId, function (product) {
        currentContext.setState({ product: product });
        searchResumeProductById(currentContext.currentId, function (productdesc) {
          currentContext.setState({ productdesc: productdesc });
        });
      });
    }
    return (
      <div className="detail-product">
        <div className="row">
          <div className="l-col-6 m-col-6 s-col-12">
            <img src={image} className="img-detail-product" alt="imagen producto mercado libre" />
          </div>
          <div className="l-col-4 m-col-6 s-col-12 margin-top-large">
            <div className="font-size-14 margin-bottom-small">{this.state.product.available_quantity}</div>
            <div className="font-size-24 margin-bottom-large">{this.state.product.title}</div>
            <div className="font-size-46 margin-bottom-large">$ {this.state.product.price}</div>
            <button type="submit" className="font-size-16">Comprar</button>
          </div>
        </div>
        <div className="row margin-left-large margin-bottom-large">
          <div className="l-col-12 m-col-12 s-col-12 font-size-28">Descripción del producto</div>
        </div>
        <div className="row margin-bottom-large">
          <div className="l-col-11 m-col-12 s-col-12 font-size-16">{this.state.productdesc}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailProduct);