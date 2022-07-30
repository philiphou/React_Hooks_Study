## React Hooks 学习
1. setState 更新状态的两种写法
    - setState({stateChange,[callback]})    是对象式的 setState
        -- stateChange  为状态改变对象 （该对象可以体现出状态的变化）
        -- callback 是可选的回调函数，它在状态更新完毕，界面也刷新后（render 执行后） 才被调用；
    - setState(updater,[callback]) 是函数式的setState
        -- updater 为返回stateChagne对象的函数
        -- updater 可以接收到state 和 props
        -- callback 是可选的回调函数， 它在状态更新，页面也更新后才被调用；
    - 总结：
        -- 对象式的setState是函数式的setState的语法糖
        -- 使用原则:
            1. 如果更新状态不依赖于原状态，使用对象方式
            2. 如果更新状态依赖于原状态，使用函数方式
            3. 如果需要在setState()执行后获取的最新的状态数据，要在第二个callback 函数中读取；异步渲染；
2. lazy_load: 
    - import React, { Component,lazy,Suspense } from 'react'
    - 
        const Home=lazy(()=>import('./Home'))
        const About=lazy(()=>import('./About'))
    -           <Suspense fallback={<h1 style={{color:'red'}}>Loading...</h1>}>
                    <Route path='/about' component={About}/>
                    <Route path='/home' component={Home}/>
                </Suspense>
    - Suspense 的fallback 属性中可以传入一个 component ,也可以手写一个节点
3. Hooks
    - Hook 是react16.8版本中增加的新特性，可以让函数式组件中使用 state以及其他的react特性
    - 常用hooks： React.useState(); React.useEffect(); React.useRef()
4. Fragment: 利用Fragment 标签，可以在编译时候减少层级结构，避免额外的div层级；也可以写个空标签 <></> 但是空标签不能有任何属性， Fragment标签可以有属性，只能拥有一个key属性
5. Context: 主要用于组件之间的通信，特别适用于祖组件和后代组件之间的通信；
    -使用：
        --. 创建Context 容器对象
            const xxxContext=React.createContext()
        -- 渲染子组件时候，外面包裹 xxxContext.Provider， 通过value属性传递给后代组件数据
            <xxxContext.Provider>
        -- 后代组件读取数据; 
            1) 第一种方式： 
            static contextType=xxxContext // 声明接收context
            this.context // 读取context中对策value值
            2） 函数组件与类组件都可以使用：
                <xxxContext.Consumer>
                {
                    value=>{
                        <!-- value 就是context里的value数据 -->
                        要显示的内容 
                    }
                }
                </xxxContext.Consumer>

