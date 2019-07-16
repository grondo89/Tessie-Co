import React from "react";

const style = {
  div: {
    width: "45%",
    margin: "auto",
    display: "block"
  },
  text: {
    textAlign: "center",
    fontSize: "18px"
  }
};

export default ({ user, order }) => {
  return (
    <div className="container" key={order}>
      <br />
      {user ? (
        <div>
          <div className="card" style={style.div}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>Name:{user.name} </h3>
              </li>
              <li className="list-group-item">
                <h3>LastName:{user.lastname} </h3>
              </li>
              <li className="list-group-item">
                <h3>Email:{user.email} </h3>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="card" style={style.div}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3> No hay informacion que mostrar!! </h3>
              </li>
              <li className="list-group-item">
                <h3>No hay informacion que mostrar!!</h3>
              </li>
              <li className="list-group-item">
                <h3>No hay informacion que mostrar!!</h3>
              </li>
            </ul>
          </div>
        </div>
      )}
      <br />
      <br />

      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0" style={style.text}>
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <h3>Historial de Ordenes</h3>
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            {order &&
              order.map(order => {
                return (
                  <div className="card-body" key={order.id}>
                    <h3>Direccion: {order.address}</h3>
                    <p className="mb-0">Estado de tu orden: {order.status}</p>

                    {order.products &&
                      order.products.map((product, index) => (
                        <div className="card" key={index}>
                          <div className="card-body">
                            <p className="mb-0">Name: {product.name}</p>
                            <p className="mb-0">Precio: {product.price}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <footer>
        <p className="float-right" style={style.text2}>
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2019 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};
