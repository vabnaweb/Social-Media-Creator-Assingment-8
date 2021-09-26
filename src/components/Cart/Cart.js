import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import'./Cart.css'
const Cart = (props) => {


     const {creators}=props;
     let totalSalary=0;
     for(const creator of creators){
         
        totalSalary=totalSalary+creator.Salary;

     }
    return (
        <div className="cart-container">
            
            <h3><FontAwesomeIcon icon={faUser} />CreatorsNumber:{creators.length}</h3>
            <h5 className="total"><span >Total-Salary:</span>${totalSalary}</h5>
            <ul>
                {
                    creators.map(mediaCreator=><li className="li" key={mediaCreator.Site}>{mediaCreator.Creator}(<span className="site">{mediaCreator.Site}</span>)</li>)
                }
            </ul>

            
        </div>
    );
};

export default Cart;