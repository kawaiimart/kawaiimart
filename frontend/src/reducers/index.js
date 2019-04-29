import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    cart: cartReducer,
});
