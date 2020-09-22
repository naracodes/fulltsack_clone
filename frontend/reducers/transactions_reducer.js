import { RECEIVE_CASH_BALANCE } from '../actions/transaction_actions';

const transactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CASH_BALANCE:
            return action.balance;
        default:
            return oldState;
    }
}

export default transactionsReducer;