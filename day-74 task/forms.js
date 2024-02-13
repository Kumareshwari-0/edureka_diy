import React, { Component } from 'react'

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            FN: '',
            RollNo: undefined
        }
    }
    OnChanges = (events) => {
        this.setState({ FN: events.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { RollNo } = this.state;
        if (!Number(RollNo)) {
            alert("Rollno should be number doesn't contain alphabets")
        }
        else {
            alert("Form Submitted succesfully  " + this.state.FN);
        }
    }

    OnChangeRollno = (events) => {
        this.setState({ RollNo: events.target.value });
    }
    render() {
        let Header;
        if (this.state.FN) {
            Header = <h1>Data Submitted by ...{this.state.FN}</h1>
        }
        return (
            <div>
                <h1>USER REGISTRATION FORM</h1>
                <form onSubmit={this.HandleSubmit}>
                    {Header}
                    <span>First Name:  </span>
                    <input type='text' onChange={this.OnChanges} />
                    <span> Roll No:  </span>
                    <input type='text' OnChange={this.OnChangeRollno} />
                    <div>
                        <input type='submit' onClick={this.onSubmit} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Forms