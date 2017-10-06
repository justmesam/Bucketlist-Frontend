import React  from "react";
import {Route, Switch,
  BrowserRouter as Router,
  } from "react-router-dom";
import Authentication from "./containers/Auth";
import BucketContainer from "./containers/bucketlist";
import ItemContainer from "./containers/Items";
import Dashboard from "./containers/dashboard"
import Home from "./containers/App";
import NotFound from "./components/layout/NotFound";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/dashboard" component={Dashboard} />
    <Route  path="/items" component={ItemContainer} />
    <Route  path="/bucketlists" component={BucketContainer} />
    <Route  path="/auth" component={Authentication} />
    <Route  path="*" component={NotFound} />
  </Switch>
)

export default Routes
