import React from "react";

const square = {
  background: "white"
};

const emptyCard = {
  textAlign: "center",
  fontSize: "32px"
};
const button = {
  margin: "auto",
  display: "block",
  color: "#0C4368",
  float: "right"
};

const rating = {
  marginTop: "1%"
};

export default props => {
  let i = 0;
  let ratingSum;
  if (props.rating && props.rating.length > 0) {
    ratingSum = props.rating.reduce(function(acumulador, siguienteValor) {
      return acumulador + siguienteValor;
    }, 0);
  }

  return (
    <div className="container">
      {props.user.id > 0 && props.userBought ? (
        <div>
          <form
            onSubmit={e => {
              props.handleSubmitChange(e);
              document.querySelector("#exampleInputEmail1").value = "";
            }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text">Review</span>
              <input
                onChange={e => props.handleReviewChange(e)}
                className="col-xs-12 form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Escribi tu review..."
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary" style={button}>
              SUBMIT
            </button>
          </form>
          <div className="btn-group">
            <button
              onChange={e => props.handleRatingChange(e)}
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={button}
            >
              Please add your rating here!
            </button>
            <div className="dropdown-menu">
              <li
                onClick={e => props.handleRatingChange(e)}
                className="dropdown-item"
                value="1"
              >
                1
              </li>
              <li
                onClick={e => props.handleRatingChange(e)}
                className="dropdown-item"
                value="2"
              >
                2
              </li>
              <li
                onClick={e => props.handleRatingChange(e)}
                className="dropdown-item"
                value="3"
              >
                3
              </li>
              <li
                onClick={e => props.handleRatingChange(e)}
                className="dropdown-item"
                value="4"
              >
                4
              </li>
              <li
                onClick={e => props.handleRatingChange(e)}
                className="dropdown-item"
                value="5"
              >
                5
              </li>
            </div>
          </div>
          <br />
        </div>
      ) : (
        <h3>
          {!props.userBought && props.user.id > 0
            ? "Compra el producto para dejar una review"
            : "Logueate para dejar una review"}
        </h3>
      )}
      <br />
      {props.rating && props.rating.length > 0 ? (
        <div style={rating} className="alert alert-success" role="alert">
          RATING : {Math.round(ratingSum / props.rating.length)}
        </div>
      ) : null}
      {props.reviews && props.reviews.length > 0 ? (
        <div className="card">
          <div className="card-header">REVIEWS</div>
          <blockquote className="blockquote mb-0">
            {props.reviews.map(review => (
              <div className="card-body" key={i++}>
                <h4 style={square}>{review}</h4>
              </div>
            ))}
          </blockquote>
        </div>
      ) : (
        <div style={emptyCard} className="card">
          <div className="card-body">
            <h3>
              No hay reviews disponibles. Sé el primero en comprar y comentar!
            </h3>
          </div>
        </div>
      )}
      <br />
      <br />
      <footer>
        <p className="float-right">
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
