# myTools-master.js

myTools.js是一个经常使用的工具库，为了在开发过程中，很好的处理常用的数据，目前myTools.js只是一个雏形，以后会持续更新！


- myTools架构
 --->  MyTools() 
 --->  通过构造函数的prototype属性，进行原型链拓展
 --->  MyTools.prototype.extend = function(name, fn) {
          this[name] = fn;
          return this;
       };

- myTools
