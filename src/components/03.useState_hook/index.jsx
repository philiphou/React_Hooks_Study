import React from 'react'
// 类式组件
/* 
class Demo extends Component {
    state={count:99}
    add=()=>{
        this.setState((state)=>({count:state.count+1}))
    }
  render() {
    return (
        <div>
            <h1>当前求和为：{this.state.count} </h1>
            <button onClick={this.add}>点我加1</button>
        </div>

    )
  }
}
*/

//  函数式组件： 利用 React.useState() 钩子让函数式组件也可以使用和操作state


const Demo = () => {
    //  React.useState() 会返回一个数组，包含两个元素，一个是状态state,一个是更新状态的方法，我们起名叫 setState,通过解构赋值，我们可以读取和操作状态
    const [state,setState] = React.useState({count:0,name:'philip'})
    //  React 底层对26行代码做了处理，第一次调用 Demo 时候就把state存储了，以后再调用时候，不会把state覆盖掉
    /* 更改状态方法1
    var add=()=>{setState({count:state.count+1})}
    */
    //    方法2
    var add = ()=>{
        setState(state=>({count:state.count+1,name:state.name}))
    }
    var change=()=>{setState(state=>({count:state.count,name:'liyi'}))}
    return (
        <div>
            <h2>当前求和为：{state.count}</h2> 
            <h2>我的名字是：{state.name}</h2> 
            <button onClick={add}>点我加1</button>
            <button onClick={change}>点我改名字</button>
        </div>
    );
}

export default Demo;

