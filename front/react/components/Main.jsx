import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import NavbarContainer from "../containers/NavbarContainer";
import ProductsContainer from "../containers/ProductsContainer";
import CarritoContainer from "../containers/CarritoContainer";
import AddProductsContainer from "../containers/AddProductsContainer";
import OrderContainer from "../containers/OrderContainer";
import ListOfUsersContainer from "../containers/ListOfUsersContainer";
import Admin from "./Admin";
import ProfileUserContainer from "../containers/ProfileUserContainer";
import EditCategoriesContainer from "../containers/EditCategoriesContainer";
import EditProductsFromListContainer from "../containers/EditProductsFromListContainer";

export default ({ user }) => {
  return (
    <div>
      <Route component={NavbarContainer} />
      <Switch>
        <Route
          exact
          path="/products/:name"
          component={SingleProductContainer}
        />
        <Route path="/products" component={ProductsContainer} />
        <Route exact path="/category/:name" component={ProductsContainer} />
        <Route path="/carrito" component={CarritoContainer} />
        <Route path="/profile" component={ProfileUserContainer} />
        <Route exact path="/" component={HomeContainer} />
        {user.admin === true && (
          <React.Fragment>
            <Route path="/admin" component={Admin} />
            <Route
              path="/edit/categories"
              component={EditCategoriesContainer}
            />
            <Route path="/users" component={ListOfUsersContainer} />
            <Route
              path="/edit/products"
              component={EditProductsFromListContainer}
            />
            <Route path="/add" component={AddProductsContainer} />
            <Route path="/order" component={OrderContainer} />

            <Route
              exact
              path="/products/:name"
              component={SingleProductContainer}
            />
          </React.Fragment>
        )}
      </Switch>
    </div>
  );
};
