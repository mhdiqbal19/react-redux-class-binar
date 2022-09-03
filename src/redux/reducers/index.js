import { combineReducers } from 'redux';
import dataAuth from './authReducer';
import dataReducer from './dataReducer';


const rootReducer = combineReducers({
    dataUser: dataReducer,
    dataAuth: dataAuth,
})

export default rootReducer