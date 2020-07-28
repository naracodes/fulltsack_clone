
const sample_state = {
    entities: {
        assets: {
            1: {
                id: 1,
                ticker: "FB",
                asset_name: "Facebook, Inc.",
                price: 241.42,
                about: {
                    ceo: "Sundar Pichai",
                    employees: 118,899,
                    hq: "Mountain View, California",
                    founded: 2015,
                },
                biz: {
                    marketCap: 1020000000,
                    peRatio: 31.58,
                    dividenYield: null,
                    avgVol: 1830000,
                    highToday: 1515.43,
                    lowToday: 1487.84,
                    marketOpen: 1495.90,
                    vol: 826030,
                    high52: 1587.05,
                    low52: 1008.87,
                },
            },
            2: {
                id: 2,
                ticker: "GOOGL",
                company_name: "Alphabet Inc.",
                price: 1555.92,
                about: {

                },
                biz: {

                },
            }
        },
        users: {
            20: {
                id: 20,
                email: "abc@abc.com",
                firstName: 'Nara',
                lastName: 'Lee',
                watching: [1],
            },
            24: {
                id: 24,
                email: "def@def.com",
                firstName: 'Pablo',
                lastName: 'Kim',
                watching: [2],
            }
        },
        transactions: {
            1: {
                id: 1,
                userId: 20,
                assetId: 1,
                transactionPrice: "price",
                transactionType: "type",
                quantity: "quantity"
            },
            2: {
                id: 2,

            },
        },
        watchlist: {
            1: {
                id: 1,
                userId: 20,
                assetId: 1,
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
