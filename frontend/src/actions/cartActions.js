import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM, EMPTY_CART, SET_PRODUCTS_DATA} from './types'

export const addToCart = (name) => {
  return {
    type: ADD_TO_CART,
    name,
  }
}

  export const subtractQuantity = (name) => {
    return {
      type: SUB_QUANTITY,
      name,
    }
  }

  export const addQuantity = (name) => {
    return {
      type: ADD_QUANTITY,
      name,
    }
  }

  export const removeItem = (name) => {
    return {
      type: REMOVE_ITEM,
      name,
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
