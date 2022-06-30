import React from 'react'
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
export default function Navbare() {
  return (
    <div>
        <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">about</Link>
       
            </li>
            <li>
            <Link to="/product">Product</Link>
            </li>
        </ul>
    </div>
    <Outlet/>
    </div>
  )
}
