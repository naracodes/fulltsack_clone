import { RECEIVE_CASH_BALANCE, RECEIVE_TRANSACTION } from '../actions/transaction_actions';

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CASH_BALANCE:
            let whatState = oldState;
            debugger
            return action.balance;
        case RECEIVE_TRANSACTION:
            debugger
            nextState.balance = action.transaction.balance
            return Object.assign({}, oldState, nextState);
        default:
            return oldState;
    }
}

export default transactionsReducer;