import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Product({ name, wholesale, disc, retail, image, id }) {


    const inquiry = (product) => {
        console.log(product);
        document.getElementById("inquiry").style.display = "flex";
    }
    const products = useSelector(state => state.products);
    const openproduct = (id) => {
        products.filter(product => {
            if (product._id === id) {
                console.log(product);
                return product;

            }
        }
        )
    }

    return (
        <div className='product'>
            <div className="img">
                <img src={image} alt="" height={100} />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="disc">
                <div>Discription : </div>
                {disc}
            </div>
            <div className="price">
                <div className="retail">
                    Retail : <span>{retail}</span> Rs.
                </div>
                <div className="wholesale">
                    Wholesale : <span>{wholesale}</span> Rs.
                </div>
            </div>
            <div className="btn btn-primary inquirybutton" onClick={() => {
                inquiry(id);
            }}>enquiry</div>

            <Link to={`${id}`} id={id}>
                <div className="btn btn-primary inquirybutton" >details</div>
            </Link>

        </div>
    )
}

export default Product