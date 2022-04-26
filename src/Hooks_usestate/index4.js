import React, { Component } from 'react'

export default class Hooks_usestate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  handleIncrement=() =>
  {
      this.setState({
        //setState ekta function, state er value change korte hole setState use korte hobe
          count: this.state.count +1
      })
  }

    
  render() {
   
  const {count}=this.state
    return (
      <div>
      <h3>increment using class component</h3>
      <h1>count : {count}</h1>
      <button onClick={this.handleIncrement}>increment</button>
      </div>
    )
  }
}
