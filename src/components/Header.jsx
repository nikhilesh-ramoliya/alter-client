import React from 'react'
import { Link } from 'react-router-dom';
import img from ".././images.jpeg";


function Header() {
    return (
        <div>
            <div className="container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <div className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><img height="50px" src="https://res.cloudinary.com/shree8469175299/image/upload/c_thumb,w_200,g_face/v1655525956/IMG-20220511-WA0012_oqigxj.jpg" alt="" /></div>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-lg-2 justify-content-center mb-md-0">
                        <li><Link to="/alter-client/" className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to="/alter-client/about" className="nav-link px-2 link-dark">About</Link></li>
                        <li><Link to="/alter-client/products" className="nav-link px-2 link-dark">Products</Link></li>
                        <li><Link to="/alter-client/contact" className="nav-link px-2 link-dark">Contact Us</Link></li>
                    </ul>

                </header>
            </div>
        </div>
    )
}

export default Header