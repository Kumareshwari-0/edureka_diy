import React, { Component } from 'react'

export class Child2 extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default Child2