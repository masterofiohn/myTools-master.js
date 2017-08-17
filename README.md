# myTools-master.js

myTools.js是一个经常使用的工具库，为了在开发过程中，很好的处理常用的数据，目前myTools.js只是一个雏形，以后会持续更新！


## myTools架构
 ---> 构造函数 MyTools() 
 ```js
function MyTools() {
    this.name = "myTools";
    this.version = "1.0";
}
```

---> 构造函数 MyTools() 使用prototype属性，进行原型链拓展
 ```js
MyTools.prototype.extend = function(name, fn) {
    this[name] = fn;
    return this;
};
```

---> new MyTools()  在window上面挂一个myTools方法
 ```js
//把myTools这个变量放在window上面
//方便调用  也就是放在全局作用域下
window.myTools = new MyTools();
```

--->然后在myTools上面进行方法拓展




- myTools目前具体的方法：
