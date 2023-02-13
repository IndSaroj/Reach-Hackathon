import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {



    
    return (
        <div >
            <nav className="navbar navbar-expand-sm " style={{ backgroundColor: "#42145F" }} >
                <div className="container-fluid">
                    <h2><Link className="navbar-brand text-light" to="/">  </Link></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse margin space" id="navbarSupportedContent ">
                    <ul className="navbar-nav space me-auto mb-2 mb-lg-0 pd-1">
                            <li className="nav-item hover-underline-animation" >
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Personal</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Premier</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Business</Link>
                            </li>
                            <li className="nav-item hover-underline-animation">
                                <Link className="nav-link nav-space active" style={{ color: "#FFFFFF" }} aria-current="page" to="/">Corporate&Institution</Link>
                            </li>
                            
                        </ul>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <Link className='btn text-light hover-underline-animation' style={{ backgroundColor: "#AD1982" }} to="/register"> Register</Link>
                            <Link className='btn text-light hover-underline-animation' style={{ backgroundColor: "#AD1982" }} to="/login"> Login</Link>

                        </div>


                    </div>

                </div>
            </nav>
            <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "white" }} >
                <div className="container-fluid">
                    <h2><Link className="navbar-brand text-light" to="/"> <img src='./logo.png' alt='logo' /> </Link></h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item hover-underline" >
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/Paymentwallet" >Payment Wallet</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">You and Your money</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Banking with us</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Climate</Link>
                            </li>
                            <li className="nav-item hover-underline">
                                <Link className="nav-link active" style={{ color: "#086978" }} aria-current="page" to="/">Contact US</Link>
                            </li>

                        </ul>
                       


                    </div>

                </div>
            </nav>

        </div>



    )
}