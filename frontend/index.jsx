import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store';
import * as SessionUtil from './util/session_api_util';

const user1 = {
    email: "hello@test.com",
    firstName: "nara",
    lastName: "lee",
    password: "password1234",
}

const user2 = {
  email: "yellow@test.com",
  firstName: "yellow",
  lastName: "dark",
  password: "password12345",
};

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.user1 = user1;
    window.user2 = user2;
    window.login = SessionUtil.login;
    window.signup = SessionUtil.signup;
    window.logout = SessionUtil.logout;
    window.store = store;

    ReactDOM.render(<Root store={store} />, root);
})