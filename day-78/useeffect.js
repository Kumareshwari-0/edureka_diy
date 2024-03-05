
import React, { useEffect, useState } from 'react'

import './Styles/styling.css'

function Functional() {
    const [Hook, SetHook] = useState([]);
    const [Original, SetOriginal] = useState([]);
    const [inputText, SetInputText] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => {
                SetHook(res);
                SetOriginal(res);
            })
            .catch(err => {
                console.log(err)
            })

    }, []
    )


    return (
        <div>
            <input type='text' onChange={(events) => {
                SetInputText(events.target.value)
            }} />
            <button onClick={() => {
                let arr;
                if (inputText != '') {
                    arr = Original.filter(item => item.id == Number(inputText))
                }
                else {
                    arr = Original;
                }
                SetHook(arr)

            }}
            >Get</button>
            <br />
            <br />
            <br />
            <br />
            {Hook.map((item) => {
                return <div className='card' key={item.id}>
                    <h2>{`${item.id} - ${item.title}`}</h2>
                    <div>{item.body}</div>
                </div>
            })}
        </div>
    )
}

export default Functional