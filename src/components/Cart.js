import React from 'react'
import LcdMonitor from '../Images/monitor.png'
import Game from '../Images/game.png'
import UpArrow from '../Images/uparrow.png'
import DownArrow from '../Images/downarrow (1).png'

const cart = () => {
    return(
        <>
        
        <div className='product-details'>
        <div className='cart'>
          <label><span> Home /</span> Cart</label>
        </div>
            <div className='product-list'>
                <div className='product_1'>
                    <label>Product</label>
                    <label>Price</label>
                    <label>Quantity</label>
                    <label>Subtotal</label>
                </div>
                <div className='product_2'>
                    <img src={LcdMonitor} alt='Not found'></img>
                    <label>$650</label>
                    <div className='quantity_btn'> 
                        <button><label>01</label>
                        <img className='arrow_up' src={UpArrow} alt='Not Found'></img>
                        <img className='arrow_down' src={DownArrow} alt='Not Found'></img>
                        </button>
                    </div>
                    <label>$650</label>
                </div>
                <div className='product_3'>
                    <img src={Game} alt='Not found'></img>
                    <label>$550</label>
                       <div className='quantity_btn'> 
                        <button><label>02</label>
                        <img className='arrow_up' src={UpArrow} alt='Not Found'></img>
                        <img className='arrow_down' src={DownArrow} alt='Not Found'></img>
                        </button>
                        </div>
                    <label>$1100</label>
                </div>
            </div>
        
                <div className='product-btn'>
                     <button>Return To Shop</button>
                     <button>Update Cart</button>
                </div>
            
            <div className='cart_total'>
                   <div className='coupon'>
                     <input type='text' placeholder='Coupon Code'></input>
                     <button>Apply Coupon</button>
                </div>
            
            <div className='price'>
                <h4>Cart Total</h4>
                <p>Subtotal: $1750</p>
                <hr/>
                <p>Shipping: Free</p>
                <hr/>
                <p>Total: $1750</p>
                <div className='price_btn'><button>Procees to checkout</button></div>
            </div>
           </div>
           </div>

        </>
    )
}
export default cart