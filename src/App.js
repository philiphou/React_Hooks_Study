import React, { Component } from 'react'
import Demo from './components/01_setState'

export default class App extends Component {
  render() {
    return (
      <div>
        <Demo x={20}/>
      </div>
    )
  }
}
