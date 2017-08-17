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




## myTools目前具体的方法：

---> log 打印输出方法 用于在浏览器的开发者模式中，进行调试JavaScript
 ```js
 //示例
 var str = "john";
 myTools.log(str);  // return str;
```

---> objExtend 深度合并对象的属性 传入的参数无限
 ```js
 //示例
 var obj1 = { name:"john",sex:"male" ,age:"27"};
 var obj2 = { marry:"yes"};
 myTools.objExtend(obj1,obj2,.....);  //返回的object {name:"john",sex:"male" ,age:"27",marry:"yes"}
```

---> getMax  获取数字数组里面的最大数 传入的参数只允许数字数组
 ```js
 //示例
 var arr = [1,2,3,4,100,20,30,40,50];
 myTools.getMax(arr);  //return 100;
```


---> getMmin  获取数字数组里面的最小数 传入的参数只允许数字数组
 ```js
 //示例
 var arr = [1,2,3,4,100,20,30,40,50];
 myTools.getMax(arr);  //return 1;
```

---> getSum  获取数字数组里面元素之和 传入的参数只允许数字数组
 ```js
 //示例
 var arr = [1,2,3,4,100,20,30,40,50];
 myTools.getSum(arr);  //return 250;
```

---> getMult  获取数字数组里面元素之积 传入的参数只允许数字数组
 ```js
 //示例
 var arr = [1,2,3,4,100,20,30,40,50];
 myTools.getMult(arr);  //return 2880000000;
```

---> getLocaArg  获取文件路径里面的参数 只需要传进对应的名称
 ```js
 //示例
 // file:///E:/myProjects/myTools/test.html?id=1234567&name=john
 //如上面的例子，只需要传进"id"  或者 "name"
 myTools.getLocaArg("id");  //return 1234567;
```




