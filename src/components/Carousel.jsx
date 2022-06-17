import axios from 'axios';
import React, { useEffect, useState } from 'react'
import img1 from "./image1.png";



function Carousel() {

    const [banners, setbanners] = useState([])
    const fatchbanners = async ()=>{
        const banners= await axios.get("https://alter-backend.herokuapp.com/banner")
        console.log(banners.data.data.slice(0,3));
        setbanners(banners.data.data.slice(0,3))
    }
    useEffect(()=>{
        fatchbanners();
    }, [])

    return (
        <div className='container'>
            {banners.length!==0 ? (
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banners[0].image} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banners[1].image} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banners[2].image} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            ) : (
                <h1>hello</h1>
            )}
        </div>
    )
}

export default Carousel