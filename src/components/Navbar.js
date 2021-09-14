import React from 'react';
import 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Search from './Search';



function Navbar({ topics, onSearch }) {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top" style = {{borderBottom: '1px solid rgb(80, 80, 80'}}>
            <div className="container-fluid d-flex align-items-center">
                <Router>
                    <Link to='/' className="navbar-brand text-light">
                        News app
                        {/* Use logo */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {Object.keys(topics).map((topic, index) => {

                                return <Link key = {index} to={topics[topic]} className="nav-link text-light hover mx-1">{topic}</Link>

                            })}

                        </div>
                    </div>
                </Router>

                <Search onSearch = {onSearch} />
            </div>
        </nav>
    )
}

export default Navbar
