//工具常用工具库
//开始于2017-08-08
//editor:蒋昂
//email:jiangangshjd@163.com

//声明一个构造函数
function MyTools() {
    this.name = "myTools";
    this.version = "1.0";
}

//为了避免prototype属性的重复使用
//在构造函数上写一个extand方法
MyTools.prototype.extend = function(name, fn) {
    this[name] = fn;
    return this;
};

//把myTools这个变量放在window上面
//方便调用  也就是放在全局作用域下
window.myTools = new MyTools();

//1.log方法用来处理跨浏览器的兼容方法
//打印输出想要测试的值
myTools.extend("log", function() {
    try {
        console.log.apply(console, arguments);
    } catch (e) {
        try {
            opera.postError.apply(opera, arguments);
        } catch (e) {
            alert(Array.prototype.join.call(arguments, " "));
        }
    }
});

//2.深度合并对象的属性
//传入的参数无限个
myTools.extend("objExtend", function() {
    var obj, str;
    if (arguments.length === 1) {
        return arguments[0];
    } else {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "object") {
                throw Error("arguments are not all object");
                return false;
            } else {
                //深度克隆
                if (window.JSON) {
                    str = JSON.stringify(arguments[0]);
                    obj = JSON.parse(str);
                }

                if (i !== 0) {
                    for (var key in arguments[i]) {
                        obj[key] = arguments[i][key];
                    }
                }
            }
        }
    }
    //返回一个深度克隆的对象
    //并不会影响第一个参数的属性变化
    return obj;
});

//3.获取数字数组里面的最大数
//传入的参数只允许数字数组
myTools.extend("getMax", function() {
    var max;
    if (arguments.length > 1) {
        throw Error("arguments.length is not > 1");
        return false;
    }
    if (arguments.length === 0) {
        throw Error("arguments.length is not = 1");
        return false;
    }

    if (arguments.length === 1) {
        if (typeof arguments[0] === "object" && arguments.length) {
            if (arguments[0].length === 0) {
                return false;
            }

            max = arguments[0][0];
            if (arguments[0].length === 1) {
                return max;
            }

            if (arguments[0].length > 1) {
                var arr = arguments[0],
                    newArr;
                newArr = arr.sort(function(a, b) {
                    return b - a;
                });
                max = newArr[0];
            }

        }
        return max;
    }
});

//4.获取数字数组里面的最小数
//传入的参数只允许数字数组
myTools.extend("getMin", function() {
    var min;
    if (arguments.length > 1) {
        throw Error("arguments.length is not > 1");
        return false;
    }
    if (arguments.length === 0) {
        throw Error("arguments.length is not = 1");
        return false;
    }

    if (arguments.length === 1) {
        if (typeof arguments[0] === "object" && arguments.length) {
            if (arguments[0].length === 0) {
                return false;
            }

            min = arguments[0][0];
            if (arguments[0].length === 1) {
                return min;
            }

            if (arguments[0].length > 1) {
                var arr = arguments[0],
                    newArr;
                newArr = arr.sort(function(a, b) {
                    return a - b;
                });
                min = newArr[0];
            }
        }
        return min;
    }
});

//5.获取数字数组里面元素之和
//传入的参数只允许数字数组
myTools.extend("getSum", function() {
    var sum = 0;
    if (arguments.length > 1) {
        throw Error("arguments.length is not > 1");
        return false;
    }
    if (arguments.length === 0) {
        throw Error("arguments.length is not = 1");
        return false;
    }

    if (arguments.length === 1) {
        if (typeof arguments[0] === "object" && arguments.length) {
            if (arguments[0].length === 0) {
                return false;
            }

            if (arguments[0].length === 1) {
                sum = arguments[0][0];
                return sum;
            }

            if (arguments[0].length > 1) {
                var arr = arguments[0];
                for (var i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== "number") {
                        throw Error("it's not number array");
                        return false;
                    }
                    sum += arr[i];
                }
            }
        }
        return sum;
    }

});

//6.获取数字数组里面元素之积
//传入的参数只允许数字数组
myTools.extend("getMult", function() {
    var mult = 1;
    if (arguments.length > 1) {
        throw Error("arguments.length is not > 1");
        return false;
    }
    if (arguments.length === 0) {
        throw Error("arguments.length is not = 1");
        return false;
    }

    if (arguments.length === 1) {
        if (typeof arguments[0] === "object" && arguments.length) {
            if (arguments[0].length === 0) {
                mult = 0;
                return mult;
            }

            if (arguments[0].length === 1) {
                mult *= arguments[0][0];
                return mult;
            }

            if (arguments[0].length > 1) {
                var arr = arguments[0];
                for (var i = 0; i < arr.length; i++) {
                    if (typeof arr[i] !== "number") {
                        throw Error("it's not number array");
                        return false;
                    }
                    mult *= arr[i];
                }
            }
        }
        return mult;
    }
});

//7.获取文件路径里面的参数
//只需要传进对应的名称
// file:///E:/myProjects/myTools/test.html?id=1234567&name=john
//如上面的例子，只需要传进"id"  或者 "name"
myTools.extend("getLocaArg", function() {
    var name;

    if (arguments.length === 0 || arguments.length >= 2) {
        throw Error("arguments.length = 1");
    } else {
        name = arguments[0];
    }

    var pattern = new RegExp("[\?\&]" + name + "=([^\&]+)", "i"),
        result = location.search.match(pattern);

    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
});

//8.转换日期时间
//自定义时间格式 ：format
//比如：
//"yyyy-MM-dd HH:mm:ss";"yyyy-MM-dd-HH-mm-ss"
//"yyyy-MM-ddTHH:mm:ss" ....
myTools.extend("formatDate", function(time, format) {
    var t = new Date(time);
    var tf = function(i) {
        return (i < 10 ? '0' : '') + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(type) {
        switch (type) {
            case 'yyyy':
                return tf(t.getFullYear());
            case 'MM':
                return tf(t.getMonth() + 1);
            case 'mm':
                return tf(t.getMinutes());
            case 'dd':
                return tf(t.getDate());
            case 'HH':
                return tf(t.getHours());
            case 'ss':
                return tf(t.getSeconds());
        }
    })
});

//9.去除字符串两边的空格
//参数为字符串
//本方法参考了jQuery 的$.trim()方法
myTools.extend("trim", function(text) {
    var pattern = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    return text == null ? "" : (text + "").replace(pattern, "");
});

//10.数组去重
//传入的参数是一个数组
//返回的结果是一个没有重复元素的数组
myTools.extend("arrayRemoveSame", function(array) {
    var arr = [];
    if (typeof array === "object" && array.length) {
        for (var i = 0; i < array.length; i++) {
            if (arr.indexOf(array[i]) === -1) {
                arr.push(array[i]);
            }
        }
    } else {
        throw Error("arguments is a array");
    }
    return arr;
});


//11.抛出错误
//传进对应的错误信息
myTools.extend("error", function(msg) {
    throw new Error(msg);
});

//12.判断传入的对象是否为function
myTools.extend("isFunction", function(obj) {
    return (typeof obj) == "function";
});

//13.判断传入的对象是否为window
myTools.extend("isWindow", function(obj) {
    return obj != null && obj === obj.window;
});

//14.判断传入的对象是否为数字类型
myTools.extend("isNumberic", function(obj) {
    var type = typeof obj;

    return (type == "number" || type == "string") && !isNaN(obj - parseFloat(obj));
});

//15.判断是否为一个空的对象
myTools.extend("isEmptyObject", function(obj) {
    var key;

    for (key in obj) {
        return false;
    }
    return true;
});

//16.生成全球唯一码
// 参数  "upper" & "lower"
//什么都不传，输出的和upper一样
myTools.extend("getOnlyNumber", function(str) {
    var strArray,
        arr = [],
        i = 0;

    if (str == null || str == "upper") {
        strArray = "1234567890QWERTYUIOPASDFGHJKLZXCVBNM".split("");
    }
    if (str == "lower") {
        strArray = "1234567890qwertyuiopasdfghjklzxcvbnm".split("");
    }

    for (; i < strArray.length; i++) {
        arr.push(strArray[Math.floor(Math.random() * strArray.length)]);
    }

    return arr.join("");
});

//17.添加一条cookie
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
myTools.extend("getSec", function(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
});

//18.添加一条cookie
myTools.extend("setCookie", function(name, value, time) {
    var strsec = this.getSec(time);
    var timeCookie = new Date();
    timeCookie.setTime(timeCookie.getTime() + strsec * 1);
    document.cookie = name + "=" + encodeURI(value) + ";expires=" + timeCookie.toGMTString();
});

//19.获取一条cookie
myTools.extend("getCookie", function(name) {
    var arr = name + "=",
        pattern = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
        thisCookie = document.cookie.match(pattern);

    if (thisCookie[0].indexOf(arr) > -1) {
        return decodeURI(thisCookie[2]);
    } else {
        return null;
    }
});

//20.删除一条cookie
myTools.extend("deleteCookie", function(name) {
    var timeCookie = new Date(),
        nameCookie = this.getCookie(name);

    timeCookie.setTime(timeCookie.getTime() - 1);
    if (nameCookie != null) {
        document.cookie = name + "=" + nameCookie + ";expires=" + timeCookie.toGMTString();
    }
});

