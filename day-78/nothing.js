import React, { Component } from 'react'
// import './Styles/styling.css'

class AppStyling extends Component {
    render() {
        return (
            <div>
                <div className='container' style={{ border: '1px solid black', backgroundColor: "aqua" }}>Inline css</div>

                <div className='container'>External css</div>
            </div>
        )
    }
}

export default AppStyling;