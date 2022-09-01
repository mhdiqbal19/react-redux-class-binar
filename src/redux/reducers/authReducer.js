import TYPES from "../types"

const initialState = {
    token: "",
}

const dataRegistrasi = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.POST_REGISTRASI:
            return{
                ...state,
                token: action.payload
            }
    
        default:
            return state
    }
}

export default dataRegistrasi