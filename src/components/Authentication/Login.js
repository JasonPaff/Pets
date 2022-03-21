import React, { useState, useEffect } from 'react'
import HandleLoginUser from '../../services/authentication/login'

function Login() {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
            username:"guest",
            password:"password"
        })
    }, [])

    const handleTextChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="registerContainer">
            <div className="registerInput">
                <h1>Login</h1>
                <input type="text" placeholder="Username" name="username" onChange={handleTextChange}/>
                <input type="password" placeholder="Password" name="password" onChange={handleTextChange}/>
                <button onClick={HandleLoginUser(user)}>Login</button>
                <button className="guestBtn" onClick={HandleLoginUser(user)}>Guest Login</button>
            </div>
        </div>

    )
}


export default Login