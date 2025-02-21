class Employee{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    yearSalary(){
        return this.salary * 12;
    }
}

class Manager extends Employee{
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    yearSalary(){
        return (this.salary + this.salary * 0.2) * 12;
    }
}

const manager1 = new Manager("Cristian", 3000, 'Sales')
const manager2 = new Manager("Fedor", 5000, 'Marketing')

console.log(manager1.yearSalary())
console.log(manager2.yearSalary())