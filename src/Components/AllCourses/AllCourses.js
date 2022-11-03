import React from 'react'
import { useState,useEffect } from 'react';
import Cart from '../Cart/Cart';
import './AllCourses.css'

 function AllCourses() {
 // eslint-disable-next-line no-undef
//  const [state, setstate] = useState();
// eslint-disable-next-line no-undef
const [state, setstate] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setstate(data))
  }, []);
  return (
  <div className='all-cart'>
{
  state.map(data=><Cart
  key={data.id}
  data={data}
  ></Cart>)
}
  </div>
  )
}
export default AllCourses;
