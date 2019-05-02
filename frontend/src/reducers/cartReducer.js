import { ADD_TO_CART, SUB_QUANTITY, ADD_QUANTITY, REMOVE_ITEM, EMPTY_CART, SET_PRODUCTS_DATA } from '../actions/types'

const initState = {
  items: [],
  addedItems: [],
  subtotal: 0,
  discount: 0,
  total: 0,
}

const cartReducer = (state = initState, action) => {
  switch(action.type)
  {

    case ADD_TO_CART:
    {
      let addedItem = state.items.find(item => item.name === action.name);
      console.log(addedItem);
      let existedItem = state.addedItems.find(item => item.name === action.name);

      let itemDiscount = 0;

      if (addedItem.name === "Ice Cream")
      {
        itemDiscount += addedItem.price * 0.15;
      }
      else if (addedItem.name === "Avocado")
      {
        itemDiscount += addedItem.price * 0.10;
      }
      else if (addedItem.name === "Bread")
      {
        itemDiscount += addedItem.price * 0.20;
      }
      else if (addedItem.name === "Pineapple")
      {
        itemDiscount += addedItem.price * 0.35;
      }

      if (existedItem)
      {
        addedItem.quantity += 1;
        return {
          ...state,
          subtotal: state.subtotal + addedItem.price,
          discount: state.discount + itemDiscount,
          total: state.total + addedItem.price - itemDiscount,
        }
      }
      else
      {
        addedItem.quantity = 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          subtotal: state.subtotal + addedItem.price,
          discount: state.discount + itemDiscount,
          total: state.total + addedItem.price - itemDiscount,
        }
      }

      break;
    }

    case ADD_QUANTITY:
    {
      let addedItem = state.items.find( item => item.name === action.name);
      addedItem.quantity += 1;

      let itemDiscount = 0;

      if (addedItem.name === "Ice Cream")
      {
        itemDiscount += addedItem.price * 0.15;
      }
      else if (addedItem.name === "Avocado")
      {
        itemDiscount += addedItem.price * 0.10;
      }
      else if (addedItem.name === "Bread")
      {
        itemDiscount += addedItem.price * 0.20;
      }
      else if (addedItem.name === "Pineapple")
      {
        itemDiscount += addedItem.price * 0.35;
      }

      return {
        ...state,
        subtotal: state.subtotal + addedItem.price,
        discount: state.discount + itemDiscount,
        total: state.total + addedItem.price - itemDiscount,
      }
      break;
    }

    case SUB_QUANTITY:
    {
      let addedItem = state.items.find(item => item.name === action.name);

      let itemDiscount = 0;

      if (addedItem.name === "Ice Cream")
      {
        itemDiscount += addedItem.price * 0.15;
      }
      else if (addedItem.name === "Avocado")
      {
        itemDiscount += addedItem.price * 0.10;
      }
      else if (addedItem.name === "Bread")
      {
        itemDiscount += addedItem.price * 0.20;
      }
      else if (addedItem.name === "Pineapple")
      {
        itemDiscount += addedItem.price * 0.35;
      }

      if (addedItem.quantity === 1)
      {
        let newItems = state.addedItems.filter(item => item.name !== action.name);
        return {
          ...state,
          addedItems: newItems,
          subtotal: state.subtotal - addedItem.price,
          discount: state.discount - itemDiscount,
          total: state.total - addedItem.price + itemDiscount
        }
      }
      else
      {
        addedItem.quantity -= 1;
        return {
          ...state,
          subtotal: state.subtotal - addedItem.price,
          discount: state.discount - itemDiscount,
          total: state.total - addedItem.price + itemDiscount
        }
      }

      break;
    }

    case REMOVE_ITEM:
    {
      let itemToRemove = state.addedItems.find(item => item.name === action.name);
      let newItems = state.addedItems.filter(item => item.name !== action.name);

      let itemDiscount = 0;

      if (itemToRemove.name === "Ice Cream")
      {
        itemDiscount += itemToRemove.price * 0.15 * itemToRemove.quantity;
      }
      else if (itemToRemove.name === "Avocado")
      {
        itemDiscount += itemToRemove.price * 0.10 * itemToRemove.quantity;
      }
      else if (itemToRemove.name === "Bread")
      {
        itemDiscount += itemToRemove.price * 0.20 * itemToRemove.quantity;
      }
      else if (itemToRemove.name === "Pineapple")
      {
        itemDiscount += itemToRemove.price * 0.35 * itemToRemove.quantity;
      }

      return {
        ...state,
        addedItems: newItems,
        subtotal: state.subtotal - (itemToRemove.price * itemToRemove.quantity),
        discount: state.discount - itemDiscount,
        total: state.total - (itemToRemove.price * itemToRemove.quantity) + itemDiscount,
      }

      break;
    }

    case EMPTY_CART:
    {
        return {
          ...state,
          addedItems: [],
          subtotal: 0,
          discount: 0,
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
