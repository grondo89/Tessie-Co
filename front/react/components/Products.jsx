import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-around",
    paddingLeft: "7%"
  },
  gridList: {
    width: "100vw",
    height: "100vh"
  }
}));

const style = {
  products: {
    display: "block",
    margin: "auto"
  }
};

export default props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList}>
        {props.products.length >= 1 ? (
          props.products.map(
            prod =>
              prod.stock > 0 && (
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    margin: "2% 2% 2% 2%"
                  }}
                  key={prod.id}
                >
                  <img
                    src={prod.images[0]}
                    className="card-img-top"
                    style={{
                      height: "60%",
                      objectFit: "contain"
                    }}
                    alt="no images"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">
                      Cantidad disponible: {prod.stock} precio: ${prod.price}{" "}
                    </p>
                    <Link
                      to={`/products/${prod.name}`}
                      className="btn btn-primary"
                      onClick={() => {
                        props.handleClick(prod);
                      }}
                    >
                      Check Product
                    </Link>
                  </div>
                </div>
              )
          )
        ) : (
          <div style={style.products}>
            <div className="alert alert-secondary" role="alert">
              <h2 className="alert-heading">
                Oops! No han habido coincidencias con tu búsqueda...{" "}
              </h2>
              <h3>
                <Link to="/">Inténtalo de nuevo!</Link>
              </h3>
            </div>
          </div>
        )}
      </GridList>
    </div>
  );
};
