import React from "react";

const style = {
  title: {
    textAlign: "center",
    fontSize: "56px"
  }
};

export default ({ order, handleSelection }) => {
  return (
    <div className="container">
      <h1 style={style.title}>Lista de Ordenes</h1>
      {order &&
        order.map(order => (
          <div className="card container alert alert-secondary" key={order.id}>
            <div className="card-body">
              <h5 className="card-title" />
              <h6 className="card-subtitle mb-2 text-muted">
                {order.products &&
                  order.products.map(name => {
                    return (
                      <div key={name.id}>
                        <h3>{name.name}</h3>
                        <p>{name.price}</p>
                      </div>
                    );
                  })}
              </h6>
              <p className="card-text">{order.status}</p>
              <p className="card-text">{order.createdAt}</p>
              <select
                className="custom-select custom-select-sm"
                style={{ width: "15%" }}
                onChange={e => handleSelection(e, order.id)}
              >
                <option defaultValue>Select order status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="canceled">Canceled</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};
