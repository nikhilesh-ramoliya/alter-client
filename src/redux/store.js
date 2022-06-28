import bannerReducer from "./banner_action";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productreducer } from "./Product_action";


const rootReducer = combineReducers({
    banner:bannerReducer,
    products:productreducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));