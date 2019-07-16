import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../store/actions/getCategories";
import { filterProductsByCat } from "../../store/actions/getProducts";
import SecondNavbar from "../components/SecondNavbar";

class SecondNavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.addCats();
  }
  onClick(name, e) {
    this.props.fetchPbyCat(name);
    document.querySelectorAll(".nav-link").forEach(elem => {
      elem.style.backgroundColor = "";
    });
    e.target.style.backgroundColor = "white";
    this.props.history.push(`/category/${name}`);
  }

  render() {
    return <SecondNavbar cats={this.props.cats} onClick={this.onClick} />;
  }
}
const mapStateToProps = state => ({
  cats: state.categories.cats
});
const mapDispatchToProps = dispatch => {
  return {
    addCats: () => dispatch(fetchCategories()),
    fetchPbyCat: name => dispatch(filterProductsByCat(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondNavbarContainer);
