import React, { Component } from 'react'

export default class demo extends Component {
  state={count:0}
  add=()=>{
    //const {count}=this.state
    //  函数式的setState()
    /*this.setState({count:count+1},()=>{console.log('异步更新后的状态：'+this.state.count)})
    console.log('输出状态：'+this.state.count)
  }*/

  //  函数式的setState()
  this.setState((state,props)=>{console.log(state,props); return{count:state.count+props.x}},()=>{console.log('函数式异步渲染后的状态：'+ this.state.count)})
}
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加</button>
      </div>
    )
  }
}
