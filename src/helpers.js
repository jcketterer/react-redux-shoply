export function calcTotal(products, cart, discount = 0) {
  let total = 0
  for (let id in products) {
    const { price } = products[id]
    const quantity = cart[id] || 0
    total += price * quantity
  }
  let withDiscount = total * (1 - discount)
  return withDiscount.toFixed(2)
}

export function calcTotalQuantity(cart) {
  let totalQuantity = 0
  for (let id in cart) {
    totalQuantity += cart[id]
  }
  return totalQuantity
}
