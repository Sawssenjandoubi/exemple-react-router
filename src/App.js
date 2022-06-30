
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import Product from './Components/Products/Product';
import Navbare from './Components/Navbar/Navbar';
import { useState } from 'react';
import {data} from'../src/data'
import Description from './Components/Description/Description';
function App() {
  
 
  return (
    <div className="App">
     
      <Routes>
        <Route path='/'element={<Navbare/>}>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path="products/:poductId" element={<Description />} />
   
    </Route>
      </Routes>
      
    </div>
  );
}

export default App;
