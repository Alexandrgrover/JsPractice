class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    print(){
        return `My name is ${this.name} and my age is ${this.age}`
    }
}

const person1 = new Person("Grover", 20)
console.log(person1.print())