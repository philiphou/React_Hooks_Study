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