
const sample_state = {
    entities: {
        stocks: {
            1: {
                id: 1,
                ticker: "FB",
                company_name: "Facebook, Inc.",
                price: 241.42,
                watchlist_ids: [20, 24],
            },
            2: {
                id: 2,
                ticker: "GOOGL",
                company_name: "Alphabet Inc.",
                price: 1555.92,
                watchlist_ids: [12, 26]
            }
        },
        users: {
            20: {
                id: 20,
                email: "abc@abc.com",
                portfolio: [1, 2],
                watchedStocks: [1, 2],
            },
            24: {
                id: 24,
                email: "def@def.com",
                portfolio: [1],
                watchedStocks: [1, 2],
            }
        },
    },
    ui: {
        loading: true/false
    },
    errors: {
        login: ["! Unable to log in with provided credentials."],
        signupForm: ["?????"],
        balance: [`! Not Enough Buying Power /n You don't have enough buying power to buy ${desiredShareCount} of ${ticker}`]
    },
    session: { currentUserId: 24 }
}
