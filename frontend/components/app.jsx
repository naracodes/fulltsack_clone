import React from "react";
import SignupContainer from "./session/signup_container";
import { Route } from "react-router-dom";
import NavBarContainer from './nav_bar/nav_bar_container'
import DashboardContainer from '../components/dashboard/dashboard_container';
import LoginContainer from '../components/session/login_container';
import Home from './home/home';
import AssetShowContainer from './assets/asset_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

// login before signup
export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/us/en" component={Home} />
    <ProtectedRoute exact path="/" component={DashboardContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <Route exact path="/:ticker" component={AssetShowContainer} />
    {/* <ProtectedRoute exact path="/dashboard" component={DashboardContainer} /> */}
    {/* <Route exact path="/news/:ticker" component={AssetShowContainer} /> */}
    
  </div>
);
