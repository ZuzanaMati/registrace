import React, { useState } from "react";
import "./Registration.css"

const Registration = () => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    const handleBlur = () => {
        const splitEmail = user.email.split("@")[0]

        if (user.userName === "" && user.email.includes("@")) {
            setUser({ ...user, userName: splitEmail })
        }
    }

    return (
        <div className="registration">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    placeholder="Email adress"
                    onBlur={handleBlur}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    value={user.email}>
                </input>

                <input type="text"
                    placeholder="User name"
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                    value={user.userName}></input>

                <input type="password"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    value={user.password}></input>

                <input type="password"
                    placeholder="Password Confirm"
                    onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
                    value={user.passwordConfirm}></input>

                <button type="submit">REGISTER</button>
            </form>
        </div>
    )
}

export default Registration