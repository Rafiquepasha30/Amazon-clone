import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; 
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import {
    auth,
} from "./FirebaseAuth";



function Header() {
    const [{basket,user} ,] = useStateValue();
    const handleAuthentication= () =>{
        if(user) {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
       <Link to='/'>
       <img className='header__logo'
        src={require('./am3.jpg')} alt=""
             />
       </Link>
             <div className='header__search'>
                <input className='header__searchInput' type="text"/>
                <SearchIcon className='header__searchIcon'/>
             </div>
        

        <div className='header__nav'>
            < Link to = {!user && "/Login"}
            >
            < div onClick = {
                handleAuthentication
            }
            className='header__option'>
                <span className='header__optionLineOne'>Hello {!user ? 'Guest': user.email }</span>
                <span className='header__optionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <div className='header__option'>
            <span className='header__optionLineOne'>Return</span>
                <span className='header__optionLineTwo'>Order</span>
            </div>

            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <div className='header__optionBasket'>
                <Link to="/checkout">
                    < div className = "header__optionBasket" >
                        <ShoppingBasketIcon />

                <span className='header__optionLineTwo 
                header__basketCount'>{basket?.length}</span>
            </div>
            </Link>
            
            </div>
            


        </div>

    </div>
  )
}

export default Header
