// getter và setter
class Person2{
    public age:number;
    public firstName: string;
    public lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this.age=age;
        this.firstName= firstName;
        this.lastName= lastName;
    }
    getAge(){
        return this.age;
    }
    set currentAge(age2:number){
        if(age2<0 || age2> 150){
            throw Error("Invalid age")
        }
        this.age=age2;
    }
}
let person2 = new Person2(19,"tran", "quochuu");
person2.age= 29
// let checkAge=person2.age;  //getter
// person2.currentAge= 129; setter
// console.log(">>> check age :",person2.getAge())
console.log(">>> check age :",person2)