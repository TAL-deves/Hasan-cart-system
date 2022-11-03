import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import'./Cart.css';


const Cart = ({data}) => {
const { name, email, username, address}=data;
console.log(data);
    return (
       <div>
           <div class="card-body bg-secondary m-2 p-4 rounded-5">
            <h3 class="card-title">{name}</h3>
             <h5>{username}</h5>
            <p class="card-text">{email}</p>
            <p class="card-text"><small>{address.city}</small></p>
          </div>
       </div>
      );
}

export default Cart;
