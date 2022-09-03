import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRegister } from '../redux/actions/authAction'

const Register = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const {dataAuth} = useSelector((state) => state)

        
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log("email", email);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log("password", password);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(getRegister(email, password))
    }

  return (
    <div>
        <h2>Register</h2>
        <label htmlFor="">Email : </label>
        <input type="text" onChange={(e)=> handleEmail(e)}/>
        <br />
        <label htmlFor="">Password : </label>
        <input type="password" onChange={(e) => handlePassword(e)}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        {
            !!dataAuth.token.length && <p>Register Berhasil</p>
        }
    </div>
  )
}

export default Register