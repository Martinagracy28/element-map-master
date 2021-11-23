import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/HomePage';
import Launchpad from './components/Dashboard/Launchpad';
import Sales from './components/Dashboard/Sales';
import Allocation from './components/Dashboard/Allocation';
import Airdrops from './components/Dashboard/Airdrops';
import Stats from './components/Dashboard/Stats';
import Account from './components/Dashboard/Account';
import ProductDetail from './components/Dashboard/ProjectDetails';
import ProductDetailUpComing from './components/Dashboard/ProjectDetailsUpComing';
import ProductDetailOnGoing from './components/Dashboard/ProjectDetailsOnGoing';
import Login from './components/Login';
import MyProfile from './components/Dashboard/MyProfile';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
        <Route path="/product-detail-Upcoming">
          <ProductDetailUpComing />
        </Route>
        <Route path="/product-detail-Ongoing">
          <ProductDetailOnGoing />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        {/* <Route path="/airdrops">
          <Airdrops />
        </Route> */}
        <Route path="/allocation">
          <Allocation />
        </Route>
        <Route path="/sales">
          <Sales />
        </Route>
        <Route path="/launchpad">
          <Launchpad />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
