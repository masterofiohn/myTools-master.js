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

---> formatDate  转换日期时间 自定义时间格式 ：format
 ```js
 //示例
 //比如：
 //"yyyy-MM-dd HH:mm:ss";"yyyy-MM-dd-HH-mm-ss"
 //"yyyy-MM-ddTHH:mm:ss" ....
 var now = new Date();
 myTools.formatDate(now, 'yyyy-MM-dd-HH-mm-ss');//2017-08-17-15-15-16
```

---> trim  去除字符串两边的空格 参数为字符串 本方法参考了jQuery 的$.trim()方法
 ```js
 //示例
 var str = "john      ";
 myTools.trim(str);//return john
```

---> arrayRemoveSame  数组去重 传入的参数是一个数组 返回的结果是一个没有重复元素的数组
 ```js
 //示例
 var arr = [1, 1, 1, 2, 2];
 myTools.arrayRemoveSame(arr);//return [1,2]
```

---> error  抛出错误 传进对应的错误信息
 ```js
 //示例
 var str = "arguments is a array";
 myTools.error(str);
```

---> isFunction  判断传入的对象是否为function
 ```js
 //示例
 function john(){}
 myTools.isFunction(john);//return true
```


---> isWindow  判断传入的对象是否为window对象
 ```js
 //示例
 myTools.isFunction(window);//return true
```

---> isNumberic 判断传入的对象是否为数字类型
 ```js
 //示例
 myTools.isNumberic(100);//return true
```

---> isEmptyObject 判断是否为一个空的对象
 ```js
 //示例
 var obj = {};
 myTools.isEmptyObject(obj);//return true
```

---> getOnlyNumber 生成全球唯一码 
 ```js
 //示例
 // 参数  "upper" & "lower"
 //什么都不传，输出的和upper一样
 myTools.getOnlyNumber();
```

---> setCookie 添加一条cookie
 ```js
 //参数有 name value time 三个
 //s20是代表20秒
 //h是指小时，如12小时则是：h12
 //d是天数，30天则：d30
 myTools.setCookie("name","john","s20");
```

---> getCookie 获取一条cookie
 ```js
 //参数有 name 一个
 myTools.setCookie("name");
```

---> deleteCookie 删除一条cookie
 ```js
 //参数有 name 一个
 myTools.deleteCookie("name");
```


