import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about/index';
import Contact from './pages/helpsupport/index'
import Product from './pages/product/index'

const App=()=> {
  return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help&support' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
  )
}

export default App;
