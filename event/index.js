let EventEmitter=require("events").EventEmitter;
let event=new EventEmitter();

//注册事件监听
event.on("some-event",function(){
    console.log('envent emitter');
})

//触发事件
event.emit("some event");