import React, {useContext} from "react"
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history('/')
    }
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span className="brand-logo">Кофейня</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/course">Курсы</NavLink></li>
                    <li><NavLink to="/attestation">Аттестация</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}