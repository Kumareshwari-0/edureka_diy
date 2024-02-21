import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './home'
import Aboutpg from './about'
import Headers from './Header'
import Products from './product'
import Productdetails from './productdetails'

class Routnav extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Headers />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about/:name' exact element={<Aboutpg />} />
                    <Route path='/products' exact element={<Products />} />
                    <Route path='/details/products' exact element={<Productdetails />} />
                </Routes>
            </BrowserRouter >

        )
    }
}

export default Routnav