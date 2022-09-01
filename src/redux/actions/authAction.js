import axios from "axios";
import TYPES from "../types";

export const getRegister = (email, password) => (dispatch) => {

    console.log("data", email + password);
    
    const payload = {
        email: email,
        password: password
    }

    axios
    .post("https://reqres.in/api/register", payload)
    .then((res) => {
        console.log("response", res);
        dispatch({
            type: TYPES.POST_REGISTRASI,
            payload: res.data.token
        })
    })
    .catch((err) => {
        
        console.log(err);
    })

}

