import React, { Component } from "react";
import LogIn from "../components/LogIn";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/logUser";
import axios from "axios";

class LogInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.type]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.logUser(this.state, this.props.history, this.props.carrito);
  }

  render() {
    return (
      <LogIn
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.user.user,
  carrito: state.carrito.products
});
const mapDispatchToProps = dispatch => {
  return {
    logUser: fetchUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInContainer);
