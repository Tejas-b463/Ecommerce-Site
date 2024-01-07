import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import CartList from "./CartList"
import EmptyCart from "./pages/EmptyCart"

const CartPage = () => {

  const cartItems = useSelector((store)=>store.cart.items)

  const dispatch = useDispatch()
  const handleClearCart = () =>{
          dispatch(clearCart())
  }

  return  (
    <>
    <div className='cart-summary'>
      <h2>Product Detail</h2>
    </div>
    <div className='empty-cart'>
    {cartItems.length ===0 ?
    <EmptyCart/> :
    <button className='clear-btn'
    onClick={handleClearCart}
    >Clear Cart</button>
}
    <div>
         <CartList data={cartItems}/>
    </div>
    </div>
    </>
  )
}

export default CartPage