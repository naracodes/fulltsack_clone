import { RECEIVE_HOLDINGS } from '../actions/holding_action';

const portfoliosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
      case RECEIVE_HOLDINGS:
          debugger
        return action.holdings["holdings"]
      default:
        return oldState;
    }
};

export default portfoliosReducer;