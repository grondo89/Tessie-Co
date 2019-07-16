import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import ProfileUser from "../components/ProfileUser";
import { fetchUserOrders } from "../../store/actions/getOrder";

class ProfileUserContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.user.name && this.props.fetchOrders(this.props.user.id);
  }
  render() {
    return <ProfileUser user={this.props.user} order={this.props.order} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    order: state.orders.userOrders
  };
};

const mapDisparchToProps = dispatch => {
  return {
    fetchOrders: id => dispatch(fetchUserOrders(id))
  };
};

export default connect(
  mapStateToProps,
  mapDisparchToProps
)(ProfileUserContainer);
