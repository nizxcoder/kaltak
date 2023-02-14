import logo from './favicon.png'
import './navbar.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-warning ">
                    <div className="container-fluid">
                        <a href='/'><img src={logo} alt="#" style={{ "height": "35px", mixBlendMode: "multiply" }} /></a>
                        <strong><a className="navbar-brand mx-2" href="/">Kal-Tak</a></strong>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ctg-btn ">
                                    <strong><Link className="nav-link category_btn" to="/">Home</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to='/sports' >Sports</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="/politics">Politics</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="/business">Business</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="entertainment">Entertainment</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="science">Science</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="/health">Health</Link></strong>
                                </li>
                                <li className="nav-item ctg-btn">
                                    <strong><Link className="nav-link category_btn" to="technology">Technology</Link></strong>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" name='q' placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark" >Submit</button>
                            </form>
                        </div>
                    </div>
                </nav >
            </div >
        )
    }
}



