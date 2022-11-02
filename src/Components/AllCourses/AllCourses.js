import React from 'react'
import { useState } from 'react';

export default function AllCourses() {
 // eslint-disable-next-line no-undef
//  const [state, setstate] = useState();
// eslint-disable-next-line no-undef
const [state, setstate] = useState('');
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setstate(data))
  return (
    <div>
      <h1>Total Data: {state.length}</h1>
{
   state.map(data=><p
   key={data.id}
   >{data.name}</p>)
}
    </div>
  )
}
