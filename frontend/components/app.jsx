import React from "react";
import SignupContainer from "./session/signup_container";
import { Route } from "react-router-dom";
import HomeContainer from '../components/home/home_container'
import DashboardContainer from '../components/dashboard/dashboard_container';
import LoginContainer from '../components/session/login_container';
import AssetShowContainer from './assets/asset_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

// login before signup
export default () => (
  <div>
    <Route exact path="/stocks/:ticker" component={AssetShowContainer} />
    {/* <Route exact path="/us/en" component={Home} /> */}
    <Route exact path="/us/en" component={HomeContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute exact path="/" component={DashboardContainer} />
    {/* <ProtectedRoute exact path="/dashboard" component={DashboardContainer} /> */}
    {/* <Route exact path="/news/:ticker" component={AssetShowContainer} /> */}
    
  </div>
);
