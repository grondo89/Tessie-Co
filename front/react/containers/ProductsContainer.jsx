import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import { addProduct } from "../../store/actions/getProducts";
class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(item) {
    this.props.fetchProduct(item);
  }

  render() {
    return (
      <Products
        products={this.props.products}
        handleClick={this.handleClick}
        history={this.props.history}
      />
    );
  }
}
const mapStateToProps = ({ products }) => ({
  products: products.products
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: item => dispatch(addProduct(item))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
