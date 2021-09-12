import React from 'react';
import 'react-bootstrap';

import { BrowserRouter as Router, Link } from 'react-router-dom'
function Navbar({ topics }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Router>
                    <Link to='/' className="navbar-brand">
                        News app
                        {/* Use logo */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {Object.keys(topics).map(topic => {

                                return <Link to={topics[topic]} className="nav-link">{topic}</Link>

                            })}

                        </div>
                    </div>


                </Router>

                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
