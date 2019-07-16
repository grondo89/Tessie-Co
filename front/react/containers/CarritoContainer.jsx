import React, { Component } from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import axios from "axios";
import {
  quantityUp,
  quantityDown,
  deleteSingleProduct,
  remCart
} from "../../store/actions/getCarrito";
import { updateProductStock } from "../../store/actions/getProducts";

class CarritoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerEmail: "",
      buyerAddress: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleBuyButton = this.handleBuyButton.bind(this);
    this.handleQuantityUp = this.handleQuantityUp.bind(this);
    this.handleQuantityDown = this.handleQuantityDown.bind(this);
    this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
  }

  handleAddress(address) {
    this.setState({ buyerAddress: address });
  }
  handleEmail(email) {
    this.setState({ buyerEmail: email });
  }
  handleQuantityUp(id) {
    this.props.quantityUp(id);
  }
  handleQuantityDown(id) {
    this.props.quantityDown(id);
  }
  handleDeleteProduct(id) {
    sessionStorage.setItem(
      "product",
      JSON.stringify(
        JSON.parse(sessionStorage.getItem("product")).filter(
          product => product.id !== id
        )
      )
    );
    if (this.props.user.id >= 0) {
      axios.post(`/api/carrito/delete/${this.props.user.id}`, {
        deletedProduct: id
      });
    }
    this.props.deleteSingleProduct(id);
  }

  handleBuyButton(carrito) {
    axios
      .post("/api/order", {
        data: {
          email: this.state.buyerEmail,
          address: this.state.buyerAddress,
          userId: this.props.user.id,
          carrito: this.props.carrito
        }
      })
      .then(res => {
        if (this.props.user.id >= 0)
          axios.post(`/api/carrito/deleteall/${this.props.user.id}`);
        if (res.data.msg === "success") {
          this.props.updateStock(carrito);
          alert("Order created.");
          this.props.removeCart([]);
          this.props.history.push("/profile");
        } else if (res.data.msg === "fail") {
          alert("Order failed.");
        }
      });
  }

  render() {
    return (
      <Carrito
        carrito={this.props.carrito}
        handleBuyButton={this.handleBuyButton}
        handleAddress={this.handleAddress}
        handleEmail={this.handleEmail}
        handleQuantityUp={this.handleQuantityUp}
        handleQuantityDown={this.handleQuantityDown}
        handleDeleteProduct={this.handleDeleteProduct}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = ({ carrito, user }) => {
  return {
    carrito: carrito.products,
    user: user.user
  };
};

const mapDispatchToProps = dispatch => ({
  quantityUp: id => dispatch(quantityUp(id)),
  quantityDown: id => dispatch(quantityDown(id)),
  deleteSingleProduct: id => dispatch(deleteSingleProduct(id)),
  removeCart: arr => dispatch(remCart(arr)),
  updateStock: updateProductStock
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer);
