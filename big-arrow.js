const add=(num1,num2) => num1 +num2;
const sum=add(10,100);
// console.log(sum);
// 1 ta parameter hle  
const fivetimes=num => num*5;
const sum1=fivetimes(17);
console.log(sum1);
const getname=()=>'brandom sam'
const name=getname();
console.log(name);

// for multiline work 
const domath=(x,y) =>{
    const sum=x+y;
    const differ=x-y;
    const result=sum*differ;
    const output=result *5;
    return output;
}
const total=domath(12,5);
console.log(total);