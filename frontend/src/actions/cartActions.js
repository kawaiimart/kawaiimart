import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM, EMPTY_CART, SET_PRODUCTS_DATA} from './types'

export const addToCart = (_id) => {
  return {
    type: ADD_TO_CART,
    _id,
  }
}

  export const subtractQuantity = (_id) => {
    return {
      type: SUB_QUANTITY,
      _id,
    }
  }

  export const addQuantity = (_id) => {
    return {
      type: ADD_QUANTITY,
      _id,
    }
  }

  export const removeItem = (_id) => {
    return {
      type: REMOVE_ITEM,
      _id,
    }
  }

  export const emptyCart = () => {
    return {
      type: EMPTY_CART,
    }
  }

  export const setProductsData = (productsData) => {
    return {
      type: SET_PRODUCTS_DATA,
      productsData,
    }
  }
