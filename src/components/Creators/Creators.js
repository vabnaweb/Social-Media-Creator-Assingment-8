import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Creator from '../Creator/Creator';
import './Creators.css'

const Creators = () => {
    const[creators,setCreators]=useState([]);
    useEffect(()=>{
        fetch('./Sites.JSON')
        .then(res=>res.json())
        .then(data=>setCreators(data))
    })
    const[cart,setCart]=useState([]);
    const handleAddToCart=(creator)=>{
        const Newcart=[...cart,creator];
        setCart(Newcart)
    }
    return (
        <div className="container">
            <div className='creators-container'>
               {
                   creators.map(creator=><Creator
                   key={creator.Site}
                   creator={creator}
                   handleAddToCart={handleAddToCart}
                   ></Creator>)
               }
            </div>
            <div className="cart-container">
                <Cart creators={cart}></Cart>
            </div>
        </div>
    );
};

export default Creators;