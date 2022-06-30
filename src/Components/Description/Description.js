import React from 'react'
import {useParams} from 'react-router-dom'
import products from '../../data'
export default function Description() {
  
    let { productId } = useParams();
    
    let product =products.find((product) => product.id===productId);
   console.log(product)
    /*let { name, imgUrl } = product;*/
  return (
    <div>
 
    </div>
  )
}


