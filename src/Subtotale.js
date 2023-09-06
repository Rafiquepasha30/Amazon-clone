import React from 'react'
import './Subtotale.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'
import {getBasketTotal} from './reducer'
import { useNavigate} from 'react-router-dom';
// import Payment from './Payment';

function Subtotale() {
   const navigate= useNavigate();

  const [{basket},] = useStateValue();

  const getBasketTotal =()=>{
    let totale=0;
    basket.map(item =>{
      return totale = Number(totale) + Number(item.price);
    })
    return totale
  }
  return (
    <div className='subtotale'>
       <CurrencyFormat 
       renderText={(getBasketTotal) => (
        <>
        <p>
            Subtotale({basket.length} items):<strong>${getBasketTotal}</strong></p>
            <small className='subtotal__gift'>
                <input type="checkbox"/>This order contain a gift
            </small>
            </>
       )}
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeprator={true}
       prefix={''} />
       
          <button onClick={(e) => navigate('/payment')}>Press to Checkout</button> 
    </div>
  )
}

export default Subtotale
