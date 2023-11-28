import React from 'react'
import Image from '../Images/africans.png'
import Icons_bg from '../Images/icons_bg.png'
import Icons_bg_2 from '../Images/service2.png'
import Shop_icon from '../Images/icon-shop.png'
import Icon_sale from '../Images/Icon-Sale.png'
import Icon_shopping_bag from '../Images/Icon-Shopping bag.png'
import Icon_money_bag from '../Images/moneybag.png'
import Tom from '../Images/Tom.png'
import Emma from '../Images/Emma.png'
import Smith from '../Images/Smith.png'
import Twitter from '../Images/twitter.png'
import Insta from '../Images/insta.png'
import Linkedin from '../Images/Icon-Linkedin.png'
import Delivery from '../Images/icon-delivery (1).png'
import Headphones from '../Images/icon-headphone.png'
import Check from '../Images/shield-tick.png'

function about() {
   return (
      <>
         <div className='container'>
            <div className='text'>
               <label><span> Home /</span> About</label>
            </div>
            <div className='about'>
               <div>
                  <h2>Our Story</h2>
                  <p>Launced in 2015, Exclusive is South Asia’s premier online shopping<br />
                     makterplace with an active presense in Bangladesh. Supported<br />
                     by wide range of tailored marketing, data and service solutions,<br />
                     Exclusive has 10,500 sallers and 300 brands and serves 3<br />
                     millioons customers across the region.
                  </p>
                  <p>
                     Exclusive has more than 1 Million products to offer, growing at a<br />
                     very fast. Exclusive offers a diverse assotment in categories<br />
                     ranging  from consumer.
                  </p>
               </div>
               <div>
                  <img src={Image} alt="Not found"></img>
               </div>
            </div>


            <div className='sale_detail'>

               <div className='row boxes'>

                  <div className='col-md-3 sale_col_1 border-black border-2 '>
                     <div className='box_1'>
                        <div className='relative justify-center align-center'>
                           <img className='icon_bg px-8' src={Icons_bg} alt='Not Found' />
                           <img className='icon_1' src={Shop_icon} alt='Not Found' />
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>10.5k</h2>
                        <p className='text-base font-normal'>Sellers active our site</p>
                     </div>
                  </div>

                  <div className='col-md-3 sale_col_1 bg-red-500 text-white '>
                     <div className='box_2'>
                        <div className='relative'>
                           <img className='icon_bg px-10' src={Icons_bg_2} alt='Not Found' />
                           <img className='icon_2' src={Icon_sale} alt='Not Found' />
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>30k</h2>
                        <p className='text-base font-normal'>Monthly Product Sale</p>
                     </div>
                  </div>

                  <div className='col-md-3 sale_col_1 border-black border-2'>
                     <div className='box_3'>
                        <div className='relative'>
                           <img className='icon_bg relative px-20' src={Icons_bg} alt='Not Found' />
                           <img className='icon_3 absolute' src={Icon_shopping_bag} alt='Not Found' />
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>45.5k</h2>
                        <p className='text-base font-normal'>Customer active in our site</p>
                     </div>
                  </div>

                  <div className='col-md-3 sale_col_1 border-black border-2'>
                     <div className='box_4'>
                        <div className='relative'>
                           <img className='icon_bg relative px-12' src={Icons_bg} alt='Not Found' />
                           <img className='icon_4 absolute' src={Icon_money_bag} alt='Not Found' />
                        </div>
                        <h2 className='mt-6 text-3xl font-bold'>25k</h2>
                        <p className='text-base font-normal'>Anual gross sale in our site</p>
                     </div>
                  </div>

               </div>

            </div>

            {/*----------- Members--------- */}

            <div className='members'>

               <div className='row'>
                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='tom' src={Tom} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Tom Cruise</h2>
                        <p text-base>Founder & Chairman</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='emma' src={Emma} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Emma Watson</h2>
                        <p text-base>Managing Director</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

                  <div className='col-md-4 member_1'>
                     <div className='member_img'>
                        <img className='smith' src={Smith} alt="Not Available" />
                     </div>
                     <div className='member_info'>
                        <h2 className='text-3xl mt-8'>Will Smith</h2>
                        <p text-base>Product Designer</p>
                     </div>

                     <div className='social-apps flex mt-4'>
                        <img className='mr-4' src={Twitter} alt="Not available"></img>
                        <img className='mr-4' src={Insta} alt='Not available'></img>
                        <img src={Linkedin} alt='Not available'></img>
                     </div>
                  </div>

               </div>
            </div>


            <div className='dots'>
               <div className='black_dot'></div>
               <div className='black_dot'></div>
               <div className='red'>
                  <div className='red_dot'></div>
                  <div className='bg'></div>
               </div>
               <div className='black_dot'></div>
               <div className='black_dot'></div>
            </div>

            {/* -----------Services---------- */}

            <div className='services'>
               <div className='row'>
                  <div className='col-md-4 delivery'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found" />
                        <img className='delivery_icon' src={Delivery} alt="Not found" />
                     </div>
                     <h3 className='mt-6'>FREE AND FAST DELIVERY</h3>
                     <p className='mt-2'>Free delivery for all orders over $140</p>
                  </div>

                   <div className='col-md-4 customer_service'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found"></img>
                        <img className='customer_service_icon' src={Headphones} alt="Not found"></img>
                     </div>
                     <h3 className='mt-6'>24/7 CUSTOMER SERVICE</h3>
                     <p className='mt-2'> Friendly 24/7 customer support</p>
                  </div>

                   <div className='col-md-4 guarantee'>
                     <div className='relative services_bg_icon'>
                        <img src={Icons_bg} alt="Not found"></img>
                        <img className='guarantee_icon' src={Check} alt="Not found"></img>
                     </div>
                     <h3 className='mt-6'>MONEY BACK GUARANTEE</h3>
                     <p className='mt-2'>We return money within 30 days</p>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default about
