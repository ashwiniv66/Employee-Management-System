import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <section id="main">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Employee Management System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">Employee</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/department">Department</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/compliance">Compliance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/status">Status</Link>
                            </li>   
                        </ul>
                    </div>
                </div>
                <ul className="navbar-nav">
                <li className="nav-item">
                 <Link className="nav-link" to="/login">Login</Link>
                </li>
                </ul>
            </nav>
            <div className="social">
                <footer>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                </footer>
            </div>
        </section>
        
    )
}
