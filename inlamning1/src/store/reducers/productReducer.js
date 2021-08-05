import actiontypes from '../actiontypes';

const initState = {
  products: [],
  product: null
};

const productReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().productList.setProducts:
      return {
        ...state,
        products: action.payload
      }
      
    case actiontypes().productList.setProduct:
      return {
        ...state,
        product: action.payload
      }


    default:
      return state
  }
}

export default productReducer;