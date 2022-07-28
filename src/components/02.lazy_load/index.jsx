import React, { Component,lazy,Suspense } from 'react'
import {NavLink,Route} from 'react-router-dom'
//import About from './About'
//import Home from './Home'

const Home=lazy(()=>import('./Home'))
const About=lazy(()=>import('./About'))

export default class Demo extends Component {
 render() {
    return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
            <hr/>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-3 '>
          <div className='list-group'>
              {/* <a className='list-group-item' href="./about.html">About</a>
              <a className='list-group-item' href="./home.html">Home</a> */}
        
              <NavLink className = 'list-item' to="/about">About</NavLink>
              <NavLink className = 'list-item' to="/home">Home</NavLink>
            
             </div>
        </div>
          <div className='col-xs-5'>
          <div className='panelA'>
             <div className='panel-body'>
              {/*  注册路由*/}
                <Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                </Suspense>
             
                
              
             </div>
          </div>
        </div>
        <hr/>
      </div>
      </div>
   
 
     
    )
  }
}