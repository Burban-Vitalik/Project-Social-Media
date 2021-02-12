import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;