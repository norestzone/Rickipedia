import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Pickle from '../../src/Audio/pickle_rick.mp3'
import Portal from '../../src/Audio/portal.mp3'
import Meeseeks from '../../src/Audio/meeseeks.mp3'
import Deep from '../../src/Audio/deep.mp3'

const Navbar = (props) => {

    function pickleRick() {
        const audio = new Audio(Pickle)
        audio.play()
    }

    function portal() {
        const audio = new Audio(Portal)
        audio.play()
    }

    function meeseeks() {
        const audio = new Audio(Meeseeks)
        audio.play()
    }

    function deep() {
        const audio = new Audio(Deep)
        audio.play()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-aqua">
            <div className="container">
                <Link className="navbar-brand" to="/">{`Rickipedia & Mortiverse`}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">HOME </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={pickleRick} className="nav-link" to="/characters"> CHARACTERS </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={meeseeks} className="nav-link" to="/episodes"> EPISODES </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={portal} className="nav-link" to="/locations"> LOCATIONS </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink onClick={deep} className="nav-link" to="/theories">THEORIES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about"> ABOUT </NavLink>
                            </li>
                        </ul>
                    {
                        props.isAuth
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/update"> Update Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                                </li>
                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup">Create Account</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;