import React from 'react'
import products from '../../data'
import {Link} from'react-router-dom'
export default function Product() {
  return (
    <div>
       {products.map((prod)=>{
        return (
            <article>
          <h4>{prod.name}</h4>
          
          <Link to={`/products/${prod.id}`}>
            more info
            </Link> 
            
            </article>
        )
       }) 
    }
    </div>
  )
}
