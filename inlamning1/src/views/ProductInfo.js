import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct} from '../store/actions/productActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions';



const ProductInfo = () => {

  const id = useParams().id
  const dispatch = useDispatch();
  const product = useSelector(state => state.productList.product)


  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [dispatch, id])





  return (
    <div className="container my-5 z-depth-1">
      <section className="text-center">

        <h3 className="font-weight-bold mb-5">Product Details</h3>
        <div className="row">
          <div className="col-lg-6">
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
              <div className="carousel-inner text-center text-md-left" role="listbox">
                <div className="carousel-item active">
                <img src={ product && product.image} className="card-img-top img-fluid"
                  alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 text-center text-md-left">
            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-0 ml-xl-0 ml-4">
              <strong>{ product && product.name }</strong>
            </h2>
            <div className="type">{ product && product.type}</div>
            <h3 className="h3-responsive text-center text-md-left mt-3 ml-xl-0 ml-4 mb-0">
              <span className="red-text font-weight-bold">
                <strong>{ product && product.price + " kr"}</strong>
              </span>
            </h3>

            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
              <div className="card">
                <div className="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                  </a>
                </div>
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                  data-parent="#accordionEx">
                  <div className="card-body">
                    { product && product.description.slice(0,500) }
                  </div>
                </div>
              </div>
            </div>
        <section class="color">
          <div class="mt-5">

            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-info btn-rounded" onClick={() => {
                  dispatch(addToCart(product))}}>
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
              </div>
            </div>

          </div>
        </section>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductInfo
