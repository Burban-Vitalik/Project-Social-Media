import { combineReducers, createStore } from "redux";
import { messagesReducer } from "./messages-reducer";
import { profileReducer } from "./profile-reducer";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    // profilePage: profileReducer,
    // messagesPage: messagesReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;