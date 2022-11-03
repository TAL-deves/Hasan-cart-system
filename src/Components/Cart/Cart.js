import React from 'react';
import'./Cart.css';


const Cart = ({data}) => {
const { name, email, username, address}=data;
console.log(data);
return (
    <div className='cart'>
        <h1>Name: {name}</h1>
        <h4>Username: {username}</h4>
        <p>Email: {email}</p>
        <p>City: {address?.city}</p>
    </div>
  );
}

export default Cart;
