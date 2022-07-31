import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state={
    //  创建用于标识子组件是否产生错误的状态属性
    haserror:''
  }
  //   下面这个钩子函数就是用来检测Parent的任何子组件出现了报错，将错误控制在子组件内部；不影响全局渲染；
  static getDerivedStateFromError(error){
    console.log(error)
    return{haserror:error}

  }
  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {
          this.state.haserror?<h3 style={{color:'red'}}>当前网络繁忙，稍后再试</h3>:<Child/>
        }
      
      </div>
    )
  }
}
