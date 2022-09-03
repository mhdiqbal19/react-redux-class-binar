// import { Component } from "react";

// class Home extends Component {

//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 <h1>Hai</h1>
//             </div>
//          );
//     }
// }
 
// export default Home;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getData } from '../redux/actions/dataAction'
import { Link } from 'react-router-dom'


const Home = () => {

    const {dataUser} = useSelector((state) => state)
    const dispatch = useDispatch()

    
    useEffect(() => {
        dispatch(getData())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    console.log("data user", dataUser)

  
    return (
    <div>
        <h2>Data User</h2>
        {dataUser.data.map((item) => (
            <img src={item.avatar} alt="" />  
        ))
        }
        <br />
        <Link to="/register">
        <button>Register</button>
        </Link>
        <Link to="/login">
        <button>Login</button>
        </Link>
    </div>
  )
}

export default Home
