import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        const {isAuthenticated, login, logout} = this.props.auth
        return (
            <>
                <Link to="/">Home</Link>{" "} | {" "}
                <Link to="/profile">Profile</Link>{" "} | {" "}
                <Link to="/public">Public</Link>{" "} | {" "}
                <button onClick={isAuthenticated() ? logout : login}>
                    {isAuthenticated() ? "Log out": "Log In"}
                </button>
            </>
        )
    }
}

export default Nav
