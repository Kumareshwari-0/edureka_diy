import React, { Component } from 'react'

class Diy74 extends Component {
    constructor() {
        super();
        this.state = {
            IsClicked: false,
            FirstName: ' ',
            Email: ' '
        }
    }

    ChangeForm = () => {
        this.setState({ IsClicked: true })
    }
    HandleuName = (event) => {
        this.setState({ FirstName: event.target.value });
    }
    HandleEid = (event) => {
        this.setState({ Email: event.target.value });
    }
    HandleSubmit = (events) => {
        events.preventDefault();
        alert("Form Subitted successfully..")
    }
    render() {
        if (!this.state.IsClicked) {
            return (
                <div>
                    <h1>Mern Stack Web Development</h1>
                    <div>
                        <button onClick={this.ChangeForm}>APPLY NOW</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <h2>Mern Stack Web Development</h2>
                    <form onSubmit={this.HandleSubmit}>
                        <span>UserName : </span>
                        <input type='Text' onChange={this.HandleuName} />
                        <br />
                        <br />
                        <span>E-mail id: </span>
                        <input type='Text' onChange={this.HandleEid} />
                        <br />
                        <br />
                        <br />
                        <input type='submit' value="SubMit Now" />
                    </form>
                </div>
            )
        }
    }
}

export default Diy74