import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import NewArrival from '../Pages/NewArrival'
import Printed from '../Pages/Printed Fabric/Printed'
import BlukOrder from '../Pages/BlukOrder'
import Fabrics from '../Pages/Fabrics'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newarrival" element={<NewArrival />} />
            <Route path="/fabrics" element={<Fabrics/>} />
            <Route path="/printed" element={<Printed />} />
            <Route path="bulkOrder" element={<BlukOrder/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes