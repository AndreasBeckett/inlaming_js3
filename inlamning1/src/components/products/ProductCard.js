import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';


const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
  <div className="col">
    <div className="card">
    <Link to={`/products/${product._id}`}>
      <img
        src={product.image}
        className="card-img-top"
        alt="..."
        />
    </Link>
        <div className="card-body">
      <Link to={`/products/${product._id}`}>
        <h5 className="card-title mb-0">{ product.name }</h5>
      </Link>
        
        <div className="card-type mb-4">{ product.type }</div>
        <h6 className="card-price mb-2">{ product.price + " kr"}</h6>
        <button className="btn btn-info" onClick={() => {
          dispatch(addToCart(product))
        }}>Add to cart</button>   
      </div>
    </div>
  </div>
  )
}

export default ProductCard
