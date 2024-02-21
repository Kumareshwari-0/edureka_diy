import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const prolist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export class Products extends Component {

    Shownum = () => {
        alert(`Product is shown +${this.prolist}`)
    }

    render() {
        return (
            <div>
                <h1>Products</h1>
                {prolist.map((value, index) => {
                    return (<button onClick={this.Shownum}>{value}
                        <Link to={`${value}`}></Link>
                    </button>)
                })}
            </div>
        )
    }
}

export default Products