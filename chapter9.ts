// access modifiers

class Employee{
    public empName: string;
    private empCode:number;
    constructor(name: string, code: number) {
        this.empCode= code;
        this.empName= name;
    }
}
class SalesEmployee extends Employee{
    private department :string;
    constructor(name:string, code:number, department:string){
        super(name, code);
        this.department= department;
    }
}
let emp= new SalesEmployee("ád",234,"dđ");   //immutable
emp.empName;
