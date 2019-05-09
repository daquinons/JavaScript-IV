// CODE here for your Lambda Classes

class Person {
  constructor(object) {
    this.name = object.name;
    this.age = object.age;
    this.location = object.location;
    this.gender = object.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

const person1 = new Person({name: 'John', age: 32, location: 'California', gender: 'Male'});
console.log(person1);
person1.speak();

const person2 = new Person({name: 'Sarah', age: 22, location: 'Boston', gender: 'Female'});
console.log(person2);
person2.speak();


class Instructor extends Person {
  constructor(object) {
    super(object);
    this.specialty = object.specialty;
    this.favLanguage = object.favLanguage;
    this.catchPhrase = object.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

const instructor1 = new Instructor({name: 'Mike', age: 35, location: 'New York', gender: 'Male', specialty: 'HTML', favLanguage: 'Javascript', catchPhrase: 'Here we go!'});
console.log(instructor1);
instructor1.demo("Classes");
instructor1.grade({name: "David"}, "Javascript");

const instructor2 = new Instructor({name: 'Sarah', age: 22, location: 'Boston', gender: 'Female', specialty: 'Algorithms', favLanguage: 'Python', catchPhrase: 'This is going to be fun'});
console.log(instructor2);
instructor2.demo("Python");
instructor2.grade({name: "Juan"}, "Python");


class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.map(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

const student1 = new Student({name: 'John', age: 32, location: 'California', gender: 'Male', previousBackground: 'Finance', className: 'WEBEU2', favSubjects: ['React', 'Data structures']});
console.log(student1);
student1.listsSubjects();

const student2 = new Student({name: 'Sarah', age: 22, location: 'Boston', gender: 'Female', previousBackground: 'Designer', className: 'WEBEU2', favSubjects: ['CSS', 'Node JS']});
console.log(person2);
student2.PRAssignment("CSS");
student2.sprintChallenge("Advanced Javascript");


