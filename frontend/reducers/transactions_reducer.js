import { RECEIVE_HOLDINGS } from '../actions/holding_action';
import { RECEIVE_CASH_BALANCE, RECEIVE_TRANSACTION } from '../actions/transaction_actions';

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CASH_BALANCE:
            return action.balance;
        case RECEIVE_TRANSACTION:
            nextState.holdings = action.transaction.holdings
            nextState.balance = action.transaction.portfo.balance
            debugger
            return Object.assign({}, oldState, nextState);
        case RECEIVE_HOLDINGS:
            debugger
            nextState.holdings = action.holdings["holdings"];
            return Object.assign({}, oldState, nextState);
        default:
            return oldState;
    }
}

export default transactionsReducer;