import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
<div className='home__container'>
    <img  className='home__image'
    src={require('./am4.jpg')} alt=""/>

    <div className='home__row'>
        <Product 
        title="The Learn Startup"
        price={29.99}
        image={require('./Amazon/book1.jpg')} alt=""
        rating={5}/>
        <Product title="The Learn Startup"
        price={29.99}
        image={require('./Amazon/book2.jpg')} alt=""
        rating={5} />

    </div>
    <div className='home__row'>
        <Product title="this is owesom shoos
        this type of shoos is only some 
        unit"
        price={49.99}
        image={require('./Amazon/ss1.webp')} alt=""
        rating={5} />
        <Product title="this is owesom shoos
         this type of shoos is only some 
        unit"
        price={39.99}
        image={require('./Amazon/ss2.jpg')} alt=""
        rating={5}/>
        <Product title="this is owesom shoos
        this type of shoos is only some 
        unit"
        price={19.99}
        image={require('./Amazon/s3.jpg')} alt=""
        rating={5}/>

    </div>
    <div className='home__row'>
        <Product title="The Learn Startup"
        price={59.99}
        image={require('./Amazon/book4.jpg')} alt=""
        rating={5}/>
    </div>
</div>
    </div>
  )
}

export default Home
