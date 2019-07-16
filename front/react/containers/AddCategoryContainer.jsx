import React, { Component } from "react";
import { connect } from "react-redux";
import { create } from "../../store/actions/getCategories";
import AddCategory from "../components/AddCategory";

class AddCategoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ category: e.target.value });
  }
  handleSubmit(e) {
    this.props.addCat(this.state);
  }
  componentDidUpdate() {}
  render() {
    return (
      <AddCategory
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCat: name => dispatch(create(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCategoryContainer);
