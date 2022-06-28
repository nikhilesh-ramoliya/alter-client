import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/Product_action';
import Product from '../components/Product';


function Products() {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    console.log(products);

    const closeone = () => {
        document.getElementById("inquiry").style.display = "none";
    }

    return (
        <div>
            <Navigation from={"Home"} link={" "} location={"Products"} />
            <div className='products container mb-sm-5 mt-sm-5 border'>
                <div className='container products1'>
                    {products.length !== 0 ? (
                        <div className="row">
                            {products.map(product => (
                                <div className="col-md-4" key={product._id}>
                                    <Product className="" name={product.name} disc={product.description} wholesale={product.price.wholesale} retail={product.price.retail} image={product.image} id={product._id} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="d-flex container justify-content-center">
                            <div className="spinner-border" role="status">
                            </div>
                        </div>
                    )}
                </div>
                <div className="inquiry" id='inquiry'>
                    inquiry
                    <div className="btn btn-white border  closebutton" onClick={closeone}>
                        close
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;