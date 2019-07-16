import React, { Component } from "react";
import Main from "../components/Main";
import { connect } from "react-redux";
import { remCart } from "../../store/actions/getCarrito";
import { addProduct, addProducts } from "../../store/actions/getProducts";
import { fetchLoggedUser } from "../../store/actions/logUser";
import { fetchCarrito } from "../../store/actions/getCarrito";
import { addUserOrders } from "../../store/actions/getOrder";
import Axios from "axios";

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addLoggedUser(this.props.carrito);
    !sessionStorage.getItem("product") &&
      sessionStorage.setItem("product", JSON.stringify(this.props.carrito));
    !sessionStorage.getItem("products") &&
      sessionStorage.setItem("products", JSON.stringify(this.props.products));
    !sessionStorage.getItem("selectedProduct") &&
      sessionStorage.setItem(
        "selectedProduct",
        JSON.stringify(this.props.product)
      );
    !sessionStorage.getItem("orders") &&
      sessionStorage.setItem("orders", JSON.stringify(this.props.orders));
    if (!this.props.carrito[0] && sessionStorage.getItem("product")[0])
      this.props.addOldCart(JSON.parse(sessionStorage.getItem("product")));
    if (!this.props.products[0])
      this.props.addOldProducts(JSON.parse(sessionStorage.getItem("products")));

    if (!this.props.product.name)
      this.props.addOldProduct(
        JSON.parse(sessionStorage.getItem("selectedProduct"))
      );
    if (!this.props.orders[0])
      this.props.addOldOrders(JSON.parse(sessionStorage.getItem("orders")));
  }
  componentDidUpdate() {
    sessionStorage.setItem("product", JSON.stringify(this.props.carrito));
    this.props.products[0] &&
      sessionStorage.setItem("products", JSON.stringify(this.props.products));
    this.props.product.name &&
      sessionStorage.setItem(
        "selectedProduct",
        JSON.stringify(this.props.product)
      );
    this.props.orders[0] &&
      sessionStorage.setItem("orders", JSON.stringify(this.props.orders));
  }

  render() {
    return <Main user={this.props.user} />;
  }
}

const mapStateToProps = ({ carrito, products, user, orders }) => ({
  carrito: carrito.products,
  product: products.product,
  products: products.products,
  user: user.user,
  orders: orders.userOrders
});

const mapDispatchToProps = dispatch => {
  return {
    addOldCart: product => dispatch(remCart(product)),
    addOldProduct: product => dispatch(addProduct(product)),
    addOldProducts: product => dispatch(addProducts(product)),
    addOldOrders: product => dispatch(addUserOrders(product)),
    addLoggedUser: fetchLoggedUser,
    addLoggedCarrito: fetchCarrito
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
