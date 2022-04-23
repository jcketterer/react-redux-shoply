import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { calcTotalQuantity } from './helpers'

const Nav = () => {
  const numOfItems = useSelector(store => calcTotalQuantity(store.itemsInCart))
  const cartVal = useSelector(store => store.totalCartValue)
  const itemUnit = numOfItems === 1 ? 'item' : 'items'

  return (
    <nav className="navbar navbar-dark bg-info px-2">
      <Link to="/" className="navbar-brand text-dark">
        SHOPLY!
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item pr-3 mx-2">
          <span className="navbar-text text-dark">
            {numOfItems} {itemUnit} (${cartVal})
          </span>
        </li>
        <li>
          <Link to="/cart" className="nav-link text-dark">
            See Your Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
