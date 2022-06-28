import React from 'react'

import CountUp from 'react-countup'



function Card() {
    return (
        <div className='container-fluid'>
            <div className="container px-4 py-5" id="custom-cards">

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className="col p-5" style={{"height":"500px"}}>
                        <div className="card1 card card-cover h-100 overflow-hidden text-white bg-dark rounded-4  shadow-lg" style={{ "backgroundImage": " url('https://res.cloudinary.com/shree8469175299/image/upload/o_45/v1655523614/61490740-42c8-4699-9841-a10cc5fc6abf_ik5y0k.jpg')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }} >
                            <div className="d-flex flex-column align-items-center justify-content-center h-100 p-5 pb-3 text-white text-shadow-1 "  >
                                <h1 className=" text-dark text-center fw-bold" >No. of Products</h1>
                                <h1 className=" text-dark text-center  fw-bolder" >
                                    <CountUp start={0} end={25} duration={2} separator="," />+
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="col p-5" style={{"height":"500px"}}>
                        <div className="card card1 card-cover h-100  text-white bg-dark rounded-4 shadow-lg" style={{ "backgroundImage": " url('https://res.cloudinary.com/shree8469175299/image/upload/o_45/v1655524049/d4d23a2b-4ad9-42ce-b286-edd74c4169c4_dq8wez.jpg')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }} >
                            <div className="d-flex flex-column align-items-center justify-content-center h-100 p-5 pb-3 text-white text-shadow-1 "  >
                                <h1 className=" text-dark text-center fw-bold" >Years of Experience</h1>
                                <h1 className=" text-dark text-center  fw-bolder" >
                                    <CountUp start={0} end={19} duration={2} separator="," />+
                                </h1>

                            </div>
                        </div>
                    </div>

                    <div className="col p-5" style={{"height":"500px"}}>
                        <div className="card card1 card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{ "backgroundImage": " url('https://res.cloudinary.com/shree8469175299/image/upload/o_45/v1655524359/e1bfad2c-a6ca-46c3-89d3-6fabb2b8fd23_zfvcss.jpg')", "backgroundRepeat": "no-repeat", "backgroundSize": "cover", "backgroundPosition": "center" }} >
                            <div className="d-flex flex-column align-items-center justify-content-center h-100 p-5 pb-3 text-white text-shadow-1 "  >
                                <h1 className=" text-dark text-center fw-bold" >No. of Clients</h1>
                                <h1 className=" text-dark text-center  fw-bolder" >
                                    <CountUp start={0} end={100} duration={2} separator="," />+
                                </h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card