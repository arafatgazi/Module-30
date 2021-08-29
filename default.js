// default parameter 
// tokhon e kaj krve jkhn num2 er value call kra hbe nah
function add(num1,num2=20){
    const total=num1 + num2;
    return total;
}
const result=add(20);
console.log(result);