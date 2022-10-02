import React, { useState } from 'react';
import PropTypes from 'prop-types'
import pic from './simmi.png';



function App(){
 return <img src={pic} width={100} height={100} alt='Simmi Foundation' />
}
export default function Navbar(props) {

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <App/>
                    <a className="navbar-brand" href="/"><h1 style={{ color: "#fd7e14" }}><i><b>{props.title} </b></i></h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    <b>Contacts</b>
                                </a>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    <b>About</b>
                                </a>
                            </li>    
                            <li className="nav-item">
                                <a className="nav-link" href="/donate">
                                    <b>Donate us</b>
                                </a>
                            </li>    
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                          

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
   

}