// rest parameters

// function getTotal(...numbers:number[]):number{
//     let total=0;
//     numbers.forEach((num)=>total+=num);
//     return total;
// }

// console.log(getTotal());
// console.log(getTotal(10,20));
// console.log(getTotal(10,20,30));





function multiply(n:number, ...m:number[]){
    let a= m.map((x)=>{
        console.log(">>> check x=", x);
        return n*x;
    })
    return m.map((x)=>n*x);
}
const test7= multiply(12, 343,4, 4,1);
console.log(">>> check test7 =", test7 )