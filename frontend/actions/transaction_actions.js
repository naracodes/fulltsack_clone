import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_CASH_BALANCE = "RECEIVE_CASH_BALANCE";

export const receiveCashBalance = balance => {
    return {
        type: RECEIVE_CASH_BALANCE,
        balance
    }
}

export const fetchPortfolioCashBalance = () => dispatch => {
    return TransactionAPIUtil.fetchPortfolioCashBalance().then(balance => {
        debugger
        return dispatch(receiveCashBalance(balance));
    })
}