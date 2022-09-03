// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getLogin } from './../redux/actions/authAction'


// const Login = () => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     const dispatch = useDispatch()
    
//     const {dataAuth} = useSelector((state) => state)

//     console.log("data dataAuth", dataAuth);

    
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         console.log("email", email);
//     }

//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         console.log("password", password);
//     }

//     const handleLogin = (e) => {
//         e.preventDefault()

//         dispatch(getLogin(email, password))
//     }

//   return (
//     <div>
//         <h2>Login</h2>
//         <label htmlFor="">Email : </label>
//         <input type="text" onChange={(e)=> handleEmail(e)}/>
//         <br />
//         <label htmlFor="">Password : </label>
//         <input type="password" onChange={(e) => handlePassword(e)}/>
//         <br />
//         <button onClick={handleLogin}>Submit</button>

//         <br />
//         {
//             dataAuth.tokenLogin && `Login Berhasil : token anda ${dataAuth.tokenLogin}`
//         }
//     </div>
//   )
// }

// export default Login

import { Component } from "react";
import { connect } from 'react-redux'
import { getLogin } from "../redux/actions/authAction";

class Login extends Component {

    state = { 
        email: "",
        password: "",
     }

    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleLogin = () => {
        const {email, password} = this.state;
        this.props.getLogin(email, password);
    }


    render() { 
        console.log("token", this.props.tokenLogin);
        return ( 
            <div>
                <h2>Login</h2>
                <label htmlFor="">Email : </label>
                <input type="text" onChange={this.handleEmail}/>
                <br />
                <label htmlFor="">Password : </label>
                <input type="password" onChange={this.handlePassword}/>
                <br />
                <button onClick={this.handleLogin}>Submit</button>
                <br/>
                {
                    this.props.tokenLogin && `Login Berhasil dengan token ${this.props.tokenLogin}`

                }
                
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    tokenLogin: state.dataAuth.tokenLogin

})

export default connect(mapStateToProps, {getLogin})(Login);