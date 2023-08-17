// inheritance

class Person3 {
    firstNames: string;
    lastNames: string;
    constructor(private firstName: string, private lastName: string) {
        this.firstNames = firstName;
        this.lastNames = lastName;
    }
    getFullName(): string {
        return `${this.firstNames}  ${this.lastNames}`;
    }
    describe(): string {
        return `This is ${this.firstNames}  ${this.lastNames}`;
    }
}

class Employee1 extends Person3 {
    private jobTitle: string;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string,
    ) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    // overwrite

    describe(): string {
        return `describe about quoc huu`;
    }
}

let employee = new Employee1("hội thường quân", "quoc huu", "web developer");
console.log(employee.getFullName());
console.log(employee.describe());
