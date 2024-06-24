import React, { Component } from 'react'
import Child from './child'
import Child2 from './child2'

export class Parent extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  HandleCallBack = (valuereceived) => {
    this.setState({ value: valuereceived })
  }
  render() {
    return (
      <div>Parent
        <Child CallBackMethod={this.HandleCallBack} />
        <Child2 text={this.state.value} />
      </div>
    )
  }
}

export default Parent;