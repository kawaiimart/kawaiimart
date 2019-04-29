import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM, EMPTY_CART, SET_PRODUCTS_DATA } from '../actions/types'

const initState = {
  items: [],
  addedItems: [],
  total: 0
}

const cartReducer = (state = initState, action) => {
  switch(action.type)
  {

    case ADD_TO_CART:
    {
      let addedItem = state.items.find(item => item.name === action.name);
      console.log(addedItem);
      let existedItem = state.addedItems.find(item => item.name === action.name);

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
      let addedItem = state.items.find( item => item.name === action.name);
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price
      }
      break;
    }

    case SUB_QUANTITY:
    {
      let addedItem = state.items.find(item => item.name === action.name);
      if (addedItem.quantity === 1)
      {
        let newItems = state.addedItems.filter(item => item.name !== action.name);
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
      let itemToRemove = state.addedItems.find(item => item.name === action.name);
      let newItems = state.addedItems.filter(item => item.name !== action.name);

      return {
        ...state,
        addedItems: newItems,
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      }

      break;
    }

    case EMPTY_CART:
    {
        return {
          ...state,
          addedItems: [],
          total: 0
        }

        break;
    }

    case SET_PRODUCTS_DATA:
    {
      console.log(action.productsData)
      return {
        ...state,
        items: action.productsData,
      }
    }

    default:
      return state;
  }

  return state;
}


export default cartReducer;
