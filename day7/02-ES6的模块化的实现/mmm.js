//1. 导入的是{}中定义的变量
// 2.直接导入export定义的变量



// 默认导入default导入的东西，但是默认值有且只能有一个因此
// 在通过export default输出值时，只能输出一个函数
import addr from "./aaa.js";



// 在项目中进行配置后aaa.js可简写为aaa
// 通用的导入方式（将要导入的变量全写在大括号中）
// 存在的问题是，如果使用这种方法，可能会出现变量命名的冲突
import { flag, height, num1, sum, mul, Person } from "./aaa.js";


// 如果导入的东西很多的话可以使用
// import* as aaa from './aaa';
// 如果要使用aaa中的数据时只需要用"aaa.变量名"的形式就可以使用了



if (flag) {
    console.log("小明是SB哈哈哈哈");
    console.log(sum(20, 56));
}

const p = new Person();
p.run();

console.log(height);
console.log(num1);


console.log(mul(1,2));
console.log(Person);
console.log(addr);


