import React from "react";
import Order from "../components/Order";
import { fetchOrders, updateOrder } from "../../store/actions/getOrder";
import { connect } from "react-redux";

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
  }
  componentDidMount() {
    this.props.addOrders();
  }

  handleSelection(e, id) {
    var obj = {
      status: e.target.value,
      id: id
    };
    this.props.updateOrder(obj);
  }
  render() {
    return (
      <Order order={this.props.orders} handleSelection={this.handleSelection} />
    );
  }
}
const mapStateToProps = ({ orders }) => ({
  orders: orders.orders
});
const mapDispatchToProps = dispatch => {
  return {
    addOrders: () => dispatch(fetchOrders()),
    updateOrder: obj => dispatch(updateOrder(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderContainer);
