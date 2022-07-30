import React,{Component} from 'react'

//  创建Context容器对象
const MyContext=React.createContext()
// 解构赋值，去除Provider标签，从context容器对象中
const {Provider,Consumer}=MyContext


class A extends Component{
    state={username:'tom',age:18}
  
    render(){
      
        return(
            <div className='a'>
                <h2>我是A组件, 用户名：{this.state.username}</h2>
                {/*  我们需要B组件以及后代组件都可以拿到A组件的用户名，则利用Context.Provider标签包裹住B组件 */}
                {/* Provider 标签后必须添加 value 属性，传递数据 */}
                <Provider value={this.state}> 
                     <B name={this.state.username}/>
                </Provider>
  
            </div>
        )
    }
}
class B extends Component{

   
    render(){
        return(
            <div className='b'>
            <h2>我是B组件, 从A收到的props用户： {this.props.name}</h2>
            <C/>
            </div>
        )
    }
}
/*
class C extends Component{
     //  需要声明接收context, 这样才能收到从祖组件传递的value 数据; 利用静态属性 static contextType
     static contextType=MyContext

    render(){
        console.log(this.context) // C 组件收到了从祖组件A中传来的context 的value数据
        return(
            <div className='c'>
            <h2>我是C组件, 我从A收到的context用户: {this.context.username}, 年龄：{this.context.age}</h2>
            </div>
        )
    }
}
*/
//  把C组件写成函数式组件，看看如何使用Context



const C = () => {
    return (

        <div className='c'> 

          <h2>我是C组件, 我从A收到的context用户: 
            <Consumer>
                {value=>{
                    console.log(value)
                    return `${value.username},年龄是：${value.age}`
                }}
            </Consumer>
            
          </h2>
        </div>

    );
}




export default A;