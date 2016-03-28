var EventEmitter = require("events");

// 这是需要传对象进来，把回调函数本身绑定到该对象自己身上
/*
module.exports = {
    addListener: function(register, eventName, callback){
        if(!register._globalEventListener) register._globalEventListener = {};

        var globalEventListener = register._globalEventListener;
        if(!globalEventListener[eventName]){
            if(!store[eventName]) store[eventName] = [];
            store[eventName].push(register);
        }
        globalEventListener[eventName] = callback;
    },
    removeListener: function(register, eventName){
        if(register._globalEventListener && register._globalEventListener[eventName]){
            delete register._globalEventListener[eventName];

            var registers = store[eventName];
            if(!registers.length) return;

            for(var i = 0, len = registers.length; i < len; ++i){
                if(register === registers[i]){
                    registers.splice(i, 1);
                    break;
                }
            }
        }
    },
    emit: function(eventName, data){
        var registers = store[eventName];
        if(!registers.length) return;

        for(var i = 0, len = registers.length; i < len; ++i){
            var globalEventListener = registers[i] && registers[i]._globalEventListener;
            if(globalEventListener && globalEventListener[eventName])
                globalEventListener[eventName].call(registers, data);
        }
    }
};
*/

module.exports = new EventEmitter();