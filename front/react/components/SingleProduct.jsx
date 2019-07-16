import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Icon } from "semantic-ui-react";

const style = {
  iconStyle: {
    textAlign: "center"
  },
  arrowcolor: {
    filter: "invert(100%)"
  }
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  icon: {
    height: "100vh"
  }
}));

export default props => {
  const classes = useStyles();
  var i = -1;

  return (
    <div className="container" style={{ marginTop: "3%" }}>
      {props.product.name && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ height: "55vh" }}
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            {props.product.images.map(img => {
              return (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={props.product.images.indexOf(img)}
                  className={
                    !props.product.images.indexOf(img) ? "active" : "nothing"
                  }
                  key={img}
                />
              );
            })}
          </ol>
          <div className="carousel-inner">
            {props.product.images.map(img => (
              <div
                key={img}
                className={
                  !props.product.images.indexOf(img)
                    ? "carousel-item active"
                    : "carousel-item"
                }
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt="..."
                  style={{
                    height: "55vh",
                    objectFit: "contain"
                  }}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
            style={style.arrowcolor}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
            style={style.arrowcolor}
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      )}

      {props.product.name && (
        <div>
          <br />
          <h2 className="text-center">{props.product.name}</h2>
          <p className="text-center text-wrap">{props.product.description}</p>
          <div style={style.iconStyle}>
            <h4>${props.product.price}</h4>
            <Button icon onClick={() => props.setCart(props.product)}>
              <Icon name="add to cart" size="large" />
            </Button>
            <Button icon onClick={() => props.remCart(props.product)}>
              <Icon name="trash alternate" size="large" />
            </Button>
          </div>
        </div>
      )}
      <br />
    </div>
  );
};
