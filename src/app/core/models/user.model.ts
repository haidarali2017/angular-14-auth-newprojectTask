export class User {
    name: string;
    email: string;
    age: number;
  
    constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;
    }
  
    sayHello(): void {
      console.log(`Hello, my name is ${this.name}`);
    }
  }