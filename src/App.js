import React,{Component} from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import ProductListing from "./Containers/ProductListing";
import Header from  "./Containers/Header/Header";
import "./App.css";
import {ProductDetails }from "./Containers/ProductDetails";
import ProductDetails from "./Containers/ProductDetails/ProductDetails";
// import { Component } from "react";


function App() {
  return (
    <Router>
    <div className="App">
      
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      
    </div>
    </Router>
  );
}
export default App;
