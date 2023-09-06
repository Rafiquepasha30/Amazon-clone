import  { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import Payment from "./Payment";
import {
  auth
} from "./FirebaseAuth";

import {useStateValue} from './StateProvider';
import { loadStripe
} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51LxVMfSFIP6btZqpJFz5btlRDbsLOHjzreSStkj3tPAZLlsZsfkmW4tx6NhbPL7TEynhWWNVfzIreem0gzf0zN5300IOrOYyeB");


function App() {
  const [{},dispatch] = useStateValue();
useEffect(() =>{
  auth.onAuthStateChanged(authUser =>{
    console.log('the user is >>>', authUser);

    if (authUser) {
      dispatch ({
        type: 'SET_USER',
        user:authUser
      })
    }else{
      dispatch ({
        type:'SET_USER',
        user:null
      })
    }
  })
})
  return ( 
    <Router>
    <div className = "App" >
      <Header/>
      <Routes>  
      <Route exact path='/Login' element={<Login/>}></Route>
      
    <Route exact path='/checkout' element={<Checkout/>}> </Route>
    
    <Route exact path='/payment' element={<Payment/>}></Route>
    < Route exact path = '/' element={< Home/>}/>

    </Routes>
    </div>
    </Router>
  );
}

export default App;