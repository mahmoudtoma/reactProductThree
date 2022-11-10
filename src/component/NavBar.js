import React, { useState } from "react";


const NavBar = ({filterSearch}) => {

    const [searchState, setsearchState] = useState('')
    const onSearch = (e) => {
        e.preventDefault();
        filterSearch(searchState)
        setsearchState('')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span>Kitchen</span> Queen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-ul navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" aria-current="page" href="#">Menu</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Establishing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                  
                        </ul>
                        <form className="d-flex" role="search">
                            <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={(e)=> setsearchState(e.target.value)}
                            value={searchState}
                            ></input>
                                <button onClick={onSearch} className="btn btn-outline-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar