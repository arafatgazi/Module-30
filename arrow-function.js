// function expression 
// 1.annonymous --without function name 
const add1=function(num1,num2){
    return num1 +num2;
}
function add2(num1,num2){
    return num1 +num2;
}
// arrow function 
const add3=(num1,num2)  => num1 +num2;



const result=add1(12,13);
const result2=add2(12,13);
const result3=add3(12,13);
console.log(result,result2,result3);