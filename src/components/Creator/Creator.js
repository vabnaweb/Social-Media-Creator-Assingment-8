import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './Creator.css'
const Creator = (props) => {
    const {Site,Creator,Born,Email,Salary,img}=props.creator;
    return (
        <div className="creator">
            <div>
              <img src={img} alt="" />
            </div>
            <div >
                 <h2 className="site">{Site}</h2>
                 <h5><span className="card-details">Creator : </span><span>{Creator}</span></h5>
                 <p><span className="card-details">Born : </span>{Born}</p>
                 <p><span className="card-details">Email : </span>{Email}</p>
                 <p><span className="card-details">Salary : </span>${Salary}</p>
                 <button className="btn-regular" onClick={()=>props.handleAddToCart(props.creator)}> <FontAwesomeIcon icon={faUser} />Add to cart</button>
            </div>
        </div>
    );
};

export default Creator;