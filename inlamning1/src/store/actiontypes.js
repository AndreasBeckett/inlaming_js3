const actiontypes = () => {
  return {
    productList: {
      getProducts: 'GET_PRODUCTS',
      setProducts: 'SET_PRODUCTS',
      setProduct: 'SET_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    }
  }
}

export default actiontypes;