import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NewArrival from '../Pages/NewArrival'
import Printed from '../Pages/Printed Fabric/Printed'
import BlukOrder from '../Pages/BlukOrder'
import Fabrics from '../Pages/Fabrics'
import About from '../Pages/About'
import Blog from '../Pages/Blog'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrival" element={<NewArrival />} />
            <Route path="/fabrics" element={<Fabrics/>} />
            <Route path="/printed" element={<Printed />} />
            <Route path="/bulkorder" element={<BlukOrder/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes