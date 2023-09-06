import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import {useStateValue} from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'

function Payment() {

    const [{basket,user},dispatch ] = useStateValue();
    

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] =useState("");

    const [error,setError] = useState(null);
    const [disabled,setDisabled] =useState(true);

   const handleSubmit = async (event) =>{
    event.preventDefault();
    setProcessing(true);

    }
    const handleChange = event => {
      setDisabled(event.empty);
      setError(event.error? event.error.message:"");

    }
  return (
    <div className='payment'>
        <div className='payment__container'>
          <h1>
            Checkout{
              <Link to="/checkout">{basket?.length} item</Link>
            }
          </h1>

        </div>
        {/* payment section */}
        <div className='payment__section'>
            <div className='title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>cidco N12</p>
                <p>Aurangabad</p>
            </div>
        </div>
      {/* pay ment section item review */}
      <div className='payment__section'>
      <div className='payment__title'>
        <h3>review Items</h3>
      </div>
      <div className='payment__item'>
         {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))}

      </div>
      </div>

      {/* payment section payment method */}
      <div className='payment__section'></div>
      <div className='payment__title'>
        <h3>Payment Method</h3>
      </div>
      <div className='payment__details'>

        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange}/>
          <div className='payment__priceContainer'>
            <CurrencyFormat 
       renderText={(value) => (
        <h3>Order Total: {value}</h3>
        
       )}
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeprator={true}
       prefix={'$'} />
       <button disabled={processing || disabled || succeeded } >
       <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
       </button>
          </div>
          {/* Errors */}
             {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  )
}

export default Payment
