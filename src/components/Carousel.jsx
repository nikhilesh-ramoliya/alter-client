import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBanners } from '../redux/banner_action';




function Carousel() {
    const banners = useSelector(state => state.banner);

    return (
        <div className='container mb-4'>
            {banners.length !== 0 ? (
                <div id="carouselExampleIndicators" className="carousel slide bg-danger"  data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={banners[0].image} className="d-block img-fluid m-auto"  alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banners[1].image} className="d-block m-auto img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={banners[2].image} className="d-block m-auto img-fluid" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            ) : (
                <div className="d-flex container justify-content-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            )}
        </div>
    )
}

export default Carousel