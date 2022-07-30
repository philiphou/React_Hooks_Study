import React,{Component} from 'react';
import ReactDOM from 'react-dom'

/* 功能要求： 组件挂载后，和自动每秒+1，并显示, 还要加上卸载按钮*/
/*
class Index extends Component {
    state={count:0}
    myRef=React.createRef()
    add=()=>{this.setState(state=>({count:state.count+1}))}
    componentDidMount(){
        this.timer = setInterval(()=>{this.setState(state=>({count:state.count+1}))},1000)
    }
    unmount=()=>{
     ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    show=()=>{
        console.log(this.myRef)
        const value=this.myRef.current.value
        alert(value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>单击加1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show }>点击提示输入</button>

            </div>
        );
    }
}
*/

//  函数式组件内使用 refs

function Index(){
     const [state,setState]=React.useState({count:0});
     const add=()=>{
        console.log(setState)
        setState(state=>({count:state.count+1}))
     }
     const myRef=React.createRef()

    const show=()=>{
        const value = myRef.current.value
        alert(value)
    }
    return( <div>
        <input type="text" ref={myRef}/>
        <h1>当前求和为：{state.count}</h1>
        <button onClick={add}>单击加1</button>
        <button onClick={show}>点击提示输入</button>

    </div>)
}

export default Index;


