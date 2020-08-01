import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import assetsReducer from "./assets_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    assets: assetsReducer,
});

export default entitiesReducer;