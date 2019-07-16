import React from "react";
import Register from "../components/Register";
import Axios from "axios";
import { connect } from "react-redux";
import { fetchUser } from "../../store/actions/logUser";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    return Axios.post("/api/users/register", {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    }).then(user =>
      this.props.logUser({
        email: user.data.email,
        password: this.state.password
      })
    );
  }
  render() {
    return (
      <Register
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logUser: fetchUser
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterContainer);
