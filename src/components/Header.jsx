import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Home = React.lazy(() => import("home/Home"));
const User = React.lazy(() => import("user/User"));
import Page from './Page'

const Header = () => {
    return (
        
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">POC</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="user">User</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                </Suspense>
            </BrowserRouter>
    )
}

export default Header