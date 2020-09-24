import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import assetsReducer from "./assets_reducer";
import watchlistsReducer from './watchlists_reducer';
import newsReducer from './news_reducer'
import transactionsReducer from "./transactions_reducer";
import portfoliosReducer from "./portfolios_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    assets: assetsReducer,
    watchlists: watchlistsReducer,
    news: newsReducer,
    transactions: transactionsReducer,
    portfolios: portfoliosReducer,
});

export default entitiesReducer;