import React from 'react';
import './BreadCrumb.css'

const BreadCrumbs = ({name})=>{
    return (
        <nav className="navbar navbar-light bg-light" aria-label="breadcrumb"  className="BreadCrumbMain">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Device</a></li>
            <li className="breadcrumb-item active" aria-current="page">{name}</li>
        </ol>
    </nav>

    )
}


export default BreadCrumbs;