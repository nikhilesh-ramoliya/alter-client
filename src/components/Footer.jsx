import React from 'react'
import "./style.css";
function Footer() {
    return (
        <div className="container-fluid footer_container pt-5">

            <div className="container mt-auto ">
                <div>
                    <img src="https://res.cloudinary.com/shree8469175299/image/upload/c_thumb,g_face,w_319/v1655525956/IMG-20220511-WA0012_oqigxj.jpg" alt="" />
                </div>
                <div className=' row '>
                    <div className="onecontainer pb-5 col-lg-6 col-12">
                        <h1 className='text-start'>About us</h1>
                        <p className='  text-start '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo ut sunt velit, repudiandae nobis earum, incidunt exercitationem iusto aspernatur quaerat corrupti quisquam fugiat dicta eveniet omnis quasi harum error?
                        </p>
                        <div className="icons" >
                            <ul className='row'>
                                <li className='col'>1</li>
                                <li className='col'>1</li>
                                <li className='col'>1</li>
                                <li className='col'>1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="twocontainer pb-5 col-lg-6 col-12 row">
                        <div className="left_container col">
                            <h3 className='text-start'>Quick Links</h3>
                            <ul>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                                <li>Home</li>
                            </ul>
                        </div>
                        <div className="right_container  col row">
                            <h3 className='text-start'>Products</h3>
                            <div className="left_products col-sm-6 col-6">
                                <ul>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                </ul>
                            </div>
                            <div className="right_products col-sm-6 col-6">
                                <ul>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                    <li>ball value</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="copywrite">
                        <p>
                            Copyright @ 2022. Alter Smart Electrical Accessories All Right Reserved.
                        </p>
                        <p className=''>
                            Developed By- <span className='fs-4 text-dark '>Nikhilesh Ramoliya</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer