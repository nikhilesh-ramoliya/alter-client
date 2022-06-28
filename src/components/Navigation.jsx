import React from 'react'
import { Link } from 'react-router-dom';
function Navigation({ location, from, link }) {
    return (
        <div>
            <div className="navigation d-flex align-items-center">
                <div className=" d-flex align-items-center pt-3 container">
                    <p  className=''>  <Link className='link' id='li' to={"/alter-client/" + link}>
                        {from}
                    </Link>&nbsp; &#62;   {location}</p>
                </div>
            </div>
        </div>
    )
}

export default Navigation