import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_CASH_BALANCE = "RECEIVE_CASH_BALANCE";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";

export const receiveCashBalance = balance => {
    return {
        type: RECEIVE_CASH_BALANCE,
        balance
    }
}

export const receiveTransaction = transaction => {
    debugger
  return {
    type: RECEIVE_TRANSACTION,
    transaction,
  };
};

export const fetchPortfolioCashBalance = () => dispatch => {
    return TransactionAPIUtil.fetchPortfolioCashBalance().then(balance => {
        return dispatch(receiveCashBalance(balance));
    })
}

export const addTransaction = order => dispatch => {
    return TransactionAPIUtil.addTransaction(order).then(transaction => {
        debugger
        return dispatch(receiveTransaction(transaction));
    })
}