## EventEmitter
>简介：EventEmitter是node中一个实现观察者模式的类，主要功能是监听和发射消息，用于处理多模块交互问题.
<br>EventEmitter 会按照监听器注册的顺序同步地调用所有监听器。 所以必须确保事件的排序正确，且避免竞态条件。 可以使用 setImmediate() 或 process.nextTick() 切换到异步模式：