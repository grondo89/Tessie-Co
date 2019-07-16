import React from "react";
import AddCategoryContainer from "../containers/AddCategoryContainer";
export default props => {
  return (
    <div style={{ marginBottom: "5%" }}>
      <ul
        className="list-group"
        style={{ marginLeft: "15%", marginRight: "15%" }}
      >
        <h2>Cateories</h2>
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#modalSubscriptionForm"
          style={{ float: "right" }}
        >
          Add Category
        </button>

        {props.cats.map(category => (
          <li key={category.id} className="list-group-item">
            <h3>Category: {category.name}</h3>
            <button
              type="button"
              className="btn btn-danger"
              style={{ float: "right" }}
              onClick={() => props.delete(category)}
            >
              Delete category
            </button>
          </li>
        ))}
      </ul>
      <AddCategoryContainer />
    </div>
  );
};
