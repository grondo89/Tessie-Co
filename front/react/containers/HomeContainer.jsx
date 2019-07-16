import React from "react";
import Home from "../components/Home";
import { connect } from "react-redux";
import { filterProductsByCat } from "../../store/actions/getProducts";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(name) {
    this.props.fetchPbyCat(name);
    this.props.history.push(`/category/${name}`);
  }
  render() {
    return (
      <div>
        <Home products={this.props.products} onClick={this.onClick} />
      </div>
    );
  }
}

const mapStateToProps = ({ carrito, user }) => {
  return {
    user: user.user,
    carrito: carrito.products
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPbyCat: name => dispatch(filterProductsByCat(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
