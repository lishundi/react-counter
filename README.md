# react-counter
## ControlPanel.jsx<br/>
    应用主组件:包含3个Counter子组件
## Counter.jsx<br/>
    子组件,有不同的计数初始值
* 子组件如何向父组件传递数据?<br/>
在父组件中增加一个prop为onUpdate(),当Counter的状态改变的时候，调用这个函数，从而达到通知父组件的作用,
