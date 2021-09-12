import React from 'react';
import 'react-bootstrap';

import { BrowserRouter as Router, Link } from 'react-router-dom'
function Navbar({ topics }) {
    return (
        <nav classNameName="navbar navbar-light bg-light">
            <div classNameName="container-fluid">
                <Router>
                    <Link to='/' classNameName="navbar-brand">
                        News app
                        {/* Use logo */}
                    </Link>
                    <div className=" navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {Object.keys(topics).map(topic => {

                                return <li className="nav-item">
                                    <Link to={topics[topic]}>{topic}</Link>
                                </li>

                            })}


                        </ul>
                    </div>

                </Router>

                <form classNameName="d-flex">
                    <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button classNameName="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
