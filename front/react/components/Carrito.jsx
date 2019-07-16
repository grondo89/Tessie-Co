import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const cardStyle = {
  height: "5%",
  width: "85%",
  padding: "4%",
  margin: "auto"
};

const buttonStyle = {
  display: "inline",
  margin: "auto"
};

const inputStyle = {
  width: "60%",
  margin: "auto",
  padding: "1%"
};

const buyButton = {
  display: "block",
  margin: "auto"
};

export default function CenteredGrid(props) {
  const classes = useStyles();
  const handleEmail = e => {
    props.handleEmail(e.target.value);
  };

  const handleAddress = e => {
    props.handleAddress(e.target.value);
  };

  return (
    <div className="container">
      <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>WELCOME TO CARRITO</Paper>
        </Grid>
      </div>
      {props.carrito.length >= 1 ? (
        <div>
          {" "}
          {props.carrito.map(product => (
            <div className="card mb-3" style={cardStyle} key={product.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={product.images[0]}
                    className="card-img"
                    style={{ objectFit: "contain" }}
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text" />
                    <h3 className={"card-title"}>${product.price}</h3>
                    <Grid item xs={1} style={buttonStyle}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => props.handleQuantityUp(product.id)}
                      >
                        <AddIcon className={classes.rightIcon} />
                      </Button>
                    </Grid>
                    <Grid item xs={1} style={buttonStyle}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => props.handleQuantityDown(product.id)}
                      >
                        <RemoveIcon className={classes.rightIcon} />
                      </Button>
                    </Grid>
                    <Grid item xs={1} style={buttonStyle}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => props.handleDeleteProduct(product.id)}
                      >
                        <DeleteIcon className={classes.rightIcon} />
                      </Button>
                    </Grid>
                    <div>
                      Cantidad: {product.quantity ? product.quantity : 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="input-group mb-3" style={inputStyle}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Address:
              </span>
            </div>
            <input
              type="text"
              required
              placeholder="Calle siempreviva 742"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleAddress}
            />
          </div>
          <div className="input-group mb-3" style={inputStyle}>
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Email:
              </span>
            </div>
            <input
              type="email"
              required
              placeholder="example@gmail.com"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleEmail}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={buyButton}
            onClick={() => props.handleBuyButton(props.carrito)}
          >
            Buy
          </button>
        </div>
      ) : (
        // <div className="text-center"> <h3>"No hay productos en el carrito..."</h3> </div>
        <div className={classes.root}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Link to="/">
                No hay productos en el carrito aún, realizá tu primera compra!
              </Link>
            </Paper>
          </Grid>
        </div>
      )}
    </div>
  );
}
