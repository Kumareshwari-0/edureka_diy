import React, { Component } from 'react'

class Child extends React.Component {

    handleClick = () => {
        this.props.CallBackMethod("Hello this is displayed from child 1 component");
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Data Transfer</button>
            </div>
        )
    }
}

export default Child;