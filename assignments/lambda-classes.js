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

const person1 = new Person({ name: 'John', age: 32, location: 'California', gender: 'Male' });
console.log(person1);
person1.speak();

const person2 = new Person({ name: 'Sarah', age: 22, location: 'Boston', gender: 'Female' });
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

  assignGrade(student) { // Stretch problem
    let newGrade = Math.round(Math.random() * 100);
    student.grade = newGrade;

    console.log(`${student.name} has a grade of ${student.grade}`);
  }
}

const instructor1 = new Instructor({ name: 'Mike', age: 35, location: 'New York', gender: 'Male', specialty: 'HTML', favLanguage: 'Javascript', catchPhrase: 'Here we go!' });
console.log(instructor1);
instructor1.demo('Classes');
instructor1.grade({ name: 'David' }, 'Javascript');

const instructor2 = new Instructor({ name: 'Sarah', age: 22, location: 'Boston', gender: 'Female', specialty: 'Algorithms', favLanguage: 'Python', catchPhrase: 'This is going to be fun' });
console.log(instructor2);
instructor2.demo('Python');
instructor2.grade({ name: 'Juan' }, 'Python');


class Student extends Person {
  constructor(object) {
    super(object);
    this.previousBackground = object.previousBackground;
    this.className = object.className;
    this.favSubjects = object.favSubjects;
    this.grade = undefined; // Stretch problem
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

  graduate() {
    if (this.grade >= 70) {
      console.log(`Congratulations to ${this.name} for graduating!`);
    } else {
      console.log(`Oops, ${this.name} did not graduate`);
      this.grade = undefined;
    }
  }
}

const student1 = new Student({ name: 'John', age: 32, location: 'California', gender: 'Male', previousBackground: 'Finance', className: 'WEBEU2', favSubjects: ['React', 'Data structures'] });
console.log(student1);
student1.listsSubjects();

const student2 = new Student({ name: 'Sarah', age: 22, location: 'Boston', gender: 'Female', previousBackground: 'Designer', className: 'WEBEU2', favSubjects: ['CSS', 'Node JS'] });
console.log(person2);
student2.PRAssignment('CSS');
student2.sprintChallenge('Advanced Javascript');


class ProjectManager extends Instructor {
  constructor(object) {
    super(object);
    this.gradClassName = object.gradClassName;
    this.favInstructor = object.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const pm1 = new ProjectManager({ name: 'Mike', age: 35, location: 'New York', gender: 'Male', specialty: 'HTML', favLanguage: 'Javascript', catchPhrase: 'Here we go!', gradClassName: 'WEBEU2', favInstructor: 'Gabe' });
console.log(pm1);
pm1.standUp('Webeu2_Mike');

const pm2 = new ProjectManager({ name: 'Sarah', age: 22, location: 'Boston', gender: 'Female', specialty: 'Algorithms', favLanguage: 'Python', catchPhrase: 'This is going to be fun', gradClassName: 'WEBEU2', favInstructor: 'Gabe' });
console.log(pm2);
pm2.debugsCode(student1, 'Python');


// Stretch problem
while (student1.grade === undefined) {
  instructor1.assignGrade(student1);
  student1.graduate();
}

while (student2.grade === undefined) {
  pm1.assignGrade(student2);
  student2.graduate();
}
