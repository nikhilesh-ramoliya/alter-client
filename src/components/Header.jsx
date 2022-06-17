import React from 'react'
import img from ".././images.jpeg";
function Header() {
    return (
        <div>
            <div className="container-fluid">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <div className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><img height="50px" src={img} alt="" /></div>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/alter-client/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="/alter-client/about" className="nav-link px-2 link-dark">About</a></li>
                        <li><a href="/alter-client/products" className="nav-link px-2 link-dark">Products</a></li>
                        <li><a href="/alter-client/contact" className="nav-link px-2 link-dark">Contact Us</a></li>
                    </ul>

                </header>
            </div>
        </div>
    )
}

export default Header