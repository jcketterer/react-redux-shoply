import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes'
import { calcTotal } from './helpers'
import data from './data.json'

const discountValues = {
  REMOVE10: 0.1,
  REMOVE20: 0.2,
  REMOVE30: 0.3,
}
