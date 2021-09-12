import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Router>
                    <Link to='/' className="navbar-brand">
                        News app
                        {/* Use logo */}
                    </Link>
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
