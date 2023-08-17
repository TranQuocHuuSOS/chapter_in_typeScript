// classes

class Person{
    ssn:string;
    firstname:string;
    lastname: string;
    constructor(ssn:string, firstname:string, lastname:string){
        this.ssn=ssn;
        this.firstname=firstname;
        this.lastname= lastname;
    }
    getFullName():string{
        return `calling method: ${this.firstname}  ${this.lastname}`;
    }
}

let hoidanIT=new Person("123","hoi dan IT","huu");
console.log(">>> check class: ", hoidanIT.getFullName);