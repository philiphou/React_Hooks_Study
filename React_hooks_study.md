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
6. PureComponent:
    - Component 的2个问题：
        -- 只要执行setState()， 即使不改变状态数据，组件也会重新render
        -- 只要当前组件render,就会重新render子组件，效率低
    - 效率高的做法：
        -- 只有当前组件的state或者 props 数据发生变化时候，才重新render()
    - 原因：
        -- Component中的shouldComponentUpdate总是返回true
    - 解决方法：
        -- 1. 重写shoudComponentUpdate(), 比较新旧state或者 props数据， 如果有变化才会render,如果没有返回false
        -- 2. 使用pureComponent， pureComponent 重写了shouldComponentUpdate()， 只有state或者 props 数据 变化时候才会返回true
        -- 注意：
            1） 只是进行state和props的数据的浅比较，如果只是数据对象内部数据变了，返回false
            2) 不要直接修改state数据， 而是要产生新数据
            项目中一般使用PureComponent进行优化；
7. render-props
    - 有两个组件： A 和 B， 如果想让A 和B 形成父子关系：
        方法1. 将B组件作为标签体内容传递给A， 那么A 组件的props的 children属性就存储了 B 组件，然后在A 组件里调用渲染： {this.props.children}
          <A>
            <B/>
          </A>
        方法2： 给A组件设置一个render属性，该属性是一个函数，该函数有一个返回值，返回值是B 组件：
                <A render={()=><B/>}>
                然后在A组件中调用A 组件的render方法： {this.props.render()}
                同时 render函数还可以让A传递给B 参数，例如：把A 状态里的name属性传递给B组件:

                <A render={(name)=><B name={name}>}>
                {this.props.render(this.state.name)}
