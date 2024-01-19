import React, { Component } from 'react'

class Hello extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Name:'dora'
         
      }
      console.log("Constructor A:Constructor() method will executed... ");
    }
    static getDerivedStateFromProps(props,states){
        console.log('Constructor B:GetDerivedStateFromProps() method willexecuted..');
        return null
    }

    componentDidMount(){
        console.log('component did mount is executed');
    }
    
  render() {
    console.log('render method is executed');
    return (
      <div>
        hello just check console tab
      </div>
    )
  }
}

export default Hello


