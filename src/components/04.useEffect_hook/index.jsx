import React,{Component} from 'react';
import ReactDOM from 'react-dom'

/* 功能要求： 组件挂载后，和自动每秒+1，并显示, 还要加上卸载按钮*/
// class Index extends Component {
//     state={count:0}
//     add=()=>{this.setState(state=>({count:state.count+1}))}
//     componentDidMount(){
//         this.timer = setInterval(()=>{this.setState(state=>({count:state.count+1}))},1000)
//     }
//     unmount=()=>{
//      ReactDOM.unmountComponentAtNode(document.getElementById('test'))
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>当前求和为：{this.state.count}</h1>
//                 <button onClick={this.add}>单击加1</button>
//                 <button onClick={this.unmount}>卸载组件</button>

//             </div>
//         );
//     }
// }


//  React.useEffect()是个函数，需要传入2个参数： 第一个参数是个函数，该函数就类似于类组件中的生命周期钩子，第二个参数是个数组，可以为空数组，代表不监听状态变化, 

const Index = () => {

    const[state,setState]=React.useState({count:0})
    React.useEffect(()=>{ 
        //  此处相当于 componentDidMount() 和 componentDidUpdate()
        console.log('挂载了')
        let timer = setInterval(()=>{setState(state=>({count:state.count+1}))},1000)
        //  此处返回的函数相当于 componentWillUnmount 钩子
        return ()=>{
            console.log('组件卸载了')
            clearInterval(timer)
        }

    },[]) // 第二个是空数组，表示不再监听update,只输出了一次 “挂载了”， 如果不传第二个参数，默认检测所有的状态变化；
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return (
        <div>
            <h2>当前求和为：{state.count}</h2>
            <button onClick={unmount}>卸载组件</button>
        </div>
    );
}

export default Index;


