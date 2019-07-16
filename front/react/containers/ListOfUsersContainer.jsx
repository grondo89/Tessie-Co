import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  removeUsers,
  updateUser
} from "../../store/actions/getUsers";
import ListOfUsers from "../components/ListOfUsers";

class ListOfUsersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    this.props.giveMeAllUsers();
  }
  delete(user) {
    this.props.removeUser(user);
  }
  update(user) {
    this.props.updateUser(user);
  }
  render() {
    return (
      <div>
        <ListOfUsers
          users={this.props.users}
          delete={this.delete}
          update={this.update}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.all
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    giveMeAllUsers: name => dispatch(fetchUsers(name)),
    removeUser: user => dispatch(removeUsers(user)),
    updateUser: user => dispatch(updateUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfUsersContainer);
