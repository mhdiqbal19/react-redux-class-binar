import { combineReducers } from 'redux';
import dataRegistrasi from './authReducer';
import dataReducer from './dataReducer';


const rootReducer = combineReducers({
    dataUser: dataReducer,
    dataReg: dataRegistrasi
})

export default rootReducer