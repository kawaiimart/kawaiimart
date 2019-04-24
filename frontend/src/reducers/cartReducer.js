import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM } from '../actions/types'
import productData from '../components/ProductPage/mockdata/SampleProductsGen'

const initState = {
  items: productData,
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  switch(action.type)
  {

    case ADD_TO_CART:
    {
      let addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItems.find(item => item.id === action.id);

      if (existedItem)
      {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        }
      }
      else
      {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: state.total + addedItem.price
        }
      }

      break;
    }

    case ADD_QUANTITY:
    {
      let addedItem = state.items.find( item => item.id === action.id);
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      }
      break;
    }

    case SUB_QUANTITY:
    {
      let addedItem = state.items.find(item => item.id === action.id);

      if (addedItem.quantity === 1)
      {
        let newItems = state.addedItems.filter(item => item.id !== action.id);
        return {
          ...state,
          addedItems: newItems,
          total: state.total - addedItem.price
        }
      }
      else
      {
        addedItem.quantity -= 1;
        return {
          ...state,
          total: state.total - addedItem.price
        }
      }

      break;
    }

    case REMOVE_ITEM:
    {
      let itemToRemove = state.addedItems.find(item => item.id === action.id);
      let newItems = state.addedItems.filter(item => item.id !== action.id);

      return {
        ...state,
        addedItems: newItems,
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      }

      break;
    }

    default:
      return state;
  }

  return state;
}


export default cartReducer;
