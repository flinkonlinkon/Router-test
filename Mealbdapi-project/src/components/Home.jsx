import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Food from './Food';
import Ad from './Ad';

export default function Home() {
    let api = useLoaderData()
    function Add(apiID){
      console.log(apiID);
      
      
    }
    console.log(api);
    
  return (
    <div>
      Food:{api.length}
      {
        api.map(food => <Food food={food} Add={Add}></Food>)
      }
    </div>
  )
}
