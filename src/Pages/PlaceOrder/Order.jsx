import { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../components/context/StoreContext';
// import { Navigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Order = () => {
  const {getTotalAmount} = useContext(StoreContext);
   return (
    <>
      <div className="buy">
        <div className="buy-content">
        <h2>
          <div className="random"></div>
          Scan this QR Code
          <i className='fas fa-close' onClick={
            ()=>{
              document.querySelector('.buy').style.display = 'none'
            }
          }></i>
        </h2>
        <div className="qr-img">
            <img src={assets.qr} alt="" />
        </div>
        <span>${getTotalAmount()>0?getTotalAmount()+2:0}</span>
        <div className="content">
          <p>
          <input type="checkbox" />
          By checking this, you are accepting the terms of use & privacy
          </p>
        </div>
        </div>
      </div>
        <div className="order">
          <div className="left">
          <form action="" className="place-order">
                  <p className="title">
                    Delivery Information
                  </p>
                  <div className="fields">
                    <input type="text" placeholder='Enter First Name' />
                    <input type="text" placeholder='Enter Last Name' />
                  </div>
                  <div className="fields">
                    <input type="email" placeholder='Enter Your Email' />
                  <input type="text" placeholder='Enter Address' />
                  </div>
                  <div className="fields">
                    <input type="text" placeholder='Enter Mobile Number' />
                  </div>
          </form>
          </div>
          <div className="right">
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
                document.querySelector('.buy').style.display = 'block';
              }}>Proceed To Payment</button>
            </div>
          </div>
          </div>
          </div>
    </>
  )
}

export default Order