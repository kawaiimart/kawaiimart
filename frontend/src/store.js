import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
        rootReducer,
        inititalState,
        compose(applyMiddleware(thunk),
                window.devToolsExtension ? window.devToolsExtension() : f => f),);

export default store;
