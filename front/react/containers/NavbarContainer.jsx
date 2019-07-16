import React from "react";
import Navbar from "../components/Navbar";
import { fetchProductsByName } from "../../store/actions/getProducts";
import { connect } from "react-redux";
import { remCart } from "../../store/actions/getCarrito";
class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(e) {
    const inputValue = e.target.value;
    this.setState({ inputValue: inputValue });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputValue) {
      fetchProductsByName(this.state.inputValue);
      this.props.history.push("/products");
    }
  }

  render() {
    return (
      <Navbar
        history={this.props.history}
        handleSearch={this.handleSearch}
        handleSubmit={this.handleSubmit}
        carrito={this.props.carrito}
        user={this.props.user}
        removeCart={this.props.removeCart}
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
  removeCart: arr => dispatch(remCart(arr))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
