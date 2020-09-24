import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import sessionReducer from "./users_reducer";
import errorsReducer from './errors_reducer'
import portfoliosReducer from "./portfolios_reducer";


const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    portfolios: portfoliosReducer,
})

export default rootReducer;