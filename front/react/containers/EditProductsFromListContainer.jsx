import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/getProducts";
import EditProductsFromList from "../components/EditProductsFromList";

class EditProductsFromListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.giveMeAllProducts();
  }
  render() {
    return <EditProductsFromList products={this.props.products} />;
  }
}
const mapStateToProps = state => ({
  products: state.products.products
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    giveMeAllProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductsFromListContainer);
