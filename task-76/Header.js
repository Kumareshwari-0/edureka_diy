import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/tabstyle.css';

const Headers = () => {
    return (
        <div>
            <button style={{ backgroundColor: 'palegoldenrod' }}>
                <Link to='/'>Home</Link>
            </button>
            <button style={{ backgroundColor: 'yellowgreen' }}>
                <Link to='/about/Kumareshwari'>About</Link>
            </button>
            <button className='buttonstyle'>
                <Link to='/products'>Products</Link>
            </button>
        </div>
    )
}


export default Headers