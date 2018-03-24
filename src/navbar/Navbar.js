import React from 'react';

import './Navbar.css';


const Navbar  = ()=>{
    return (
        <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">LAB</span>
        <form className="form-inline search">
            <input className="form-control mr-sm-9" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <span><i class="fa fa-user-circle"></i></span>
        <span><i class="fa fa-bell"></i></span>
        <span><i class="fa fa-question-circle"></i></span>
    </nav>
    )
}

export default Navbar;