var name = "xiaoming"
var age =89
var flag = true

function sum(num1,num2){
    return num1+ num2
}
if(flag){
    console.log(sum(30,51));
}


// 第一种导出方式
export{
    flag,sum
}

// 第二种导出方式
export var num1 = 10000;
export var height = 1.25;

// 3.导出函数/类
export function mul(num1,num2){
    return num1 +num2
};


export class Person{
    run(){
        console.log('别跑了')
    }
}

// 4.export default
// 导出函数或类

const address = "北京市"
export{
    address
}
//使用default导出可以对导出的函数或对象进行重命名
// 在同一个函数中不允许同时存在多个exort default函数
export default address 
