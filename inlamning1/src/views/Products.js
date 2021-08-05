import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/ProductCard';
import { getProductList } from '../store/actions/productActions';

const Products = () => {

  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList.products)


  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {
          productList && productList.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        }

      </div>
    </div>

  )
}

export default Products