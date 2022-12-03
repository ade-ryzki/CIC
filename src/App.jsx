import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about/index';
import Contact from './pages/helpsupport/index'
import Product from './pages/product/index'

const App=()=> {
  return(
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help&support' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
