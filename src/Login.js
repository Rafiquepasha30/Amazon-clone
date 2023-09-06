import React from 'react'
import{Link, useNavigate} from "react-router-dom"
import './Login.css'
import {useState} from 'react'


import {
  getAuth,
  createUserWithEmailAndPassword, signInWithEmailAndPassword
} from 'firebase/auth';

function Login() {
 const auth = getAuth()

  const navigate = useNavigate();
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState
  ('');
  const singIn = e =>{
e.preventDefault()
signInWithEmailAndPassword(auth,email, password)
     .then((auth) => {
      if(auth){
        navigate('/')
      }
     })
     .catch((error) => alert(error.message));
    }

  const register = e =>{
    e.preventDefault(); 
    
    createUserWithEmailAndPassword(auth,email, password)
    .then(auth =>{
      if(auth){
        navigate('/')
      }
    })
    .catch(error=>alert(error.message));
  }
  return (
    <div className='login'>
        <Link  to='/'>
        <img 
        className='login__logo'
        src={require('./am1.jpg')} alt=""/>

</Link> 
    <div className='login__container' >
        <h1>Sing-In</h1>

        <form>
            <h5>E-mail</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type='password' value={password} onChange={e=> setPassword(e.target.value)}/>
            <button
           type='submit' onClick={singIn} className='login__singInButton'>Sing In</button>
        </form>
        <p>
        What is a paragraph and example ?
            A good example of a paragraph
        contains a topic sentence,
        details and a conclusion.
        'There are many different kinds 
        
        </p>
<button
onClick={register}
className='login__registerButton'>Create Amazon Clone</button>
    </div>
    </div>
  )
}

export default Login
