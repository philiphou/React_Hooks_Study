import React, { Component } from 'react'

export default class Child extends Component {
    state={
    //     users:[
    //     {id:'01',name:'philip',age:18},
    //     {id:'02',name:'liyi',age:19},
    //     {id:'03',name:'yan',age:21},
    // ]
     users:'hahdaof'

}
  render() {
    const{users}=this.state
    return (
      <div>
        <h3>我是Child组件</h3>

            {users.map(e=>{
                return(
                    <p key={e.id}>name:{e.name}---->age:{e.age}</p>
                )
            })}

        
    </div>
    )
}
      
}
