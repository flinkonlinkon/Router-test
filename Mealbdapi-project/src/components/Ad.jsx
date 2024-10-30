import React from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Ad({apiID}) {
    let assp = useLoaderData()
    console.log(apiID);
    

    let {id, name, username, email, address, phone, website, company} = assp
  return (
    <div>
      <p>Adding.......</p>
      nam:{name}
    </div>
  )
}
