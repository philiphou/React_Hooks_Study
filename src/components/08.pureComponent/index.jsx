import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {

    state={car:'benzi'}
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.car)
          if(nextState.car===this.state.car){
            return false
        }else{return true}

    }

    change=()=>{
        console.log('换车')
        this.setState({car:'BMW'})
    }
    render(){
        console.log('父组件被渲染了')
        const{car}=this.state
        return (
            <div className='parent'>
              <h3>我是Parent组件<span>我的车是：{car}</span></h3>
              <button onClick={this.change}>点我换车</button>
              <Child car={car}/>
            </div>
          )
    }
   
  }

class Child extends Component {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props.car)
    //   if(nextProps.car===this.Props.car){
    //     return false
    //  }else{return true}
    // }
    render() {
        console.log('子组件被渲染了')
      return (
        <div className='child'>
          <h3>我是Child组件,收到的props车是：{this.props.car}</h3>
        
        </div>
      )
    }
  }