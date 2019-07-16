import React from "react";

export default props => {
  const normal = props.users ? props.users.filter(user => !user.admin) : [];
  const admins = props.users ? props.users.filter(user => user.admin) : [];
  return (
    <div style={{ marginBottom: "5%" }}>
      <ul
        className="list-group"
        style={{ float: "left", marginLeft: "20%", marginRight: "-60%" }}
      >
        <h2>Normal Users</h2>

        {normal.map(user => (
          <li key={user.id} className="list-group-item">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button
              type="button"
              className="btn btn-danger"
              style={{ float: "right" }}
              onClick={() => props.delete(user)}
            >
              Delete User
            </button>
            <button
              type="button"
              className="btn btn-light"
              style={{ float: "right" }}
              onClick={() => props.update(user)}
            >
              Make admin
            </button>
          </li>
        ))}
      </ul>

      <ul className="list-group" style={{ float: "left", marginLeft: "50%" }}>
        <h2>Admin Users</h2>
        {admins.map(user => (
          <li key={user.id} className="list-group-item">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button
              type="button"
              className="btn btn-danger"
              style={{ float: "right" }}
              onClick={() => props.delete(user)}
            >
              Delete User
            </button>
            <button
              type="button"
              className="btn btn-light"
              style={{ float: "right" }}
              onClick={() => props.update(user)}
            >
              Remove permissions
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
