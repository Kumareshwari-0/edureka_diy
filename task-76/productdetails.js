import React, { Component } from 'react'

export class Productdetails extends Component {
    render() {
        const { params } = this.props.match;
        return (
            <div>
                {
                    `This is Product page ${params}`
                }
            </div>
        )
    }
}

export default Productdetails