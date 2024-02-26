import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo512.png'
import '../styles/NavBar.css'
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-color-1 ">
                <div className="container-fluid">
                    <Link className="navbar-brand nav-text p-3" to="/"> <img src={logo} alt="Bootstrap" width="30" /> Strayscue</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link nav-text p-3" aria-current="page" to="/"><i className='fa fa-home icon-color-1'></i> Home</Link>
                            <Link className="nav-link nav-text p-3" to="/ngopage"><i className="fa-solid fa-user-group icon-color-1"></i> NGOs</Link>
                            <Link className="nav-link nav-text p-3" to="/donate"><i className="fa-solid fa-circle-dollar-to-slot icon-color-1"></i> Donate</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
