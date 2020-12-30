import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Productpage from "./components/ProductPage/Product";
import ProductItem from "./components/ProductPage/ProductItem";
import SearchProductPage from "./components/Search/SearchProductPage";
import ShoppingCart from "./components/Cart/ShoppingCart";
import SingleProductPage from "./components/ProductPage/SingleProduct";
import CreateAProductPage from "./components/ProductPage/CreateAProductPage";
import CreateFormPage from "./components/ProductPage/CreateForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/product/:id">
            <SingleProductPage />
          </Route>
          <Route path="/search">
            <SearchProductPage />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/new-product">
            <CreateAProductPage />
          </Route>
          <Route path="/add-a-product">
            <CreateFormPage />
          </Route>
          <Route exact path="/">
            <Productpage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
