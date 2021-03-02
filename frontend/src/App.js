import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Productpage from "./components/ProductPage/Product";
import SearchProductPage from "./components/Search/SearchProductPage";
import ShoppingCart from "./components/Cart/ShoppingCart";
import SingleProductPage from "./components/ProductPage/SingleProduct";
import CreateFormPage from "./components/ProductPage/CreateForm";
import SomethingOld from "./components/Category/SomethingOld";
import SomethingNew from "./components/Category/SomethingNew";
import SomethingBorrowed from "./components/Category/SomethingBorrowed";

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
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/register">
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
          <Route path="/add-a-product">
            <CreateFormPage />
          </Route>
          <Route exact path="/">
            <Productpage />
          </Route>
          <Route path="/something-old">
            <SomethingOld />
          </Route>
          <Route path="/something-new">
            <SomethingNew />
          </Route>
          <Route path="/something-borrowed">
            <SomethingBorrowed />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
