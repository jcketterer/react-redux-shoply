import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { applyDiscount } from './actions'
import CartIcons from './CartIcons'

const Cart = () => {
  const [discount, setDiscount] = useState('')
  const dispatch = useDispatch()
  const { itemsInCart, totalCartValue, appliedDiscount, discountAmount, products } =
    useSelector(store => store, shallowEqual)

  const handleChange = e => {
    setDiscount(e.target.value)
  }

  const handleDiscount = e => {
    e.preventDefault()
    dispatch(applyDiscount(discount))
    setDiscount('')
  }

  const cartTable = () => {
    const rowItems = Object.keys(itemsInCart).map(id => (
      <tr key={id}>
        <td className="text-center align-middle">
          <Link to={`/products/${id}`}>{products[id].name}</Link>
        </td>
        <td className="text-center align-middle">${products[id].price}</td>
        <td className="text-center align-middle">{itemsInCart[id]}</td>
        <td>
          <CartIcons id={id} />
        </td>
      </tr>
    ))

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rowItems}</tbody>
      </table>
    )
  }

  return itemsInCart.length === 0 ? (
    <h2>No Items In Cart</h2>
  ) : (
    <div>
      {cartTable()}
      <p>
        Total: ${totalCartValue}
        {appliedDiscount ? (
          <span className="text-success">
            - You saved {(discountAmount * 100).toFixed(0)}%!
          </span>
        ) : null}
      </p>

      <form onSubmit={handleDiscount} className="form-inline">
        <label htmlFor="discount">Discount:</label>
        <input
          id="discount"
          name="discount"
          className="form-control ml-2 mr-2"
          value={discount}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Apply Discount</button>
      </form>
    </div>
  )
}

export default Cart
