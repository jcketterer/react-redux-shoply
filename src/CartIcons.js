import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from './actions'
import './CartIcons.css'

const CartIcons = ({ id }) => {
  const dispatch = useDispatch()

  const add = e => {
    dispatch(addToCart(id))
  }
  const remove = e => {
    dispatch(removeFromCart(id))
  }

  return (
    <div className="d-flex justify-content-between">
      <i onClick={add} className="CartIcon fas fa-cart-plus fa-2x text-success" />
      <i onClick={remove} className="CartIcon fas fa-cart-arrow-down fa-2x text-danger" />
    </div>
  )
}

export default CartIcons
