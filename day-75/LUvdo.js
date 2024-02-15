import React, { Component } from 'react'
import axios from 'axios';


const fruits = ["Apple", "Mango", "Orange", "Grapes"];
class Mapping extends Component {
    render() {
        return (
            <div>
                {fruits.map((val, ind) => {
                    return <h1>{val}</h1>
                })}
            </div>
        )
    }
}

export default Mapping;