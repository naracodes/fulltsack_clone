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
    // const store = configureStore();
    let store;
    
    if (window.currentUser) {
      const preloadedState = {
        session: { user: window.currentUser },
        entities: {
          users: { [window.currentUser.id]: window.currentUser },
        },
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }
      //----
      // let preloadedState = undefined;
      // if (window.currentUser) {
      //   preloadedState = {
      //     session: {
      //       user: window.currentUser,
      //     },
      //     entities: {
      //       users: { [window.currentUser.id]: window.currentUser }
      //     },
      //   };
      // }
      // const store = configureStore(preloadedState);
      // delete window.currentUser;

    // window.store = store;

    ReactDOM.render(<Root store={store} />, root);
})