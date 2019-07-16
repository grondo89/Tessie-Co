import React, { Component } from "react";
import { connect } from "react-redux";
import { remove } from "../../store/actions/getCategories";
import EditCategories from "../components/EditCategories";

class EditCategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(cat) {
    this.props.removeCat(cat);
  }
  render() {
    return <EditCategories delete={this.delete} cats={this.props.cats} />;
  }
}
const mapStateToProps = state => ({
  cats: state.categories.cats
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeCat: cat => dispatch(remove(cat))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategoriesContainer);
