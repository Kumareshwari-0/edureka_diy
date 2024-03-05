import React, { useState } from 'react'
import './Styles/styling.css'

function HookCounter() {

    const [count, Setcount] = useState(0)
    return (
        <div className='container1'>

            <button className='container' onClick={() => Setcount(count + 1)}>
                INCREMENT
            </button><br /><br />

            <button className='container' onClick={() => Setcount(count - 1)}>
                DECREMENT
            </button>

            <h1>{count}</h1>

            <button className='container' onClick={() => Setcount(0)}>Clear</button>
        </div>
    )
}

export default HookCounter;