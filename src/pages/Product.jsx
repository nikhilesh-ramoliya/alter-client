import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Navigation from '../components/Navigation';


function Product({ props }) {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const id = useParams().id;
  const product = products.filter(product => {
    if (product._id === id) {
      return product;
    }
  }
  )

  return (
    <div>
        <Navigation from={"Products"} link={"products"} location={product[0].name} />
      <div className='singleproduct container border mb-4 mt-4 '>
        <div className="img">
          <img src={product[0].image} className="image-fluid" alt="" height={100} />
        </div>
        <h1 className='name '>{product[0].name}</h1>
        <div className='description'>
          <span className='fw-bold'>Discription : </span>
          {product[0].description}</div>
        <div className='longdescription'><span className='fw-bold'>Long Discription : </span>{product[0].longDescription}</div>
        <div className="price">
          <div className="retail">
            Retail : {product[0].price.retail} ₹/Piece
          </div>
          <div className="wholesale">
            Wholesale : {product[0].price.wholesale} ₹/Piece
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product