import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes'
import { calcTotal } from './helpers'
import data from './data.json'

const discountValues = {
  REMOVE10: 0.1,
  REMOVE20: 0.2,
  REMOVE30: 0.3,
}

const INIT_STATE = {
  products: data.products,
  itemsInCart: {},
  totalCartValue: 0.0,
  appliedDiscount: false,
  discountTotal: 0,
}

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = { ...state.itemsInCart }
      cart[action.id] = (cart[action.id] || 0) + 1
      return {
        ...state,
        itemsInCart: cart,
        totalCartValue: calcTotal(state.products, cart, state.discountTotal),
      }
    }
    case REMOVE_FROM_CART: {
      const cart = { ...state.itemsInCart }
      if (!cart[action.id]) return state
      cart[action.id]--
      if (cart[action.id] === 0) {
        delete cart[action.id]
      }
      return {
        ...state,
        itemsInCart: cart,
        totalCartValue: calcTotal(state.products, cart, state.discountTotal),
      }
    }
    case APPLY_DISCOUNT: {
      if (state.appliedDiscount === false && discountValues[action.discount]) {
        const discountAmount = discountValues[action.discount]
        return {
          ...state,
          totalCartValue: calcTotal(state.products, state.itemsInCart, discountAmount),
          appliedDiscount: true,
          discountAmount,
        }
      }
      return state
    }
    default:
      return state
  }
}

export default rootReducer
