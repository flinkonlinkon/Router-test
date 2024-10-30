import React from 'react'
import { Link } from 'react-router-dom';


export default function Food({food,Add}) {
    let {id, name, username, email, address, phone, website, company} = food
    console.log(food);
    
    
  return (
    <div className='border h-52  p-4 mt-3 mb-3'>
      Food id:{id}
      <br />
      name:{name}
      <br />
      username:{username}
      <br />
      email:{email}
      <br />

      <li><Link to={`/addss/${id}`}>Add</Link></li>
      
      
    </div>
  )
}
