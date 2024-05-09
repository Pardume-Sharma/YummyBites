import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return (
              <>
              <div className="cart-item" key={index}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}/-</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}/-</p>
                <p onClick={()=>removeFromCart(item._id)} className
              ="cross"><i  onClick={
                ()=>{removeFromCart(item._id)}} className="fas fa-trash-alt"></i></p>
              </div>

              </>)
            }
          })}

        </div>
      </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery</p>
                <p>${getTotalAmount()>0?"2":"0"}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()>0?getTotalAmount()+2:0}</b>
              </div>
              <button className='btn-class' onClick={()=>{
                navigate('/Order')
              }}>Proceed To Checkout</button>
            </div>
          </div>

          <div className="cart-promoCode">
              <p>If You have any promo code,Enter Here</p>
              <div className="promo-input">
                <input type="text" placeholder='Enter Promo Code' />
                <button className='promo-btn'>Apply</button>
              </div>
          </div>
        </div>
    </>
  )
}

export default Cart