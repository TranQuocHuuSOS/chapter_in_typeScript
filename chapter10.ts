// readonly
class Person1{
    readonly birthDate:Date;
    constructor(birthDate: Date){
        this.birthDate= birthDate;
    }
}
let person=new Person1(new Date(2003,4,10));
person.birthDate= new Date(2004,5,8);