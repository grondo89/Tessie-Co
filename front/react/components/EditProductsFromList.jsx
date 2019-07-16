import React from "react";
import ProductsEditionPopUpContainer from "../containers/ProductsEditionPopUpContainer";
export default props => {
  return (
    <div style={{ marginBottom: "5%" }}>
      <h2 style={{ marginLeft: "15%" }}>Products:</h2>
      <ul
        className="list-group"
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1%"
        }}
      >
        {props.products.map(product => (
          <li key={product.id} className="list-group-item">
            <div style={{ float: "right" }}>
              <i
                className="fas fa-edit"
                data-toggle="modal"
                data-target={`#modalSubscriptionForm${product.id}`}
              />
            </div>
            <div>
              <h3>Product: {product.name}</h3>
              <img
                src={product.images[0]}
                alt="This product does not have any images"
                height="50vh"
              />
            </div>

            <div style={{ float: "left" }}>
              <p>Stock: {product.stock}</p>
              <p>Price: {product.price}</p>
              {/* <p>categories: {product.categories.length&&product.categories.map(cat=>cat.name)}</p> */}
            </div>
            <ProductsEditionPopUpContainer id={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
